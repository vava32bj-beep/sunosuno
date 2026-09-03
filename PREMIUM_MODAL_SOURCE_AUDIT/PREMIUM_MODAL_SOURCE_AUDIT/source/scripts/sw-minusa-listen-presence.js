(function(){
  'use strict';

  const VERSION = '20260722_single_binding_5';
  if (window.__swUnifiedListenPresence) return;
  window.__swUnifiedListenPresence = VERSION;
  const ENDPOINT = '/minus_listen_presence.php';
  const HEARTBEAT_MS = 8000;
  const MIN_SEND_GAP_MS = 2000;
  const MANUAL_ACTIVE_MS = 12000;

  let activeAudio = null;
  let activeCtx = null;
  let heartbeatTimer = 0;
  let manualActiveUntil = 0;
  let lastSent = { key: '', at: 0 };
  let lastPlaySignalAt = 0;
  let presenceActive = false;
  let cachedJob = '';

  function now(){ return Date.now(); }

  function sourcePage(){
    return /minusa\.php$/i.test(String(location.pathname || '')) ? 'minusa.php' : 'index.php';
  }

  function cleanJob(v){
    v = String(v || '').toLowerCase().trim();
    const m = v.match(/[a-f0-9]{32}/);
    return m ? m[0] : '';
  }

  function pageJob(){
    if (cachedJob && /^[a-f0-9]{32}$/.test(cachedJob)) return cachedJob;

    try {
      const u = new URL(location.href);
      cachedJob = cleanJob(u.searchParams.get('job') || u.searchParams.get('id') || '');
      if (cachedJob) return cachedJob;
    } catch (_) {}

    const selectors = [
      '[href*="job="]',
      '[src*="jobs_minus/"]',
      '[style*="jobs_minus/"]',
      '[data-sw-clean-href*="job="]',
      '[data-audio-src*="jobs_minus/"]',
      '[data-audio-src*="job="]'
    ];

    for (const sel of selectors) {
      const nodes = document.querySelectorAll(sel);
      for (const el of nodes) {
        const blob = [
          el.getAttribute('href'),
          el.getAttribute('src'),
          el.getAttribute('style'),
          el.getAttribute('data-sw-clean-href'),
          el.getAttribute('data-audio-src')
        ].filter(Boolean).join(' ');
        cachedJob = cleanJob(blob);
        if (cachedJob) return cachedJob;
      }
    }

    return '';
  }

  function jobFromContext(ctx){
    const srcJob = cleanJob(sourceFrom(ctx || {}));
    if (srcJob) return srcJob;

    const audio = ctx && ctx.audio;
    const btn = ctx && ctx.button;
    const nodes = [audio, btn];
    for (const node of nodes) {
      if (!node || !node.getAttribute) continue;
      const blob = [
        node.id || '',
        node.getAttribute('data-job') || '',
        node.getAttribute('data-job-id') || '',
        node.getAttribute('data-audio-src') || '',
        node.getAttribute('href') || '',
        node.getAttribute('src') || ''
      ].join(' ');
      const directJob = cleanJob(blob);
      if (directJob) return directJob;
    }

    const root = (btn || audio) && (btn || audio).closest
      ? (btn || audio).closest('[data-job],[data-job-id],.swPlanetTrack,.swTrack,.swResult,.swModal,.modal,[data-planet-players],[data-audio-root]')
      : null;
    if (root) {
      const rootJob = cleanJob([
        root.getAttribute && root.getAttribute('data-job'),
        root.getAttribute && root.getAttribute('data-job-id'),
        root.innerHTML || ''
      ].filter(Boolean).join(' '));
      if (rootJob) return rootJob;
    }

    return pageJob();
  }

  function findJob(ctx){
    return jobFromContext(ctx || {}) || pageJob();
  }

  function sessionId(job){
    const key = 'sw_listen_session_' + (job || 'unknown');
    try {
      let v = sessionStorage.getItem(key) || '';
      if (!v) {
        v = 's' + Math.random().toString(36).slice(2) + Date.now().toString(36);
        sessionStorage.setItem(key, v);
      }
      return v;
    } catch (_) {
      return 's' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
  }

  function normKind(v){
    v = String(v || '').toLowerCase();
    if (/sourceaudio|before|source|original|input/.test(v)) return 'source';
    if (/resultaudio|after|result|processed|output/.test(v)) return 'result';
    if (/vocal|vocals|voice|голос|вокал/.test(v)) return 'vocals';
    if (/minus|instr|instrumental|инстр|минус/.test(v)) return 'instrumental';
    return 'mix';
  }

  function kindFrom(el, fallback){
    const parts = [];
    if (fallback) parts.push(fallback);
    if (el) {
      parts.push(el.id || '');
      parts.push(el.className || '');
      parts.push(el.textContent || '');
      if (el.getAttribute) {
        parts.push(el.getAttribute('data-kind') || '');
        parts.push(el.getAttribute('data-listen-kind') || '');
        parts.push(el.getAttribute('data-audio-toggle') || '');
        parts.push(el.getAttribute('aria-label') || '');
        parts.push(el.getAttribute('href') || '');
        parts.push(el.getAttribute('src') || '');
      }
      if (el.currentSrc || el.src) parts.push(el.currentSrc || el.src);
    }
    return normKind(parts.join(' '));
  }

  function isAudio(el){
    return !!(el && String(el.tagName || '').toLowerCase() === 'audio');
  }

  function resolveAudioFromButton(btn){
    if (!btn) return null;

    const id = String(btn.getAttribute('data-audio-toggle') || '').trim();
    if (id) {
      const byId = document.getElementById(id);
      if (isAudio(byId)) return byId;
      const byAttr = document.querySelector(`audio[data-audio-id="${CSS.escape(id)}"], audio[data-audio-for="${CSS.escape(id)}"]`);
      if (byAttr) return byAttr;
    }

    const saasId = String(btn.getAttribute('data-saas-audio') || '').trim();
    if (saasId) {
      const bySaasId = document.getElementById(saasId);
      if (isAudio(bySaasId)) return bySaasId;
      const bySaasAttr = document.querySelector(`audio[data-audio-id="${CSS.escape(saasId)}"], audio[data-audio-for="${CSS.escape(saasId)}"]`);
      if (bySaasAttr) return bySaasAttr;
    }

    const root = btn.closest('.swPlanetTrack,.swTrack,.swResult,.swModal,.modal,[data-planet-players],[data-audio-root]') || document;
    const localAudio = root.querySelector ? root.querySelector('audio') : null;
    if (localAudio) return localAudio;

    return Array.from(document.querySelectorAll('audio')).find(isPlaying) || null;
  }

  function sourceFrom(ctx){
    const audio = ctx && ctx.audio;
    if (audio) {
      const src = String(audio.currentSrc || audio.src || audio.getAttribute('src') || '').trim();
      if (src) return src;
    }

    const btn = ctx && ctx.button;
    if (btn) {
      const root = btn.closest('.swPlanetTrack,.swTrack,.swResult') || document;
      const a = root.querySelector && root.querySelector('a[href*="minus_download.php"][href*="job="]');
      if (a) return String(a.getAttribute('href') || '');
      const img = root.querySelector && root.querySelector('img[src*="jobs_minus/"]');
      if (img) return String(img.getAttribute('src') || '');
      const wave = root.querySelector && root.querySelector('[style*="jobs_minus/"]');
      if (wave) return String(wave.getAttribute('style') || '');
    }

    return '';
  }

  function isPlaying(audio){
    return !!(audio && !audio.paused && !audio.ended && audio.readyState >= 1);
  }

  function buttonLooksPressed(btn){
    if (!btn) return false;
    const ap = String(btn.getAttribute('aria-pressed') || '').toLowerCase();
    if (ap === 'true') return true;
    if (btn.classList && (
      btn.classList.contains('is-playing') ||
      btn.classList.contains('playing') ||
      btn.classList.contains('active') ||
      btn.classList.contains('is-active')
    )) return true;
    return false;
  }

  function makePayload(action, ctx, active){
    const audio = ctx && ctx.audio ? ctx.audio : activeAudio;
    const btn = ctx && ctx.button ? ctx.button : null;
    const source = sourceFrom(ctx || {audio: audio, button: btn});
    const job = jobFromContext(ctx || {audio: audio, button: btn});
    if (!job) return null;

    const kind = (ctx && ctx.kind) || kindFrom(audio || btn, '');
    const current = audio ? Number(audio.currentTime || 0) : Number((ctx && ctx.currentTime) || 0);
    const duration = audio && isFinite(audio.duration) ? Number(audio.duration || 0) : Number((ctx && ctx.duration) || 0);

    return new URLSearchParams({
      job: job,
      job_id: job,
      session_id: sessionId(job),
      action: action,
      active: active ? '1' : '0',
      track_kind: kind,
      source_url: source,
      current_time_sec: String(Math.max(0, current).toFixed(3)),
      duration_sec: String(Math.max(0, duration).toFixed(3)),
      card_key: String((audio && audio.id) || (btn && btn.id) || ''),
      button_id: String((btn && btn.id) || ''),
      audio_id: String((audio && audio.id) || ''),
      source_page: sourcePage(),
      v: VERSION,
      t: String(Date.now())
    });
  }

  function send(action, ctx, active, beacon, force){
    const p = makePayload(action, ctx, active);
    if (!p) return;

    const key = [
      action,
      p.get('job'),
      p.get('track_kind'),
      p.get('active'),
      Math.floor(Number(p.get('current_time_sec') || 0))
    ].join('|');

    if (!force && key === lastSent.key && now() - lastSent.at < MIN_SEND_GAP_MS) return;
    lastSent = { key: key, at: now() };

    if (beacon && navigator.sendBeacon) {
      try {
        const blob = new Blob([p.toString()], {type:'application/x-www-form-urlencoded;charset=UTF-8'});
        navigator.sendBeacon(ENDPOINT, blob);
        return;
      } catch (_) {}
    }

    try {
      fetch(ENDPOINT, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-store',
        keepalive: !!beacon,
        headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
        body: p.toString()
      }).catch(function(){});
    } catch (_) {}
  }

  function startTimer(){
    if (!heartbeatTimer) heartbeatTimer = setInterval(heartbeat, HEARTBEAT_MS);
  }

  function markPlay(ctx){
    if (!ctx) ctx = {};
    if (ctx.audio) activeAudio = ctx.audio;
    activeCtx = ctx;
    manualActiveUntil = now() + MANUAL_ACTIVE_MS;

    document.documentElement.dataset.swListenPresence = 'active';
    document.documentElement.dataset.swListenPresenceJob = jobFromContext(ctx) || pageJob() || '';

    const signalAt = now();
    if (!presenceActive || signalAt - lastPlaySignalAt >= 1500) {
      send('play', ctx, true, false, false);
      lastPlaySignalAt = signalAt;
    }
    presenceActive = true;
    startTimer();
    window.setTimeout(function(){
      if (!presenceActive || activeCtx !== ctx) return;
      const audio = ctx && ctx.audio ? ctx.audio : activeAudio;
      if (audio && isPlaying(audio)) return;
      markStop('pause', ctx);
    }, MANUAL_ACTIVE_MS + 900);
  }

  function markStop(action, ctx){
    if (!presenceActive) return;
    send(action || 'pause', ctx || activeCtx || {audio: activeAudio}, false, true, true);
    presenceActive = false;
    manualActiveUntil = 0;
  }

  function heartbeat(){
    const playing = activeAudio && isPlaying(activeAudio);
    if (playing) {
      send('heartbeat', {audio: activeAudio, kind: kindFrom(activeAudio)}, true, false, false);
      return;
    }

    if (activeCtx && now() < manualActiveUntil) {
      const btn = activeCtx.button || null;
      const shouldKeep = !btn || buttonLooksPressed(btn) || (now() < activeCtx.keepUntil);
      if (shouldKeep) {
        send('heartbeat', activeCtx, true, false, false);
      }
    }
  }

  function bindAudio(audio){
    if (!audio || audio.dataset.swFinanceListenBound === VERSION) return;
    audio.dataset.swFinanceListenBound = VERSION;

    audio.addEventListener('play', function(){
      markPlay({audio: audio, kind: kindFrom(audio)});
    }, {passive:true});

    audio.addEventListener('playing', function(){
      markPlay({audio: audio, kind: kindFrom(audio)});
    }, {passive:true});

    audio.addEventListener('timeupdate', function(){
      if (isPlaying(audio)) activeAudio = audio;
    }, {passive:true});

    audio.addEventListener('pause', function(){
      if (activeAudio === audio) markStop('pause', {audio: audio, kind: kindFrom(audio)});
    }, {passive:true});

    audio.addEventListener('ended', function(){
      if (activeAudio === audio) markStop('ended', {audio: audio, kind: kindFrom(audio)});
    }, {passive:true});

    audio.addEventListener('error', function(){
      if (activeAudio === audio) markStop('hidden', {audio: audio, kind: kindFrom(audio)});
    }, {passive:true});
  }

  function bindButton(btn){
    if (!btn || btn.dataset.swFinanceListenBtnBound === VERSION) return;
    btn.dataset.swFinanceListenBtnBound = VERSION;

    function prime(){
      const audio = resolveAudioFromButton(btn);
      const kind = kindFrom(audio || btn);
      btn.dataset.swListenWasActive = (buttonLooksPressed(btn) || !!(audio && !audio.paused && !audio.ended)) ? '1' : '0';
      const ctx = {
        button: btn,
        audio: audio,
        kind: kind,
        keepUntil: now() + MANUAL_ACTIVE_MS
      };
      if (audio) activeAudio = audio;
      activeCtx = ctx;
    }

    function fire(){
      const audio = resolveAudioFromButton(btn);
      const kind = kindFrom(audio || btn);
      const ctx = {
        button: btn,
        audio: audio,
        kind: kind,
        keepUntil: now() + MANUAL_ACTIVE_MS
      };
      const wasActive = btn.dataset.swListenWasActive === '1';
      delete btn.dataset.swListenWasActive;
      if (wasActive && (!audio || audio.paused || audio.ended || !buttonLooksPressed(btn))) {
        markStop('pause', ctx);
        return;
      }
      markPlay(ctx);

      setTimeout(function(){
        const a2 = resolveAudioFromButton(btn);
        if (a2 && isPlaying(a2) && !presenceActive) {
          markPlay({button: btn, audio: a2, kind: kindFrom(a2 || btn), keepUntil: now() + MANUAL_ACTIVE_MS});
        }
      }, 180);
    }

    ['pointerdown','mousedown','touchstart'].forEach(function(type){
      btn.addEventListener(type, prime, {capture:true, passive:true});
    });

    btn.addEventListener('click', function(){
      setTimeout(fire, 40);
    }, {capture:true, passive:true});
  }

  function bind(){
    pageJob();
    document.querySelectorAll('audio').forEach(bindAudio);
    document.querySelectorAll('#minusPlay,#vocalPlay,[data-audio-toggle],[data-saas-audio],.swPlay,.swPlanetPlay,.play,.play-btn').forEach(bindButton);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, {once:true});
  } else {
    bind();
  }

  window.addEventListener('load', bind, {once:true});

  try {
    new MutationObserver(function(){
      setTimeout(bind, 80);
    }).observe(document.documentElement, {childList:true, subtree:true, attributes:true, attributeFilter:['src','data-audio-toggle','data-audio-for']});
  } catch (_) {}

  document.addEventListener('visibilitychange', function(){
    if (document.visibilityState === 'hidden') {
      if (activeAudio && isPlaying(activeAudio)) {
        send('heartbeat', {audio: activeAudio, kind: kindFrom(activeAudio)}, true, true, true);
      } else if (activeCtx) {
        send('hidden', activeCtx, false, true, true);
      }
    } else {
      bind();
      heartbeat();
    }
  }, {passive:true});

  function leave(){
    if (presenceActive && (activeAudio || activeCtx)) {
      send('leave', activeCtx || {audio: activeAudio}, false, true, true);
      presenceActive = false;
    }
  }

  window.addEventListener('pagehide', leave, {capture:true});
  window.addEventListener('beforeunload', leave, {capture:true});

  window.swListenPresence = {
    version: VERSION,
    endpoint: ENDPOINT,
    findJob: findJob,
    bind: bind,
    heartbeat: heartbeat,
    markPlay: markPlay
  };
})();
