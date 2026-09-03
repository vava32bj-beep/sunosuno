// SOURCE production/index.php:1891-1951
(() => {
  'use strict';
  if (window.__swIndexExplainToResultProofV2) return;
  window.__swIndexExplainToResultProofV2 = true;
  const operations = [
    ['Убираем неслышимый инфраниз','Освобождаем запас сигнала в самом низу.'],['Ловим цифровые всплески','Находим короткие сбои до основной обработки.'],['Выбираем нужный ремонт','Подбираем только полезные для трека этапы.'],['Восстанавливаем пики','Возвращаем естественную форму срезанным местам.'],['Ремонтируем перегрузы','Аккуратно исправляем самые тяжёлые повреждения.'],['Убираем сетевой гул','Ослабляем фон электросети и его гармоники.'],['Снижаем общий шум','Чистим фон по тихим участкам без грубого среза.'],['Убираем высокое шипение','Смягчаем постоянный верхний шум.'],['Удаляем щелчки','Отличаем короткие импульсы от атак инструментов.'],['Исправляем стерео-сбои','Проверяем левый и правый каналы.'],['Смягчаем следы MP3','Убираем металлическую зернистость сжатия.'],['Глубже восстанавливаем MP3','Отдельно обрабатываем сильные повреждения.'],['Заполняем локальные провалы','Восстанавливаем потерянные частоты по соседнему звуку.'],['Возвращаем связь гармоник','Собираем естественные отношения обертонов.'],['Делаем паузы чище','Сохраняем тишину без резких ворот.'],['Доводим голос','Сохраняем разборчивость и ровность вокала.'],['Создаём запас громкости','Выставляем безопасный внутренний уровень.'],['Укрепляем низ в моно','Стабилизируем бас на разных системах.'],['Выравниваем стереопанораму','Убираем заметные перекосы каналов.'],['Исправляем тональный баланс','Убираем мутность и резкость по измерениям.'],['Разделяем центр и края','Работаем с серединой и боками отдельно.'],['Убираем резонансы','Ослабляем звенящие частоты только там, где нужно.'],['Выравниваем диапазоны','Собираем бас, середину и верх в устойчивый баланс.'],['Возвращаем атаку','Сохраняем энергию ударов и коротких событий.'],['Финализируем ширину сцены','Настраиваем центр и стереопространство.'],['Сравниваем варианты','Выбираем лучший результат по единым правилам.'],['Смягчаем свистящие звуки','Делаем верх комфортнее для слуха.'],['Собираем микс вместе','Добавляем связность без потери акцентов.'],['Добавляем параллельную плотность','Поддерживаем тихие детали безопасной копией.'],['Повторно проверяем резкость','Не даём усилению вернуть неприятные пики.'],['Настраиваем громкость','Приводим среднюю громкость к цели.'],['Защищаем истинные пики','Ловим межсемпловые выбросы.'],['Убираем микроклиппинг','Чистим редкие единичные перегрузы.'],['Ловим микрособытия','Проверяем щелчки и короткие иглы.'],['Проверяем второй раз','Сверяем результат с исходником.'],['Оставляем удачную итерацию','Отклоняем спорное ухудшение.'],['Не выпускаем плохой вариант','Финальный шлюз защищает результат.']
  ];
  const ensure = () => {
    let alert = document.getElementById('swWaveProofAlert');
    if (alert) return alert;
    alert = document.createElement('section');
    alert.id = 'swWaveProofAlert';
    alert.setAttribute('role','dialog'); alert.setAttribute('aria-modal','true'); alert.setAttribute('aria-labelledby','swWaveProofTitle');
    alert.innerHTML = '<div class="swWaveProofAlert__panel"><div class="swWaveProofAlert__head"><div><span class="swWaveProofAlert__eyebrow">План обработки BEST · 37 операций</span><h2 id="swWaveProofTitle">Что будет сделано</h2><p>Покажем каждый этап, его техническую задачу и слышимый результат.</p></div><button class="swWaveProofAlert__close" type="button" aria-label="Закрыть">×</button></div><div class="swWaveProofAlert__body"><div class="swWaveProofAlert__metrics"><span>Исходный вес<b data-proof-source>Тут отобразится принятый вес</b></span><span>Полученный вес<b data-proof-result>Тут будет полученный вес</b></span><span>Прирост волновой структуры<b data-proof-growth>Тут рассчитаем реальный прирост волновой структуры, покажем, как он рассчитывается и что это даёт</b></span></div><ol class="swWaveProofAlert__steps">' + operations.map(([title,desc]) => '<li><b>'+title+'</b>'+desc+'</li>').join('') + '</ol></div></div>';
    document.body.appendChild(alert);
    alert.addEventListener('click', (event) => { if (event.target === alert || event.target.closest('.swWaveProofAlert__close')) close(); });
    return alert;
  };
  const close = () => { const alert = document.getElementById('swWaveProofAlert'); if (!alert) return; alert.classList.remove('is-open'); document.documentElement.classList.remove('swProofAlertOpen'); };
  const syncMetrics = (alert) => {
    [['[data-proof-source]','#impactSourceSize'],['[data-proof-result]','#impactResultSize'],['[data-proof-growth]','#impactGrowth']].forEach(([targetSelector,sourceSelector]) => {
      const source = document.querySelector(sourceSelector);
      const target = alert.querySelector(targetSelector);
      const value = String(source?.textContent || '').replace(/\s+/g,' ').trim();
      if (target && value) target.textContent = value;
    });
  };
  const open = (tense = 'future') => {
    const alert = ensure();
    alert.dataset.swProofTense = tense === 'past' ? 'past' : 'future';
    syncMetrics(alert);
    if (alert.dataset.swProofTense === 'future') {
      const source = alert.querySelector('[data-proof-source]');
      const result = alert.querySelector('[data-proof-result]');
      const growth = alert.querySelector('[data-proof-growth]');
      if (source) source.textContent = 'Тут отобразится принятый вес';
      if (result) result.textContent = 'Тут будет полученный вес';
      if (growth) growth.textContent = 'Тут рассчитаем реальный прирост волновой структуры, покажем, как он рассчитывается и что это даёт';
    }
    alert.dispatchEvent(new CustomEvent('sw:proof-tense'));
    alert.classList.add('is-open');
    document.documentElement.classList.add('swProofAlertOpen');
    alert.querySelector('.swWaveProofAlert__close')?.focus({preventScroll:true});
  };
  window.__swOpenWaveProofAlert = open;
  window.__swCloseWaveProofAlert = close;
  const intercept = (event) => {
    const trigger = event.target?.closest?.('[data-sw-open-explain],a[href="#swExplainOverlay"],a[href="#swWaveProofAlert"]');
    if (!trigger) return;
    event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation?.();
    const legacy = document.getElementById('swExplainOverlay');
    if (legacy) legacy.remove();
    trigger.setAttribute('aria-controls','swWaveProofAlert'); trigger.setAttribute('aria-haspopup','dialog');
    try { if (location.hash === '#swExplainOverlay' || location.hash === '#swWaveProofAlert') history.replaceState(null,'',location.pathname + location.search); } catch (_) {}
    open('future');
  };
  document.addEventListener('click', intercept, true);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); else if (event.key === 'Enter' || event.key === ' ') intercept(event); }, true);
})();

// SOURCE production/index.php:3589-3824
(() => {
  'use strict';
  const JOB_RE = /^[a-f0-9]{32}$/i;
  const SUMMARY_KEY = 'sunowave:result_summary';
  const SUMMARY_TTL = 30 * 24 * 60 * 60 * 1000;
  const cards = [];

  function storageGet(key) {
    try { return localStorage.getItem(key) || ''; } catch (_) { return ''; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }
  function cookieJob() {
    const match = document.cookie.match(/(?:^|;\s*)sunowave_last_job=([^;]+)/);
    if (!match) return '';
    try { return decodeURIComponent(match[1] || '').trim().toLowerCase(); } catch (_) { return ''; }
  }
  function readJob() {
    const values = [cookieJob(), storageGet('sunowave:last_job'), storageGet('sunowave_last_job')];
    for (const value of values) {
      const job = String(value || '').trim().toLowerCase();
      if (JOB_RE.test(job)) return job;
    }
    return '';
  }
  function persistJob(job) {
    if (!JOB_RE.test(job)) return;
    storageSet('sunowave:last_job', job);
    storageSet('sunowave_last_job', job);
    try { document.cookie = 'sunowave_last_job=' + encodeURIComponent(job) + '; Max-Age=2592000; Path=/; SameSite=Lax'; } catch (_) {}
  }
  function trackName(value) {
    let name = String(value || '').trim().split(/[\\/]/).pop() || '';
    name = name.replace(/\.(?:mp3|wav|flac|m4a|aac|ogg)$/i, '').trim();
    return name || storageGet('sunowave:last_track_name') || 'Ваш обработанный трек';
  }
  function bytesFrom(data, keys) {
    for (const key of keys) {
      const value = Number(data && data[key]);
      if (Number.isFinite(value) && value > 0) return value;
    }
    return 0;
  }
  function formatMb(bytes) {
    const value = Number(bytes || 0);
    return Number.isFinite(value) && value > 0 ? (value / 1048576).toFixed(2) + ' МБ' : '—';
  }
  function visualDiffPercentFrom(data) {
    const keys = [
      'visualDiffPercent',
      'visual_diff_percent',
      'waveform_diff_percent',
      'waveform_growth_percent',
      'waveform_added_percent',
      'visual_growth_percent',
      'waveformGrowthPercent'
    ];
    for (const key of keys) {
      const value = Number(data && data[key]);
      if (Number.isFinite(value) && value >= 0) return value;
    }
    const nested = data && (data.visual_diff || data.waveform_diff || data.waveform_growth);
    if (nested && typeof nested === 'object') {
      for (const key of ['percent', 'added_percent', 'growth_percent']) {
        const value = Number(nested[key]);
        if (Number.isFinite(value) && value >= 0) return value;
      }
    }
    return null;
  }
  function growth(summary) {
    const percent = visualDiffPercentFrom(summary);
    if (!Number.isFinite(percent)) {
      return { label: 'Прирост волновой структуры', value: '—', spoken: 'фактический прирост ещё не рассчитан' };
    }
    return {
      label: 'Прирост волновой структуры',
      value: (percent > 0 ? '+' : '') + percent.toFixed(2) + '%',
      spoken: (percent >= 0 ? '+' : '') + percent.toFixed(2) + ' процента чистой разницы площади envelope результата и исходника'
    };
  }
  function buildCard(mode) {
    const section = document.createElement('section');
    section.className = 'swResultRecall swResultRecall--' + mode;
    section.hidden = true;
    section.setAttribute('aria-label', 'Сохранённый результат обработки');
    section.innerHTML = '<a class="swResultRecall__button" role="button" href="#">' +
      '<span class="swResultRecall__kicker"><i aria-hidden="true"></i>Результат сохранён</span>' +
      '<h2 aria-hidden="true">Получить готовый результат</h2>' +
      '<span class="swResultRecall__name" data-recall-name></span>' +
      '<img class="swResultRecall__wave" data-recall-wave alt="" aria-hidden="true" decoding="async">' +
      '<span class="swResultRecall__open" aria-hidden="true">→</span>' +
      '<span class="swResultRecall__metrics">' +
        '<span class="swResultRecall__metric"><small>Исходный</small><b data-recall-source>—</b></span>' +
        '<span class="swResultRecall__arrow" aria-hidden="true">→</span>' +
        '<span class="swResultRecall__metric"><small>Полученный</small><b data-recall-result>—</b></span>' +
        '<span class="swResultRecall__metric is-growth"><small data-recall-growth-label>Прирост waveform</small><span class="swResultRecall__growth-value"><span class="swResultGrowthArrow swResultRecall__growth-arrow" aria-hidden="true"><svg viewBox="0 0 64 64" focusable="false"><path class="swResultGrowthArrow__outer" d="M8 39 32 15l24 24"></path><path class="swResultGrowthArrow__inner" d="m17 54 15-15 15 15"></path></svg></span><b data-recall-growth>—</b></span></span>' +
      '</span>' +
    '</a>';
    return section;
  }
  function mountCards() {
    const desktopNav = document.querySelector('.swFastDesktopCards');
    const mobileNav = document.querySelector('.swFastLiteCards');
    if (desktopNav && desktopNav.parentNode) {
      const card = buildCard('desktop');
      desktopNav.parentNode.insertBefore(card, desktopNav);
      cards.push(card);
    } else {
      const desktopHost = document.querySelector('.swFastDesktopCopy') || document.querySelector('.swFastDesktopHero') || document.querySelector('main');
      if (desktopHost) {
        const card = buildCard('desktop');
        desktopHost.appendChild(card);
        cards.push(card);
      }
    }
    if (mobileNav && mobileNav.parentNode) {
      const card = buildCard('mobile');
      mobileNav.parentNode.insertBefore(card, mobileNav);
      cards.push(card);
    }
  }
  function hideCards() {
    cards.forEach(card => { card.hidden = true; });
    document.documentElement.classList.remove('sw-has-result-recall');
  }
  function render(summary) {
    if (!summary || !JOB_RE.test(String(summary.job || ''))) return;
    const job = String(summary.job).toLowerCase();
    const displayName = trackName(summary.name);
    const sourceText = formatMb(summary.sourceBytes);
    const resultText = formatMb(summary.resultBytes);
    const delta = growth(summary);
    cards.forEach(card => {
      const link = card.querySelector('.swResultRecall__button');
      const name = card.querySelector('[data-recall-name]');
      const source = card.querySelector('[data-recall-source]');
      const result = card.querySelector('[data-recall-result]');
      const growthLabel = card.querySelector('[data-recall-growth-label]');
      const growthValue = card.querySelector('[data-recall-growth]');
      const wave = card.querySelector('[data-recall-wave]');
      if (link) {
        link.href = '/?job=' + encodeURIComponent(job);
        link.setAttribute('aria-label', 'Получить готовый результат. ' + displayName + '. Исходный размер ' + sourceText + ', полученный размер ' + resultText + ', ' + delta.label.toLowerCase() + ' ' + delta.spoken + '.');
        link.onclick = () => persistJob(job);
      }
      if (name) name.textContent = displayName;
      if (source) source.textContent = sourceText;
      if (result) result.textContent = resultText;
      if (growthLabel) growthLabel.textContent = delta.label;
      if (growthValue) growthValue.textContent = delta.value;
      if (wave && wave.dataset.swWaveJob !== job) {
        wave.dataset.swWaveJob = job;
        wave.dataset.swWaveFallback = '0';
        wave.onerror = () => {
          if (wave.dataset.swWaveFallback === '1') {
            wave.removeAttribute('src');
            return;
          }
          wave.dataset.swWaveFallback = '1';
          wave.src = '/engine/jobs/' + encodeURIComponent(job) + '/output_preview.png?swv=' + Math.floor(Date.now() / 2500);
        };
        wave.src = '/engine/jobs/' + encodeURIComponent(job) + '/output_waveform.png?swv=' + Math.floor(Date.now() / 2500);
      }
      card.hidden = false;
    });
    document.documentElement.classList.add('sw-has-result-recall');
  }
  function readCached(job) {
    try {
      const value = JSON.parse(storageGet(SUMMARY_KEY) || 'null');
      if (!value || value.job !== job || (Date.now() - Number(value.updatedAt || 0)) > SUMMARY_TTL) return null;
      return value;
    } catch (_) { return null; }
  }
  function saveCached(summary) {
    storageSet(SUMMARY_KEY, JSON.stringify(summary));
  }
  function clearCached() {
    try { localStorage.removeItem(SUMMARY_KEY); } catch (_) {}
  }
  async function status(job) {
    const suffix = '?job=' + encodeURIComponent(job) + '&_=' + Date.now();
    for (const endpoint of ['/status_best.php', '/status.php']) {
      try {
        const response = await fetch(endpoint + suffix, { credentials: 'same-origin', cache: 'no-store', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' } });
        const data = await response.json();
        if (response.ok && data && data.ok !== false && data.status) return data;
      } catch (_) {}
    }
    throw new Error('status_unavailable');
  }
  async function restore() {
    const job = readJob();
    if (!job || !cards.length) return;
    persistJob(job);
    const cached = readCached(job);
    if (cached) render(cached);
    try {
      const data = await status(job);
      const state = String(data.status || '').toLowerCase();
      const fullAccess = data.full_access === true || data.full_access === 1 || data.full_access === '1' || data.paid === true || data.access === 'full' || data.access_type === 'paid';
      if (state !== 'done') {
        if (!cached) hideCards();
        return;
      }
      const summary = {
        job,
        name: trackName(data.original_name || data.original_filename || data.file_name || data.filename || data.track_name || data.title),
        sourceBytes: bytesFrom(data, ['input_size_bytes','source_size_bytes','source_size','input_size','original_size','source_bytes']),
        resultBytes: bytesFrom(data, ['full_size_bytes','output_size_bytes','full_size','output_size','result_size','full_bytes']),
        visualDiffPercent: visualDiffPercentFrom(data),
        waveformMetric: String(data.waveform_metric || ''),
        paid: fullAccess,
        updatedAt: Date.now()
      };
      saveCached(summary);
      render(summary);
    } catch (_) {
      if (!cached) hideCards();
    }
  }

  mountCards();
  const fileInput = document.getElementById('fileInput');
  if (fileInput) fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    storageSet('sunowave:last_track_name', trackName(file.name));
    storageSet('sunowave:last_source_size', String(Number(file.size || 0)));
  });
  restore();
})();

// SOURCE production/index.php:6961-7091
(() => {
  'use strict';
  if (window.__swProcessingResultWaveGeometryBridgeV1) return;
  window.__swProcessingResultWaveGeometryBridgeV1 = true;

  const root = document.documentElement;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const visible = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width > 1 && r.height > 1 && s.display !== 'none' && s.visibility !== 'hidden';
  };
  const active = () => {
    const state = String(document.body?.dataset?.pageState || '');
    return root.classList.contains('upload-active')
      || root.classList.contains('sw-processing-final-active')
      || /^(uploading|processing|queued|paid-processing)$/i.test(state);
  };

  function canonicalDesktopGeometry() {
    const vw = Math.max(981, window.innerWidth || document.documentElement.clientWidth || 981);
    const vh = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 1);
    const modalWidth = Math.min(1500, Math.max(0, vw - 24));
    const modalHeight = Math.max(0, vh - 24);
    const pad = clamp(vh * 0.0125, 8, 16);
    const gap = clamp(vh * 0.009, 5, 10);
    const header = clamp(vh * 0.11, 66, 104);
    const question = clamp(vh * 0.048, 30, 38);
    /* This is the final, deployed result CTA row (the latest viewport-fit layer). */
    const action = clamp(vh * 0.23, 166, 208);
    const gridHeight = modalHeight - 2 * (1 + pad) - header - question - 2 * gap;
    const stageWidth = modalWidth - 4 * (1 + pad);
    const stageHeight = gridHeight - 2 * (1 + pad) - 34 - action - 2 * gap;
    const modalLeft = (vw - modalWidth) / 2;
    const modalTop = (vh - modalHeight) / 2;
    const stageLeft = modalLeft + 2 * (1 + pad);
    const stageTop = modalTop + 2 * (1 + pad) + header + gap + 34 + gap;
    return {
      left: stageLeft,
      top: stageTop,
      width: Math.max(1, stageWidth),
      height: Math.max(1, stageHeight),
      centerX: stageLeft + stageWidth / 2,
      centerY: stageTop + stageHeight / 2
    };
  }

  function canonicalMobileGeometry() {
    const vw = Math.max(320, window.innerWidth || document.documentElement.clientWidth || 320);
    /* The approved mobile result player keeps a 380px waveform stage and
       leaves the same 107px total side treatment used by the final card. */
    const width = clamp(vw - 107, 220, 390);
    return {left:(vw - width) / 2, top:0, width, height:380, centerX:vw / 2, centerY:0};
  }

  function liveResultGeometry() {
    const stage = document.querySelector('#resultModal .audio-card.after .swWaveSaasStage');
    if (!stage) return null;
    if (visible(stage)) {
      const r = stage.getBoundingClientRect();
      return {left:r.left, top:r.top, width:r.width, height:r.height, centerX:r.left + r.width / 2, centerY:r.top + r.height / 2};
    }
    /* Result markup may already exist in the shell but be display:none. Reveal it
       for one synchronous layout read, then restore every inline property. */
    const overlay = document.getElementById('resultOverlay');
    const modal = document.getElementById('resultModal');
    if (!overlay || !modal) return null;
    const saved = {
      overlayDisplay: overlay.style.getPropertyValue('display'),
      overlayVisibility: overlay.style.getPropertyValue('visibility'),
      overlayPointer: overlay.style.getPropertyValue('pointer-events'),
      modalDisplay: modal.style.getPropertyValue('display'),
      modalVisibility: modal.style.getPropertyValue('visibility')
    };
    overlay.style.setProperty('display','flex','important');
    overlay.style.setProperty('visibility','hidden','important');
    overlay.style.setProperty('pointer-events','none','important');
    modal.style.setProperty('display','grid','important');
    modal.style.setProperty('visibility','hidden','important');
    const r = stage.getBoundingClientRect();
    overlay.style.setProperty('display', saved.overlayDisplay, '');
    overlay.style.setProperty('visibility', saved.overlayVisibility, '');
    overlay.style.setProperty('pointer-events', saved.overlayPointer, '');
    modal.style.setProperty('display', saved.modalDisplay, '');
    modal.style.setProperty('visibility', saved.modalVisibility, '');
    if (r.width > 1 && r.height > 1) return {left:r.left, top:r.top, width:r.width, height:r.height, centerX:r.left + r.width / 2, centerY:r.top + r.height / 2};
    return null;
  }

  function readProgress(orb) {
    const value = parseFloat(orb?.style?.getPropertyValue('--sw-process-pct') || '');
    return Number.isFinite(value) ? clamp(value, 0, 100) : 2;
  }

  function sync() {
    if (!active()) return;
    const orb = document.getElementById('swFastProcessOrb');
    const wave = orb?.querySelector('.swProcessingWaveBurst');
    if (!orb || !wave) return;
    const target = liveResultGeometry() || (window.matchMedia('(min-width:981px)').matches ? canonicalDesktopGeometry() : canonicalMobileGeometry());
    const orbRect = orb.getBoundingClientRect();
    const pct = readProgress(orb);
    const progress = clamp(pct / 100, 0, 1);
    const scale = 0.18 + 0.82 * progress;
    const targetCenter = window.matchMedia('(min-width:981px)').matches
      ? {x:target.centerX, y:target.centerY}
      : {x:orbRect.left + orbRect.width / 2, y:orbRect.top + orbRect.height / 2};
    wave.style.setProperty('--sw-processing-wave-left', (targetCenter.x - orbRect.left).toFixed(3) + 'px');
    wave.style.setProperty('--sw-processing-wave-top', (targetCenter.y - orbRect.top).toFixed(3) + 'px');
    wave.style.setProperty('--sw-processing-wave-width', target.width.toFixed(3) + 'px');
    wave.style.setProperty('--sw-processing-wave-height', target.height.toFixed(3) + 'px');
    wave.style.setProperty('--sw-processing-wave-scale', scale.toFixed(5));
    wave.style.setProperty('--sw-processing-wave-opacity', (0.84 + 0.10 * progress).toFixed(3));
    wave.dataset.swFinalWaveGeometry = `${Math.round(target.width)}x${Math.round(target.height)}`;
    wave.dataset.swFinalWaveProgress = pct.toFixed(2);
  }

  let frame = 0;
  const schedule = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { frame = 0; sync(); });
  };
  new MutationObserver(schedule).observe(root, {attributes:true, attributeFilter:['class']});
  if (document.body) new MutationObserver(schedule).observe(document.body, {attributes:true, attributeFilter:['data-page-state']});
  window.addEventListener('resize', schedule, {passive:true});
  window.addEventListener('load', schedule, {once:true, passive:true});
  schedule();
})();

// SOURCE production/index.php:9235-9466
(() => {
  'use strict';
  /* codex-processing-wav-header-stats-v1: show the real planned PCM/WAV header. */
  if (window.__swProcessingStep10OutputRevealV1) return;
  window.__swProcessingStep10OutputRevealV1 = true;

  const root = document.documentElement;
  const STAGE_INDEX = 9;
  const META_KEY = 'sunowave:processing_track_meta';

  const processingActive = () => {
    const state = String(document.body?.dataset?.pageState || '');
    return root.classList.contains('upload-active')
      || root.classList.contains('sw-processing-final-active')
      || /^(uploading|processing|queued|paid-processing)$/i.test(state);
  };
  const resultWindowOpen = () => {
    const modal = document.getElementById('resultModal');
    if (!modal || modal.hidden || modal.getAttribute('aria-hidden') === 'true') return false;
    const style = getComputedStyle(modal);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
    const rect = modal.getBoundingClientRect();
    return rect.width > 24 && rect.height > 24;
  };

  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const text = (selector) => clean(document.querySelector(selector)?.textContent || '');
  const meta = () => {
    try { return JSON.parse(localStorage.getItem(META_KEY) || 'null') || {}; } catch (_) { return {}; }
  };
  const positive = (value) => {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : 0;
  };
  const formatRate = (value, fallback) => {
    const rate = Number(value);
    if (Number.isFinite(rate) && rate > 0) {
      if (rate >= 1000) {
        return `${(Math.round((rate / 1000) * 10) / 10).toFixed(1).replace(/\.0$/, '')} kHz`;
      }
      return `${Math.round(rate)} Hz`;
    }
    const railRate = clean(fallback).replace(/кгц/ig, 'kHz').replace(/гц/ig, 'Hz');
    return railRate && !/^—/.test(railRate) ? railRate : '—';
  };
  const formatBitDepth = (value) => {
    const bits = Math.round(positive(value));
    return bits ? `${bits} bit` : '—';
  };
  const formatChannels = (value) => {
    const channels = Math.round(positive(value));
    if (!channels) return '—';
    if (channels === 1) return 'MONO (1)';
    if (channels === 2) return 'STEREO (2)';
    return `${channels} CH`;
  };
  const formatBytes = (value) => {
    const bytes = positive(value);
    if (!bytes) return '—';
    if (bytes >= 1048576) return `${(bytes / 1048576).toFixed(2)} MB`;
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${Math.round(bytes)} B`;
  };
  const formatDuration = (value) => {
    const seconds = positive(value);
    if (!seconds) return '—';
    const whole = Math.round(seconds);
    return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
  };
  const formatNumber = (value) => {
    const number = positive(value);
    return number ? Math.round(number).toLocaleString('ru-RU') : '—';
  };
  const outputExtension = (value) => {
    const match = clean(value || '').match(/\.([a-z0-9]+)$/i);
    return match ? match[1].toUpperCase() : 'AUDIO';
  };
  const sourceFormat = (value) => {
    const format = outputExtension(value || text('[data-processing-format]'));
    return format && format !== 'AUDIO' ? `${format} -> WAV` : 'AUDIO -> WAV';
  };
  const plannedWav = (data) => {
    const sampleRate = positive(data.outputSampleRate || data.output_sample_rate || data.output_sample_rate_hz)
      || positive(data.sampleRate || data.sample_rate || data.sample_rate_hz);
    const channels = Math.round(positive(data.outputChannels || data.output_channels || data.channel_count))
      || Math.round(positive(data.channels || data.channelCount));
    const bitDepth = Math.round(positive(data.outputBitDepth || data.output_bit_depth || data.targetBitDepth)) || 24;
    const duration = positive(data.outputDuration || data.output_duration || data.duration);
    const blockAlign = Math.round(positive(data.outputBlockAlign || data.output_block_align))
      || (channels && bitDepth ? channels * bitDepth / 8 : 0);
    const byteRate = Math.round(positive(data.outputByteRate || data.output_byte_rate))
      || (sampleRate && blockAlign ? sampleRate * blockAlign : 0);
    const frames = sampleRate && duration ? Math.round(sampleRate * duration) : 0;
    const dataBytes = Math.round(positive(data.outputDataBytes || data.output_data_bytes))
      || (frames && blockAlign ? frames * blockAlign : 0);
    const riffBytes = Math.round(positive(data.outputSizeBytes || data.output_size_bytes))
      || (dataBytes ? dataBytes + 44 : 0);
    return {sampleRate, channels, bitDepth, duration, blockAlign, byteRate, frames, dataBytes, riffBytes};
  };
  const readVisibleOrbStep = () => {
    const counters = Array.from(document.querySelectorAll('#swFastProcessOrb [data-sw-best-counter], #swFastProcessOrb .swBestStageCounter'));
    const values = counters.map((counter) => {
      const raw = clean(counter.textContent);
      const match = raw.match(/(\d{1,2})\s*(?:из|of)\s*37/i);
      const value = match ? Number(match[1]) : NaN;
      return Number.isFinite(value) ? value : 0;
    }).filter((value) => value > 0);
    return values.length ? Math.max(...values) : 0;
  };

  const ensureReveal = () => {
    let reveal = document.getElementById('swProcessingStep10OutputReveal');
    if (reveal) return reveal;
    reveal = document.createElement('aside');
    reveal.id = 'swProcessingStep10OutputReveal';
    reveal.className = 'swProcessingOutputReveal';
    reveal.setAttribute('aria-live', 'polite');
    reveal.setAttribute('aria-hidden', 'true');
    reveal.innerHTML = `
      <img class="swProcessingOutputReveal__arrow" src="/assets/codex/strel-step10-arrow-v1.png?v=20260821_step10_arrow_1" alt="" aria-hidden="true" decoding="async">
      <section class="swProcessingOutputReveal__stats" aria-label="Параметры будущего WAV-файла">
        <div class="swProcessingOutputReveal__matrix" aria-hidden="true"></div>
        <span class="swProcessingOutputReveal__eyebrow">ГОТОВЛЮ ФАЙЛ К ВЫПУСКУ</span>
        <div class="swProcessingOutputReveal__hero">
          <strong data-output-format>WAV</strong>
          <span data-output-route>RIFF/WAVE · PCM без сжатия</span>
        </div>
        <div class="swProcessingOutputReveal__grid swProcessingOutputReveal__grid--primary">
          <span><b data-output-container>RIFF/WAVE</b><small>контейнер</small></span>
          <span><b data-output-codec>PCM (1)</b><small>кодек / формат</small></span>
          <span><b data-output-rate>—</b><small>частота</small></span>
          <span><b data-output-depth>24 bit</b><small>разрядность</small></span>
          <span><b data-output-mode>—</b><small>каналы</small></span>
          <span><b data-output-byte-rate>—</b><small>byte rate</small></span>
        </div>
        <div class="swProcessingOutputReveal__grid swProcessingOutputReveal__grid--secondary">
          <span><b data-output-block-align>—</b><small>block align</small></span>
          <span><b data-output-duration>—</b><small>длительность</small></span>
          <span><b data-output-frames>—</b><small>sample frames</small></span>
          <span><b data-output-data-size>—</b><small>data chunk</small></span>
          <span><b data-output-riff-size>—</b><small>RIFF размер</small></span>
          <span><b data-output-endian>little-endian</b><small>порядок байт</small></span>
        </div>
      </section>`;
    document.body.appendChild(reveal);
    return reveal;
  };

  let lockTimer = 0;

  const updateStats = (reveal) => {
    const data = meta();
    const wav = plannedWav(data);
    const route = reveal.querySelector('[data-output-route]');
    const container = reveal.querySelector('[data-output-container]');
    const codec = reveal.querySelector('[data-output-codec]');
    const rate = reveal.querySelector('[data-output-rate]');
    const depth = reveal.querySelector('[data-output-depth]');
    const mode = reveal.querySelector('[data-output-mode]');
    const byteRate = reveal.querySelector('[data-output-byte-rate]');
    const blockAlign = reveal.querySelector('[data-output-block-align]');
    const duration = reveal.querySelector('[data-output-duration]');
    const frames = reveal.querySelector('[data-output-frames]');
    const dataSize = reveal.querySelector('[data-output-data-size]');
    const riffSize = reveal.querySelector('[data-output-riff-size]');
    if (route) route.textContent = `${sourceFormat(data.fileName || data.name)} · будущий PCM WAV`;
    if (container) container.textContent = 'RIFF/WAVE';
    if (codec) codec.textContent = 'PCM (1)';
    if (rate) rate.textContent = formatRate(wav.sampleRate, text('[data-processing-rate]'));
    if (depth) depth.textContent = formatBitDepth(wav.bitDepth);
    if (mode) mode.textContent = formatChannels(wav.channels);
    if (byteRate) byteRate.textContent = wav.byteRate ? `${formatBytes(wav.byteRate)}/s` : '—';
    if (blockAlign) blockAlign.textContent = wav.blockAlign ? `${formatNumber(wav.blockAlign)} B` : '—';
    if (duration) duration.textContent = formatDuration(wav.duration);
    if (frames) frames.textContent = formatNumber(wav.frames);
    if (dataSize) dataSize.textContent = formatBytes(wav.dataBytes);
    if (riffSize) riffSize.textContent = formatBytes(wav.riffBytes);
  };

  const sync = () => {
    if (!document.body) return;
    const reveal = ensureReveal();
    const copy = document.querySelector('#swFastProcessOrb .swFinalOrbCopy');
    const stageIndex = Number(copy?.dataset?.stageIndex);
    const activeProcessing = processingActive() && !resultWindowOpen();
    const visibleStep = readVisibleOrbStep();
    const reachedStep10 = activeProcessing && visibleStep >= (STAGE_INDEX + 1);
    if (reachedStep10) reveal.dataset.step10Latched = '1';
    const isLive = activeProcessing && (reachedStep10 || reveal.dataset.step10Latched === '1');
    root.classList.toggle('sw-processing-step10-output-active', isLive);
    reveal.setAttribute('aria-hidden', isLive ? 'false' : 'true');
    reveal.dataset.stageIndex = Number.isFinite(stageIndex) ? String(stageIndex) : '';
    reveal.dataset.visibleStep = visibleStep ? String(visibleStep) : '';
    if (isLive) {
      updateStats(reveal);
      if (reveal.dataset.step10Shown !== '1') {
        reveal.dataset.step10Shown = '1';
        reveal.classList.remove('is-step10-locked');
        window.clearTimeout(lockTimer);
        lockTimer = window.setTimeout(() => {
          if (root.classList.contains('sw-processing-step10-output-active') && reveal.dataset.step10Shown === '1') {
            reveal.classList.add('is-step10-locked');
          }
        }, 1760);
      }
    } else {
      window.clearTimeout(lockTimer);
      lockTimer = 0;
      reveal.dataset.step10Latched = '';
      reveal.dataset.step10Shown = '';
      reveal.classList.remove('is-step10-locked');
    }
  };

  let raf = 0;
  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      sync();
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync, {once:true});
  else sync();
  new MutationObserver(schedule).observe(root, {attributes:true,attributeFilter:['class'],childList:true,subtree:true});
  if (document.body) new MutationObserver(schedule).observe(document.body, {attributes:true,attributeFilter:['data-page-state'],childList:true,subtree:true});
  window.addEventListener('resize', schedule, {passive:true});
  window.setInterval(schedule, 600);
})();

// SOURCE production/index.php:11947-12961
(() => {
    'use strict';
    const bootEl = document.getElementById('sw-bootstrap');
    let boot = {};
    try { boot = JSON.parse(bootEl ? bootEl.textContent || '{}' : '{}'); } catch (_) { boot = {}; }
    const jobPattern = /^[a-f0-9]{32}$/i;
    const dom = {
      resultOverlay: document.getElementById('resultOverlay'),
      resultModal: document.getElementById('resultModal'),
      resultClose: document.getElementById('resultClose'),
      resultTitle: document.getElementById('resultTitle'),
      resultSubtitle: document.getElementById('resultSubtitle'),
      loadingTitle: document.getElementById('loadingTitle'),
      loadingText: document.getElementById('loadingText'),
      sourceSize: document.getElementById('sourceSize'),
      resultSize: document.getElementById('resultSize'),
      impactSourceSize: document.getElementById('impactSourceSize'),
      impactResultSize: document.getElementById('impactResultSize'),
      impactGrowth: document.getElementById('impactGrowth'),
      resultWaveFileSize: document.getElementById('resultWaveFileSize'),
      sourceTech: document.getElementById('sourceTech'),
      resultTech: document.getElementById('resultTech'),
      sourceWave: document.getElementById('sourceWave'),
      resultWave: document.getElementById('resultWave'),
      sourceAudio: document.getElementById('sourceAudio'),
      resultAudio: document.getElementById('resultAudio'),
      pay: document.getElementById('payFullLink'),
      payEyebrow: document.getElementById('payFullEyebrow'),
      payText: document.getElementById('payFullText'),
      paySub: document.getElementById('payFullSub'),
      payPrice: document.getElementById('payFullPrice'),
      purchaseTitle: document.getElementById('purchaseTitle'),
      purchaseDescription: document.getElementById('purchaseDescription'),
      purchasePrice: document.getElementById('purchasePrice'),
      rewardOverlay: document.getElementById('rewardOverlay'),
      rewardClose: document.getElementById('rewardClose'),
      rewardDownload: document.getElementById('rewardDownload'),
      toast: document.getElementById('toast'),
      toastTitle: document.getElementById('toastTitle'),
      toastText: document.getElementById('toastText')
    };
    let currentJobId = String(boot.jobId || '').trim().toLowerCase();
    let pollTimer = null;
    let pollFailures = 0;
    let toastTimer = null;
    function setText(el, text) { if (el) el.textContent = String(text == null ? '' : text); }
    function setHref(el, href) { if (el && href) { el.href = href; el.removeAttribute('aria-disabled'); } }
    function showToast(title, text) {
      setText(dom.toastTitle, title); setText(dom.toastText, text || '');
      if (!dom.toast) return;
      dom.toast.classList.add('show');
      clearTimeout(toastTimer); toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 4200);
    }
    function readSavedJob() {
      try {
        const values = [localStorage.getItem('sunowave:last_job') || '', localStorage.getItem('sunowave_last_job') || ''];
        for (const value of values) if (jobPattern.test(value)) return value.toLowerCase();
        return '';
      } catch (_) { return ''; }
    }
    function saveJob(job) {
      if (!jobPattern.test(job)) return;
      try { localStorage.setItem('sunowave:last_job', job); localStorage.setItem('sunowave_last_job', job); } catch (_) {}
      try { document.cookie = 'sunowave_last_job=' + encodeURIComponent(job) + '; path=/; max-age=2592000; SameSite=Lax'; } catch (_) {}
    }
    function clearSavedJob() {
      try { localStorage.removeItem('sunowave:last_job'); localStorage.removeItem('sunowave_last_job'); localStorage.removeItem('sunowave:result_summary'); } catch (_) {}
      try { document.cookie = 'sunowave_last_job=; path=/; max-age=0; SameSite=Lax'; } catch (_) {}
    }
    function formatMb(bytes) {
      const n = Number(bytes || 0);
      if (!Number.isFinite(n) || n <= 0) return '—';
      return (n / 1048576).toFixed(2) + ' МБ';
    }
    // codex-index-payment-file-meta-v1
    function resultFileExtension(data, fullUrl) {
      const values = [
        data && data.output_file,
        data && data.full_file,
        data && data.result_file,
        data && data.output_filename,
        data && data.full_filename,
        data && data.output_format,
        data && data.format,
        fullUrl
      ];
      for (const value of values) {
        const clean = String(value || '').trim().split(/[?#]/)[0];
        const match = clean.match(/\.(wav|mp3|flac|m4a|aac|ogg|aiff|aif|opus)$/i);
        if (match) return match[1].toUpperCase();
        if (/^(wav|mp3|flac|m4a|aac|ogg|aiff|aif|opus)$/i.test(clean)) return clean.toUpperCase();
      }
      return 'WAV';
    }
    function formatResultFileMeta(bytes, extension) {
      const size = Number(bytes || 0) > 0 ? formatMb(bytes) : '— МБ';
      return size + ' • ' + (extension || 'WAV');
    }
    function visualDiffPercentFrom(data) {
      const metric = String(data && (data.waveform_metric || data.waveformMetric) || '').trim();
      if (metric !== 'envelope_positive_excess_v2') return null;
      const keys = ['waveform_growth_percent', 'visual_diff_percent'];
      for (const key of keys) {
        const value = Number(data && data[key]);
      if (Number.isFinite(value)) return value;
      }
      const nested = data && (data.visual_diff || data.waveform_diff || data.waveform_growth);
      if (nested && typeof nested === 'object') {
        for (const key of ['percent', 'added_percent', 'growth_percent']) {
          const value = Number(nested[key]);
        if (Number.isFinite(value)) return value;
        }
      }
      return null;
    }
    function formatVisualDiffPercent(value) {
      const percent = Number(value);
      if (!Number.isFinite(percent)) return '—';
      return (percent > 0 ? '+' : '') + percent.toFixed(2) + '%';
    }
    let resultWeightAlignFrame = 0;
    function alignResultWaveFileWeight() {
      if (resultWeightAlignFrame) cancelAnimationFrame(resultWeightAlignFrame);
      resultWeightAlignFrame = requestAnimationFrame(() => {
        resultWeightAlignFrame = 0;
        const badge = dom.resultWaveFileSize && dom.resultWaveFileSize.closest('.swResultFileWeight');
        const stage = dom.resultWave && dom.resultWave.closest('.swWaveSaasStage');
        const score = document.getElementById('impactGrowthTrigger');
        if (!badge || !stage || !score) return;
        if (window.innerWidth < 1024) {
          badge.style.removeProperty('--sw-result-file-weight-width');
          badge.style.removeProperty('--sw-result-file-weight-right');
          return;
        }
        const stageRect = stage.getBoundingClientRect();
        const scoreRect = score.getBoundingClientRect();
        if (stageRect.width <= 0 || scoreRect.width <= 0) return;
        const right = Math.max(12, Math.min(stageRect.width - 12, stageRect.right - scoreRect.right));
        const width = Math.max(150, Math.min(scoreRect.width, stageRect.width - right - 12));
        badge.style.setProperty('--sw-result-file-weight-width', width.toFixed(2) + 'px');
        badge.style.setProperty('--sw-result-file-weight-right', right.toFixed(2) + 'px');
      });
    }
    function updateImpactMetrics(sourceBytes, resultBytes, data = null) {
      const source = Number(sourceBytes || 0);
      const result = Number(resultBytes || 0);
      setText(dom.impactSourceSize, formatMb(source));
      setText(dom.impactResultSize, formatMb(result));
      setText(dom.resultWaveFileSize, formatMb(result));
      alignResultWaveFileWeight();
      const visualPercent = visualDiffPercentFrom(data);
      if (!Number.isFinite(visualPercent)) {
        setText(dom.impactGrowth, '—');
        if (dom.impactGrowth) dom.impactGrowth.classList.remove('is-wide');
        return;
      }
      const percentText = formatVisualDiffPercent(visualPercent);
      setText(dom.impactGrowth, percentText);
      if (dom.impactGrowth) dom.impactGrowth.classList.toggle('is-wide', percentText.length >= 8);
    }
    window.addEventListener('resize', alignResultWaveFileWeight, { passive: true });
    if ('ResizeObserver' in window) {
      const resultWeightResizeObserver = new ResizeObserver(alignResultWaveFileWeight);
      const resultWeightStage = dom.resultWave && dom.resultWave.closest('.swWaveSaasStage');
      const resultWeightScore = document.getElementById('impactGrowthTrigger');
      if (resultWeightStage) resultWeightResizeObserver.observe(resultWeightStage);
      if (resultWeightScore) resultWeightResizeObserver.observe(resultWeightScore);
    }
    function resultTrackName(data) {
      let name = String((data && (data.original_name || data.original_filename || data.file_name || data.filename || data.track_name || data.title)) || '').trim();
      name = (name.split(/[\\/]/).pop() || '').replace(/\.(?:mp3|wav|flac|m4a|aac|ogg)$/i, '').trim();
      if (!name) {
        try { name = String(localStorage.getItem('sunowave:last_track_name') || '').trim(); } catch (_) {}
      }
      return name || 'Ваш обработанный трек';
    }
    function saveResultSummary(job, data, sourceBytes, resultBytes, fullAccess) {
      try {
        localStorage.setItem('sunowave:result_summary', JSON.stringify({
          job,
          name: resultTrackName(data),
          sourceBytes: Number(sourceBytes || 0),
          resultBytes: Number(resultBytes || 0),
          visualDiffPercent: visualDiffPercentFrom(data),
          waveformMetric: String(data && data.waveform_metric || ''),
          paid: !!fullAccess,
          updatedAt: Date.now()
        }));
      } catch (_) {}
    }
    function secondsLabel(sec) {
      const s = Math.max(0, Math.round(Number(sec || 0)));
      return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    }
    function cleanWorkerText(value) {
      let text = String(value == null ? '' : value);
      text = text.replace(/\bqueued\b/ig, 'обработка аудио');
      text = text.replace(/\bqueue\b/ig, 'обработка аудио');
      text = text.replace(/\bvisual_diff\b/ig, 'анализ звука');
      text = text.replace(/\bprocessing\b/ig, 'обработка аудио');
      text = text.replace(/\bworker_[a-z0-9_\-]+\b/ig, 'обработка аудио');
      text = text.replace(/\bstage_[a-z0-9_\-]+\b/ig, 'обработка аудио');
      return text;
    }
    async function fetchJson(url) {
      const res = await fetch(url, { credentials: 'same-origin', cache: 'no-store', headers: { 'X-Requested-With': 'XMLHttpRequest' } });
      const text = await res.text();
      let data = null;
      try { data = JSON.parse(text); } catch (_) {}
      if (!res.ok) throw new Error((data && (data.message || data.error)) || ('HTTP ' + res.status));
      return data || {};
    }
    async function fetchStatus(job) {
      const qs = '?job=' + encodeURIComponent(job) + '&_=' + Date.now();
      try { return await fetchJson('/status_best.php' + qs); }
      catch (_) { return await fetchJson('/status.php' + qs); }
    }
    function pickUrl(data, keys) {
      for (const key of keys) if (data && typeof data[key] === 'string' && data[key]) return data[key];
      return '';
    }
    function normalizeUrl(url) {
      if (!url) return '';
      try { return new URL(url, window.location.origin).href; } catch (_) { return url; }
    }

    async function probeSize(url) {
      const normalized = normalizeUrl(url);
      if (!normalized) return 0;
      try {
        const res = await fetch(normalized, {
          method: 'HEAD',
          credentials: 'same-origin',
          cache: 'no-store',
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        const len = Number(res.headers.get('content-length') || 0);
        return Number.isFinite(len) && len > 0 ? len : 0;
      } catch (_) {
        try {
          const res = await fetch(normalized, {
            method: 'GET',
            credentials: 'same-origin',
            cache: 'no-store',
            headers: { 'Range': 'bytes=0-0', 'X-Requested-With': 'XMLHttpRequest' }
          });
          const range = String(res.headers.get('content-range') || '');
          const m = /\/(\d+)\s*$/.exec(range);
          const n = m ? Number(m[1]) : Number(res.headers.get('content-length') || 0);
          return Number.isFinite(n) && n > 0 ? n : 0;
        } catch (_) {
          return 0;
        }
      }
    }

    function audioStreamUrl(url) {
      const normalized = normalizeUrl(url);
      if (!normalized) return '';
      try {
        const u = new URL(normalized, window.location.origin);
        if (u.origin === window.location.origin && /(?:download|download_full|download_source)\.php$/i.test(u.pathname)) {
          u.searchParams.set('inline', '1');
          u.searchParams.set('audio', '1');
        }
        return u.href;
      } catch (_) {
        return normalized;
      }
    }
    function jobAsset(job, file, version = '') {
      if (!jobPattern.test(String(job || ''))) return '';
      const path = '/engine/jobs/' + encodeURIComponent(String(job).toLowerCase()) + '/' + file;
      try {
        const url = new URL(path, window.location.origin);
        const safeVersion = String(version || '').replace(/[^a-z0-9_.-]/gi, '').slice(0, 64);
        if (safeVersion) url.searchParams.set('wv', safeVersion);
        return url.href;
      } catch (_) {
        return normalizeUrl(path);
      }
    }
    function secondsLabelFromNumber(value) {
      const s = Math.max(0, Number(value || 0));
      if (!Number.isFinite(s)) return '0:00';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return m + ':' + String(sec).padStart(2, '0');
    }
    function playerBoxFor(audio) {
      return audio ? document.querySelector('[data-player-for="' + audio.id + '"]') : null;
    }
    function playButtonFor(audio) {
      return audio ? document.querySelector('[data-saas-audio="' + audio.id + '"]') : null;
    }
    function setPlayerState(audio, state, label) {
      const box = playerBoxFor(audio);
      const status = audio ? document.querySelector('[data-saas-status="' + audio.id + '"]') : null;
      if (!box) return;
      box.classList.toggle('is-audio-ready', state === 'ready' || state === 'playing');
      box.classList.toggle('is-audio-loading', state === 'loading');
      box.classList.toggle('is-audio-error', state === 'error');
      box.classList.toggle('is-playing', state === 'playing');
      if (status) status.textContent = label || (state === 'playing' ? 'Играет' : state === 'ready' ? 'Готово к прослушиванию' : state === 'error' ? 'Ошибка аудио' : 'Загружаем аудио');
    }
    const audioPlaybackState = new WeakMap();
    let activeAudio = null;
    const PLAYBACK_START_TIMEOUT_MS = 12000;
    const PLAYBACK_STALL_TIMEOUT_MS = 25000;
    const PLAYBACK_FRAME_MS = 50;
    const requestPlaybackFrame = callback => typeof window.requestAnimationFrame === 'function'
      ? window.requestAnimationFrame(callback)
      : window.setTimeout(() => callback(Date.now()), PLAYBACK_FRAME_MS);
    const cancelPlaybackFrame = handle => {
      if (!handle) return;
      if (typeof window.cancelAnimationFrame === 'function') window.cancelAnimationFrame(handle);
      else window.clearTimeout(handle);
    };

    function playbackState(audio) {
      let state = audioPlaybackState.get(audio);
      if (!state) {
        state = {
          requestId: 0,
          animationFrame: 0,
          startTimer: 0,
          stallTimer: 0,
          lastPaint: 0,
          stageWidth: 0,
          duration: 0,
          resumeTime: 0,
          releasing: false,
          resizeObserver: null
        };
        audioPlaybackState.set(audio, state);
      }
      return state;
    }
    function clearPlaybackTimers(audio) {
      if (!audio) return;
      const state = playbackState(audio);
      if (state.startTimer) window.clearTimeout(state.startTimer);
      if (state.stallTimer) window.clearTimeout(state.stallTimer);
      state.startTimer = 0;
      state.stallTimer = 0;
    }
    function nextPlaybackRequest(audio) {
      if (!audio) return 0;
      const state = playbackState(audio);
      state.requestId += 1;
      audio.dataset.playRequest = String(state.requestId);
      return state.requestId;
    }
    function desiredAudioSource(audio) {
      return audio ? String(audio.dataset.audioUrl || '') : '';
    }
    function setPlayButtonMode(audio, mode) {
      const button = playButtonFor(audio);
      if (!button) return;
      button.textContent = mode === 'playing' ? '❚❚' : mode === 'loading' ? '…' : '▶';
      button.setAttribute('aria-pressed', mode === 'playing' ? 'true' : 'false');
      if (mode === 'loading') button.setAttribute('aria-busy', 'true');
      else button.removeAttribute('aria-busy');
    }
    function attachAudioSource(audio) {
      if (!audio) return false;
      const source = desiredAudioSource(audio);
      if (!source) return false;
      if (audio.getAttribute('src') !== source) {
        audio.src = source;
        audio.setAttribute('src', source);
        try { audio.load(); } catch (_) {}
      }
      return true;
    }
    function detachAudioSource(audio, resumeTime = 0) {
      if (!audio) return;
      const state = playbackState(audio);
      const duration = Number(audio.duration || state.duration || 0);
      if (Number.isFinite(duration) && duration > 0) state.duration = duration;
      state.resumeTime = Math.max(0, Number(resumeTime || 0));
      state.releasing = true;
      try { audio.pause(); } catch (_) {}
      audio.removeAttribute('src');
      audio.preload = 'none';
      audio.setAttribute('preload', 'none');
      try { audio.load(); } catch (_) {}
      window.setTimeout(() => { state.releasing = false; }, 0);
    }
    function stopSaasProgressTicker(audio) {
      if (!audio) return;
      const state = playbackState(audio);
      cancelPlaybackFrame(state.animationFrame);
      state.animationFrame = 0;
      state.lastPaint = 0;
      updateSaasProgress(audio);
    }
    function resetAudioPlayback(audio, options = {}) {
      if (!audio) return;
      const state = playbackState(audio);
      const rewind = options.rewind !== false;
      const release = !!options.release;
      const preservePosition = !!options.preservePosition;
      const resumeTime = preservePosition ? Number(audio.currentTime || state.resumeTime || 0) : 0;
      nextPlaybackRequest(audio);
      clearPlaybackTimers(audio);
      stopSaasProgressTicker(audio);
      delete audio.dataset.starting;
      delete audio.dataset.buffering;
      try { audio.pause(); } catch (_) {}
      if (release) {
        detachAudioSource(audio, resumeTime);
      } else if (rewind) {
        try { if (audio.readyState > 0) audio.currentTime = 0; } catch (_) {}
        state.resumeTime = 0;
      }
      if (activeAudio === audio) activeAudio = null;
      setPlayButtonMode(audio, 'ready');
      updateSaasProgress(audio);
      setPlayerState(audio, 'ready', options.label || 'Готово к прослушиванию');
    }
    function stopOtherAudio(active) {
      [dom.sourceAudio, dom.resultAudio].forEach(audio => {
        if (!audio || audio === active) return;
        resetAudioPlayback(audio, {
          rewind: true,
          release: audio.id === 'sourceAudio',
          label: 'Готово к прослушиванию'
        });
      });
    }
    function reportPlaybackFailure(audio, requestId, error) {
      if (!audio || requestId !== playbackState(audio).requestId) return;
      const blocked = !!(error && error.name === 'NotAllowedError');
      const unsupported = !!(error && error.name === 'NotSupportedError');
      const timeout = !!(error && error.message === 'PLAYBACK_TIMEOUT');
      resetAudioPlayback(audio, {
        rewind: false,
        release: audio.id === 'sourceAudio',
        preservePosition: true
      });
      const label = blocked ? 'Нажмите Play ещё раз' : unsupported ? 'Формат не поддерживается' : timeout ? 'Сеть не ответила' : 'Не удалось запустить';
      setPlayerState(audio, 'error', label);
      showToast(
        blocked ? 'Браузер заблокировал запуск' : unsupported ? 'Формат аудио не поддерживается' : timeout ? 'Аудио не ответило вовремя' : 'Не удалось запустить аудио',
        blocked ? 'Повторите нажатие на Play.' : unsupported ? 'Откройте результат в обновлённом браузере.' : 'Проверьте соединение и повторите попытку.'
      );
    }
    function beginAudioPlayback(audio) {
      if (!audio) return;
      if (!desiredAudioSource(audio)) {
        showToast('Аудио ещё подключается', 'Подождите несколько секунд и повторите запуск.');
        return;
      }
      stopOtherAudio(audio);
      if (!attachAudioSource(audio)) {
        setPlayerState(audio, 'error', 'Аудио недоступно');
        return;
      }
      const state = playbackState(audio);
      clearPlaybackTimers(audio);
      const requestId = nextPlaybackRequest(audio);
      audio.dataset.starting = '1';
      audio.preload = 'auto';
      audio.setAttribute('preload', 'auto');
      audio.setAttribute('playsinline', 'playsinline');
      audio.setAttribute('webkit-playsinline', 'webkit-playsinline');
      setPlayButtonMode(audio, 'loading');
      setPlayerState(audio, 'loading', 'Запускаем аудио');
      activeAudio = audio;
      state.startTimer = window.setTimeout(() => {
        if (requestId !== state.requestId || !audio.paused) return;
        reportPlaybackFailure(audio, requestId, new Error('PLAYBACK_TIMEOUT'));
      }, PLAYBACK_START_TIMEOUT_MS);
      try {
        // Keep play() in the trusted click stack for iOS and Android browsers.
        const playResult = audio.play();
        if (playResult && typeof playResult.catch === 'function') {
          playResult.catch(error => reportPlaybackFailure(audio, requestId, error));
        }
      } catch (error) {
        reportPlaybackFailure(audio, requestId, error);
      }
    }
    function handlePlaybackBuffering(audio) {
      if (!audio || audio.ended || (audio.paused && audio.dataset.starting !== '1')) return;
      const state = playbackState(audio);
      delete audio.dataset.starting;
      audio.dataset.buffering = '1';
      if (state.startTimer) window.clearTimeout(state.startTimer);
      state.startTimer = 0;
      if (state.stallTimer) window.clearTimeout(state.stallTimer);
      setPlayButtonMode(audio, 'loading');
      setPlayerState(audio, 'loading', 'Подгружаем звук');
      state.stallTimer = window.setTimeout(() => {
        if (!audio.dataset.buffering || audio.ended || playbackState(audio).requestId !== state.requestId) return;
        reportPlaybackFailure(audio, state.requestId, new Error('PLAYBACK_TIMEOUT'));
      }, PLAYBACK_STALL_TIMEOUT_MS);
    }
    function updateSaasProgress(audio, cursorOnly = false) {
      if (!audio) return;
      const box = playerBoxFor(audio);
      if (!box) return;
      const state = playbackState(audio);
      const liveDuration = Number(audio.duration || 0);
      if (Number.isFinite(liveDuration) && liveDuration > 0) state.duration = liveDuration;
      const duration = state.duration;
      const attached = !!audio.getAttribute('src');
      const current = Math.max(0, Number(attached ? audio.currentTime : state.resumeTime) || 0);
      const percent = duration > 0 ? Math.max(0, Math.min(100, current / duration * 100)) : 0;
      const progressValue = percent.toFixed(3) + '%';
      const cursor = box.querySelector('.swWaveCursor');
      if (cursor) {
        const x = Math.max(0, state.stageWidth * percent / 100);
        cursor.style.setProperty('left', '0px', 'important');
        cursor.style.setProperty('transform', 'translate3d(' + x.toFixed(2) + 'px,0,0) translateX(-50%)', 'important');
      }
      if (!cursorOnly) box.style.setProperty('--progress', progressValue);
      box.style.setProperty('--sw-wave-progress', progressValue);
      const nowEl = document.querySelector('[data-saas-now="' + audio.id + '"]');
      if (nowEl) nowEl.textContent = secondsLabelFromNumber(current);
      if (duration > 0) {
        const endEl = document.getElementById(audio.id === 'sourceAudio' ? 'sourceTimeEnd' : 'resultTimeEnd');
        if (endEl) endEl.textContent = secondsLabelFromNumber(duration);
      }
    }
    function startSaasProgressTicker(audio) {
      if (!audio) return;
      stopSaasProgressTicker(audio);
      const state = playbackState(audio);
      const tick = timestamp => {
        if (audio.paused || audio.ended || audio.error || activeAudio !== audio) {
          state.animationFrame = 0;
          return;
        }
        if (!state.lastPaint || timestamp - state.lastPaint >= PLAYBACK_FRAME_MS) {
          state.lastPaint = timestamp;
          updateSaasProgress(audio, true);
        }
        state.animationFrame = requestPlaybackFrame(tick);
      };
      state.animationFrame = requestPlaybackFrame(tick);
    }
    function bindTimelineSize(audio) {
      const state = playbackState(audio);
      const box = playerBoxFor(audio);
      const stage = box ? box.querySelector('[data-saas-scrub="' + audio.id + '"]') : null;
      if (!stage || stage.dataset.sizeBound === '1') return;
      stage.dataset.sizeBound = '1';
      const measure = width => {
        state.stageWidth = Math.max(0, Number(width || stage.clientWidth || 0));
        updateSaasProgress(audio, true);
      };
      measure();
      if ('ResizeObserver' in window) {
        state.resizeObserver = new ResizeObserver(entries => {
          const entry = entries && entries[0];
          measure(entry && entry.contentRect ? entry.contentRect.width : 0);
        });
        state.resizeObserver.observe(stage);
      } else {
        window.addEventListener('resize', () => measure(), { passive: true });
      }
    }
    function mountSaasWavePlayers() {
      [dom.sourceAudio, dom.resultAudio].forEach(audio => {
        if (!audio) return;
        audio.classList.add('swWaveSaasNative', 'hidden-audio');
        audio.removeAttribute('controls');
        audio.removeAttribute('controlslist');
        audio.setAttribute('preload', audio.id === 'resultAudio' ? 'auto' : 'none');
        audio.setAttribute('playsinline', 'playsinline');
        audio.setAttribute('webkit-playsinline', 'webkit-playsinline');
        bindTimelineSize(audio);

        if (audio.dataset.saasBound === '1') return;
        audio.dataset.saasBound = '1';

        audio.addEventListener('loadstart', () => {
          if (playbackState(audio).releasing || !audio.getAttribute('src')) return;
          if (audio.dataset.starting === '1') setPlayerState(audio, 'loading', 'Запускаем аудио');
        });
        audio.addEventListener('loadedmetadata', () => {
          const state = playbackState(audio);
          const duration = Number(audio.duration || 0);
          if (Number.isFinite(duration) && duration > 0) state.duration = duration;
          if (state.resumeTime > 0 && duration > state.resumeTime) {
            try { audio.currentTime = state.resumeTime; } catch (_) {}
          }
          updateSaasProgress(audio);
          if (audio.paused && audio.dataset.starting !== '1') setPlayerState(audio, 'ready', 'Готово к прослушиванию');
        });
        audio.addEventListener('durationchange', () => updateSaasProgress(audio));
        audio.addEventListener('canplay', () => {
          if (audio.paused && audio.dataset.starting !== '1') setPlayerState(audio, 'ready', 'Готово к прослушиванию');
        });
        audio.addEventListener('waiting', () => handlePlaybackBuffering(audio));
        audio.addEventListener('stalled', () => handlePlaybackBuffering(audio));
        audio.addEventListener('timeupdate', () => updateSaasProgress(audio));
        audio.addEventListener('seeking', () => updateSaasProgress(audio));
        audio.addEventListener('play', () => {
          stopOtherAudio(audio);
          activeAudio = audio;
          setPlayButtonMode(audio, 'loading');
          const box = playerBoxFor(audio);
          if (box) box.classList.remove('is-play-invite');
          if (box) box.classList.add('has-played');
        });
        audio.addEventListener('playing', () => {
          const state = playbackState(audio);
          clearPlaybackTimers(audio);
          delete audio.dataset.starting;
          delete audio.dataset.buffering;
          state.resumeTime = Number(audio.currentTime || 0);
          activeAudio = audio;
          setPlayButtonMode(audio, 'playing');
          setPlayerState(audio, 'playing', 'Играет');
          startSaasProgressTicker(audio);
        });
        audio.addEventListener('pause', () => {
          const state = playbackState(audio);
          if (state.releasing) return;
          clearPlaybackTimers(audio);
          stopSaasProgressTicker(audio);
          delete audio.dataset.starting;
          delete audio.dataset.buffering;
          if (activeAudio === audio) activeAudio = null;
          setPlayButtonMode(audio, 'ready');
          if (!audio.ended && !audio.error) setPlayerState(audio, 'ready', 'Пауза · нажмите для продолжения');
        });
        audio.addEventListener('ended', () => {
          resetAudioPlayback(audio, {
            rewind: true,
            release: audio.id === 'sourceAudio',
            label: 'Готово к повторному прослушиванию'
          });
        });
        audio.addEventListener('error', () => {
          const state = playbackState(audio);
          if (state.releasing || !audio.getAttribute('src')) return;
          resetAudioPlayback(audio, {
            rewind: false,
            release: audio.id === 'sourceAudio',
            preservePosition: true
          });
          setPlayerState(audio, 'error', 'Не удалось загрузить аудио');
        });
      });

      document.querySelectorAll('[data-saas-audio]').forEach(button => {
        if (button.dataset.saasBound === '1') return;
        button.dataset.saasBound = '1';
        button.addEventListener('click', () => {
          const audio = document.getElementById(button.dataset.saasAudio || '');
          if (!audio || !desiredAudioSource(audio)) {
            showToast('Аудио ещё подключается', 'Подождите несколько секунд, ссылка появится автоматически.');
            return;
          }
          if (audio.dataset.starting === '1') {
            resetAudioPlayback(audio, {
              rewind: false,
              release: audio.id === 'sourceAudio',
              preservePosition: true,
              label: 'Запуск отменён'
            });
            return;
          }
          if (!audio.paused) {
            resetAudioPlayback(audio, {
              rewind: false,
              release: audio.id === 'sourceAudio',
              preservePosition: true,
              label: 'Пауза · нажмите для продолжения'
            });
            return;
          }
          beginAudioPlayback(audio);
        });
      });

      document.querySelectorAll('[data-saas-scrub]').forEach(stage => {
        if (stage.dataset.saasBound === '1') return;
        stage.dataset.saasBound = '1';
        stage.setAttribute('role', 'slider');
        stage.setAttribute('tabindex', '0');
        stage.addEventListener('click', event => {
          const audio = document.getElementById(stage.dataset.saasScrub || '');
          const state = audio ? playbackState(audio) : null;
          const duration = audio ? Number(audio.duration || (state && state.duration) || 0) : 0;
          if (!audio || !duration) return;
          const rect = stage.getBoundingClientRect();
          if (!rect.width) return;
          const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
          const nextTime = x / rect.width * duration;
          const resumeAfterSeek = !audio.paused || audio.dataset.starting === '1';
          if (!audio.getAttribute('src')) attachAudioSource(audio);
          try { audio.currentTime = nextTime; } catch (_) { state.resumeTime = nextTime; }
          state.resumeTime = nextTime;
          updateSaasProgress(audio);
          if (resumeAfterSeek) beginAudioPlayback(audio);
          else setPlayerState(audio, 'ready', 'Позиция выбрана');
        });
        stage.addEventListener('keydown', event => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          const audio = document.getElementById(stage.dataset.saasScrub || '');
          const state = audio ? playbackState(audio) : null;
          const duration = audio ? Number(audio.duration || (state && state.duration) || 0) : 0;
          if (!audio || !duration) return;
          event.preventDefault();
          const current = Number(audio.getAttribute('src') ? audio.currentTime : state.resumeTime) || 0;
          const nextTime = Math.max(0, Math.min(duration, current + (event.key === 'ArrowRight' ? 5 : -5)));
          if (!audio.getAttribute('src')) attachAudioSource(audio);
          try { audio.currentTime = nextTime; } catch (_) {}
          state.resumeTime = nextTime;
          updateSaasProgress(audio);
        });
      });
    }
    function setAudio(el, url) {
      if (!el) return;
      if (!url) {
        delete el.dataset.audioUrl;
        resetAudioPlayback(el, { rewind: true, release: true });
        setPlayerState(el, 'error', 'Аудио недоступно');
        return;
      }
      const playable = audioStreamUrl(url);
      const sourceChanged = desiredAudioSource(el) !== playable;
      if (sourceChanged) {
        resetAudioPlayback(el, { rewind: true, release: true });
        const state = playbackState(el);
        state.duration = 0;
        state.resumeTime = 0;
        el.dataset.audioUrl = playable;
      }
      const preloadMode = el.id === 'resultAudio' ? 'auto' : 'none';
      el.preload = preloadMode;
      el.setAttribute('preload', preloadMode);
      el.setAttribute('playsinline', 'playsinline');
      el.setAttribute('webkit-playsinline', 'webkit-playsinline');
      mountSaasWavePlayers();
      if (el.id === 'resultAudio') {
        setPlayerState(el, 'loading', 'Подключаем аудио');
        attachAudioSource(el);
        if (el.readyState >= 2) setPlayerState(el, 'ready', 'Готово к прослушиванию');
      } else {
        setPlayerState(el, 'ready', 'Готово к прослушиванию');
      }
    }
    function resolveWaveCandidates(list) {
      return (Array.isArray(list) ? list : [list])
        .map(v => normalizeUrl(v || ''))
        .filter(Boolean);
    }
    function markWaveState(img, state) {
      if (!img) return;
      const box = img.closest('.swWaveSaasPlayer');
      if (!box) return;
      box.classList.toggle('is-wave-ready', state === 'ready');
      box.classList.toggle('is-wave-error', state === 'error');
      box.classList.toggle('is-wave-loading', state === 'loading');
    }
    function setWave(img, candidates) {
      if (!img) return;
      const urls = [...new Set(resolveWaveCandidates(candidates))];
      const loader = img.parentElement ? img.parentElement.querySelector('.swWaveLoader') : null;
      if (!urls.length) { markWaveState(img, 'error'); return; }

      let index = 0;
      markWaveState(img, 'loading');
      img.classList.remove('is-ready');
      img.removeAttribute('src');
      img.removeAttribute('data-wave-source');
      img.decoding = 'async';
      if ('fetchPriority' in img) {
        img.fetchPriority = img.id === 'resultWave' ? 'high' : 'auto';
      }

      const tryNext = () => {
        const src = urls[index++];
        if (!src) {
          markWaveState(img, 'error');
          if (loader) loader.textContent = 'Волна временно недоступна';
          return;
        }
        img.onload = () => {
          if (img.naturalWidth < 16 || img.naturalHeight < 8) {
            tryNext();
            return;
          }
          img.dataset.waveSource = src;
          img.classList.add('is-ready');
          markWaveState(img, 'ready');
        };
        img.onerror = () => tryNext();
        img.src = src;
      };

      tryNext();
    }
    mountSaasWavePlayers();
    
    function openRewardModal() { if (dom.rewardOverlay) dom.rewardOverlay.classList.add('show'); }
    function closeRewardModal() { if (dom.rewardOverlay) dom.rewardOverlay.classList.remove('show'); }
    function closeResultModal() {
      /* codex-result-recall-after-modal-close-v1:
         keep the finished job and summary so the homepage can restore the
         saved result card after this modal is dismissed. */
      clearInterval(pollTimer); pollTimer = null;
      [dom.sourceAudio, dom.resultAudio].forEach(audio => {
        if (audio) resetAudioPlayback(audio, { rewind: true, release: true, label: 'Готово к прослушиванию' });
      });
      activeAudio = null;
      if (dom.resultOverlay) {
        dom.resultOverlay.classList.remove('show');
        dom.resultOverlay.style.display = 'none';
      }
      window.location.replace('/?close_result=1');
    }
    window.addEventListener('pagehide', () => {
      [dom.sourceAudio, dom.resultAudio].forEach(audio => {
        if (audio) resetAudioPlayback(audio, { rewind: true, release: true });
      });
    });
    if (dom.rewardClose) dom.rewardClose.addEventListener('click', closeRewardModal);
    if (dom.rewardOverlay) dom.rewardOverlay.addEventListener('click', e => { if (e.target === dom.rewardOverlay) closeRewardModal(); });
    if (dom.resultClose) dom.resultClose.addEventListener('click', event => { event.preventDefault(); closeResultModal(); });
    if (dom.resultOverlay) dom.resultOverlay.addEventListener('click', e => { if (e.target === dom.resultOverlay) closeResultModal(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape') closeResultModal(); });
    function setLoading(title, subtitle, detail) {
      const safeTitle = cleanWorkerText(title);
      const safeSubtitle = cleanWorkerText(subtitle);
      const safeDetail = cleanWorkerText(detail || subtitle);
      if (dom.resultModal) dom.resultModal.classList.add('is-loading');
      setText(dom.resultTitle, safeTitle);
      setText(dom.resultSubtitle, safeSubtitle);
      setText(dom.loadingTitle, safeTitle);
      setText(dom.loadingText, safeDetail);
    }
    function abandonUnavailableResult() {
      clearInterval(pollTimer); pollTimer = null;
      clearSavedJob();
      currentJobId = '';
      if (dom.resultOverlay) {
        dom.resultOverlay.classList.remove('show');
        dom.resultOverlay.style.display = 'none';
      }
      window.location.replace('/?forget_result=1');
    }
    async function applyDone(job, data, options = {}) {
      currentJobId = job; saveJob(job);
      const previewUrl = normalizeUrl(pickUrl(data, ['preview_stream_url','preview_audio_url','preview_url','demo_url','preview_download_url','download_url']) || ('/download.php?job=' + encodeURIComponent(job) + '&format=mp3&inline=1&audio=1'));
      const fullUrl = normalizeUrl(pickUrl(data, ['full_url','full_download_url','paid_url']) || ('/download_full.php?job=' + encodeURIComponent(job)));
      const payUrl = normalizeUrl(pickUrl(data, ['pay_url','payment_url','checkout_url']) || ('/pay.php?job=' + encodeURIComponent(job)));
      const sourceAudioUrl = normalizeUrl(pickUrl(data, ['source_audio_url','input_audio_url','original_audio_url','original_url','source_url','source_download_url','download_source_url']) || ('/download_source.php?job=' + encodeURIComponent(job)));
      const outputAudioUrl = normalizeUrl(pickUrl(data, ['output_audio_url','result_audio_url','preview_stream_url','preview_audio_url','preview_url','demo_url','preview_download_url','download_url']) || previewUrl);
      const waveformVersion = String(
        data.waveform_version
        || data.waveform_generated_at
        || data.ts
        || data.output_size_bytes
        || 'full-timeline-v2'
      );
      const sourceWaveUrl = [
        jobAsset(job, 'source_waveform.png', waveformVersion),
        pickUrl(data, ['source_waveform_url','input_waveform_url','source_wave_url','before_wave_url','input_waveform_image_url']),
        pickUrl(data, ['input_preview_url','source_preview_url','before_preview_url']),
        jobAsset(job, 'input_preview.png', waveformVersion)
      ];
      const resultWaveUrl = [
        jobAsset(job, 'output_waveform.png', waveformVersion),
        pickUrl(data, ['output_waveform_url','result_waveform_url','after_wave_url','output_waveform_image_url']),
        pickUrl(data, ['output_preview_url','result_preview_url','after_preview_url']),
        jobAsset(job, 'output_preview.png', waveformVersion),
        jobAsset(job, '_output_waveform_composite.png', waveformVersion)
      ];
      const sourceBytes = Number(data.input_size_bytes || data.source_size_bytes || data.source_size || data.input_size || data.original_size || data.source_bytes || 0);
      const resultBytes = Number(data.full_size_bytes || data.output_size_bytes || data.full_size || data.output_size || data.result_size || data.full_bytes || 0);
      let impactSourceBytes = sourceBytes;
      let impactResultBytes = resultBytes;
      const durationSeconds = Number(data.duration || data.preview_duration || data.length || data.source_duration || 19);
      const duration = secondsLabel(durationSeconds);
      const shortTrackFree = Number.isFinite(durationSeconds)
        && durationSeconds <= 50
        && !!(data.short_track_free_access || data.access_type === 'short_track_free' || data.payment_status === 'short_track_free');
      const fullAccess = !!(data.full_access || data.paid || data.access === 'full' || data.access_type === 'paid' || shortTrackFree);
      const displayName = resultTrackName(data);
      const resultExtension = resultFileExtension(data, fullUrl);
      saveResultSummary(job, data, sourceBytes, resultBytes, fullAccess);
      setText(document.getElementById('sourceTimeEnd'), duration);
      setText(document.getElementById('resultTimeEnd'), duration);
      setText(dom.sourceSize, 'Исходный ' + (sourceBytes ? formatMb(sourceBytes) : '—'));
      setText(dom.resultSize, 'Полученный ' + (resultBytes ? formatMb(resultBytes) : '—'));
      updateImpactMetrics(impactSourceBytes, impactResultBytes, data);
      if (!sourceBytes && sourceAudioUrl) probeSize(sourceAudioUrl).then(b => { if (b) { impactSourceBytes = b; setText(dom.sourceSize, 'Исходный ' + formatMb(b)); updateImpactMetrics(impactSourceBytes, impactResultBytes, data); } });
      if (!resultBytes && fullUrl) probeSize(fullUrl).then(b => { if (b) { impactResultBytes = b; setText(dom.resultSize, 'Полученный ' + formatMb(b)); setText(dom.paySub, formatResultFileMeta(b, resultExtension)); updateImpactMetrics(impactSourceBytes, impactResultBytes, data); } });
      const shortTrackMp3Url = shortTrackFree
        ? normalizeUrl(pickUrl(data, ['player_mp3_stream_url']))
        : '';
      const shortTrackWavUrl = shortTrackFree
        ? normalizeUrl(pickUrl(data, ['player_wav_stream_url','output_audio_url','result_audio_url','full_download_url']))
        : '';
      const playableResultUrl = shortTrackMp3Url || shortTrackWavUrl || outputAudioUrl || previewUrl;
      // Load the playable result first so waveform decoration cannot delay the first tap.
      // Keep listening lightweight; the full WAV remains the download artifact.
      dom.resultAudio.dataset.resultReady = '1';
      dom.resultAudio.dataset.audioFormat = shortTrackFree ? (shortTrackMp3Url ? 'mp3' : 'wav') : String(data.player_audio_format || 'preview');
      setAudio(dom.resultAudio, playableResultUrl);
      setAudio(dom.sourceAudio, sourceAudioUrl || previewUrl);
      setPlayerState(dom.resultAudio, 'ready', 'Готово к прослушиванию');
      setWave(dom.sourceWave, sourceWaveUrl);
      setWave(dom.resultWave, resultWaveUrl);
      const resultPlayer = document.getElementById('resultSaasPlayer');
      if (resultPlayer && !resultPlayer.classList.contains('has-played')) resultPlayer.classList.add('is-play-invite');
      setHref(dom.rewardDownload, fullUrl);
      if (dom.pay) {
        dom.pay.href = fullAccess ? fullUrl : payUrl;
        dom.pay.classList.toggle('is-paid', fullAccess);
        dom.pay.setAttribute('aria-label', shortTrackFree ? 'Скачать бесплатно' : (fullAccess ? 'Скачать оплаченный файл' : 'Скачать улучшенную волну за 90 рублей через СБП'));
      }
      dom.pay.classList.toggle('is-free', shortTrackFree);
      setText(dom.payEyebrow, shortTrackFree ? 'БЕЗ ОПЛАТЫ' : (fullAccess ? 'ОПЛАТА ПОДТВЕРЖДЕНА' : 'ВЫ МОЖЕТЕ'));
      setText(dom.payText, fullAccess ? 'Скачать файл' : 'Скачать');
      setText(dom.paySub, fullAccess ? ('Готовый WAV' + (resultBytes ? ' • ' + formatResultFileMeta(resultBytes, resultExtension) : '')) : formatResultFileMeta(resultBytes, resultExtension));
      setText(dom.payPrice, shortTrackFree ? '' : '90 ₽');
      setText(dom.purchaseTitle, shortTrackFree ? 'Бесплатное скачивание' : (fullAccess ? 'Файл готов к скачиванию' : 'Забрать полный WAV'));
      setText(dom.purchaseDescription, shortTrackFree ? 'Короткий результат до 50 секунд доступен бесплатно.' : (fullAccess ? 'Оплата подтверждена. Скачайте обработанный WAV.' : 'Вся длительность и WAV-качество. Доступ сразу после оплаты.'));
      setText(dom.purchasePrice, shortTrackFree ? '' : (fullAccess ? 'Оплачено' : '90 ₽'));
      if (dom.resultModal) dom.resultModal.classList.remove('is-loading');
      setText(dom.resultTitle, displayName + '.wav');
      setText(dom.resultSubtitle, 'Улучшенная волна готова — прослушайте обработанную версию и скачайте результат.');
      if (fullAccess && (options.openPaidModal || boot.paid)) openRewardModal();
    }
    async function restoreJob(job, options = {}) {
      const safeJob = String(job || '').trim().toLowerCase();
      if (!jobPattern.test(safeJob)) return false;
      const data = await fetchStatus(safeJob);
      if (!data || !data.status || data.ok === false) return false;
      if (data.status === 'done') { await applyDone(safeJob, data, options); return true; }
      if (data.status === 'queued' || data.status === 'processing') {
        currentJobId = safeJob; saveJob(safeJob);
        setLoading(data.status === 'queued' ? 'Файл в очереди' : 'Обработка аудио', data.message || data.stage || 'Результат откроется здесь автоматически.', data.message || data.stage || 'Пожалуйста, не закрывайте страницу.');
        pollJob(safeJob);
        return true;
      }
      if (data.status === 'error') throw new Error(data.message || data.error || 'Задача завершилась ошибкой.');
      return false;
    }
    function pollJob(job) {
      const safeJob = String(job || '').trim().toLowerCase();
      if (!jobPattern.test(safeJob)) return;
      clearInterval(pollTimer);
      pollFailures = 0;
      const tick = async () => {
        try {
          const data = await fetchStatus(safeJob);
          if (!data || !data.status) throw new Error('Плохой ответ статуса');
          pollFailures = 0;
          if (data.status === 'queued') { setLoading('Файл в очереди', data.message || data.queue_deferred_reason || 'Ожидаем свободное окно обработки.', 'Результат появится автоматически.'); return; }
          if (data.status === 'processing') { const pct = Math.max(2, Math.min(99, parseInt(data.percent || 0, 10) || 2)); setLoading('Обработка аудио', 'Готовность ' + pct + '%. Результат появится здесь автоматически.', data.message || data.stage || 'Идёт обработка аудио.'); return; }
          if (data.status === 'done') { clearInterval(pollTimer); pollTimer = null; await applyDone(safeJob, data, { openPaidModal: false }); showToast('Результат готов', 'Демо доступно. Можно сравнить звук и получить полный WAV.'); return; }
          if (data.status === 'error') {
            clearInterval(pollTimer); pollTimer = null;
            setLoading('Обработка не завершена', 'Возвращаем на главную страницу.', data.message || data.error || 'Ошибка обработки');
            showToast('Обработка не завершена', data.message || data.error || 'Попробуйте загрузить файл ещё раз.');
            window.setTimeout(abandonUnavailableResult, 1200);
            return;
          }
        } catch (error) {
          pollFailures += 1;
          if (pollFailures >= 5) {
            abandonUnavailableResult();
            return;
          }
          setLoading('Восстанавливаем соединение', 'Результат не потерян, повторяем запрос.', 'Попытка ' + pollFailures + ' из 5.');
        }
      };
      tick(); pollTimer = setInterval(tick, 1200);
    }
    if (dom.pay) {
      dom.pay.addEventListener('click', () => {
        try { window.dispatchEvent(new CustomEvent('sunowave:payment-event', { detail: { name: 'payment_click', job: currentJobId } })); } catch (_) {}
      }, { capture: true });
    }
    window.addEventListener('sunowave:payment-event', event => {
      const detail = event && event.detail ? event.detail : {};
      const name = String(detail.name || '').toLowerCase();
      if (name === 'payment_success' && currentJobId) restoreJob(currentJobId, { openPaidModal: true }).catch(() => openRewardModal());
    });
    (async () => {
      if (boot.logout) clearSavedJob();
      if (!currentJobId) currentJobId = readSavedJob();
      if (currentJobId) {
        setLoading('Открываем результат', 'Проверяем готовность файла. Лишняя главная страница не будет показана.', 'Подключаем данные обработки…');
        try {
          const restored = await restoreJob(currentJobId, { openPaidModal: !!boot.paid });
          if (!restored) {
            abandonUnavailableResult();
            return;
          }
        } catch (error) {
          await new Promise(resolve => window.setTimeout(resolve, 700));
          try {
            const restored = await restoreJob(currentJobId, { openPaidModal: !!boot.paid });
            if (restored) return;
          } catch (_) {}
          abandonUnavailableResult();
        }
        return;
      }
      setLoading('Нет активной обработки', 'Откройте главную страницу и загрузите аудиофайл.', 'Сейчас нет job id для восстановления результата.');
    })();
  })();

// SOURCE production/index.php:14010-14041
(function(){
  'use strict';
  window.swResultSunCursorMarkersReady = true;
  return;
  var topMarks = ['🌞','☀️','🔆','🌅'];
  var bottomMarks = ['☀️','🌞','🌄','🔆'];
  var topIndex = 0;
  var bottomIndex = 1;
  function cursors(){
    return document.querySelectorAll('#resultModal .audio-card.after .swWaveCursor');
  }
  function paint(){
    cursors().forEach(function(cursor){
      cursor.setAttribute('data-sw-sun-top', topMarks[topIndex % topMarks.length]);
      cursor.setAttribute('data-sw-sun-bottom', bottomMarks[bottomIndex % bottomMarks.length]);
    });
  }
  function boot(){
    paint();
    if (window.swResultSunCursorMarkersReady) return;
    window.swResultSunCursorMarkersReady = true;
    window.setInterval(function(){ topIndex = (topIndex + 1) % topMarks.length; paint(); }, 4300);
    window.setInterval(function(){ bottomIndex = (bottomIndex + 1) % bottomMarks.length; paint(); }, 5700);
    if ('MutationObserver' in window) {
      new MutationObserver(paint).observe(document.documentElement, { childList:true, subtree:true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

// SOURCE production/index.php:14570-14813
(function(){
  var steps = [
    ['Приняли файл', 'Создали job и закрепили исходник за текущей сессией.'],
    ['Проверили формат', 'Отсекли пустые данные, битые расширения и неподходящую длительность.'],
    ['Сохранили оригинал', 'Оставили исходную дорожку как контрольную точку сравнения.'],
    ['Декодировали звук', 'Перевели входной файл в рабочий PCM-поток без маркетинговых догадок.'],
    ['Считали параметры', 'Определили каналы, частоту, пики, длительность и техническую базу.'],
    ['Построили исходную волну', 'Отрендерили source_waveform.png в единой сетке 1800 на 320.'],
    ['Разобрали громкость', 'Проверили RMS, пики, паузы и зоны полезного сигнала.'],
    ['Нашли риски', 'Отметили клиппинг, провалы, шумовые хвосты и слабые участки.'],
    ['Собрали план', 'Worker best выбрал цепочку обработки под конкретный материал.'],
    ['Очистили артефакты', 'Убрали технический мусор, который мешает плотности волны.'],
    ['Выровняли каналы', 'Стабилизировали левый и правый каналы, чтобы центр не плавал.'],
    ['Настроили gain staging', 'Подняли полезный уровень без слепого раздувания файла.'],
    ['Стабилизировали динамику', 'Сгладили провалы и удержали музыкальную атаку.'],
    ['Усилили гармоники', 'Добавили читаемость там, где сигнал был тонким.'],
    ['Уплотнили волну', 'Расширили полезную waveform-структуру без замены смысла трека.'],
    ['Защитили пики', 'Ограничили перегруз, чтобы прирост не превращался в клиппинг.'],
    ['Собрали preview', 'Сделали быструю прослушку для проверки до покупки.'],
    ['Собрали полный WAV', 'Отрендерили итоговый файл в полном качестве.'],
    ['Построили волну Стало', 'Отрендерили output_waveform.png в той же координатной сетке.'],
    ['Сверили шкалу', 'Привели исходник и результат к общей временной сетке и общей амплитудной шкале.'],
    ['Наложили Было на Стало', 'Показали исходную envelope поверх результата в тех же координатах.'],
    ['Посчитали разницу', 'Для каждого временного столбца вычли envelope исходника из envelope результата и отдельно сохранили добавленные и уменьшенные участки.'],
    ['Перевели в процент', 'Разделили положительный остаток envelope после вычитания исходника на площадь исходника: envelope_positive_excess_v2.'],
    ['Записали отчёт', 'Обновили progress.json, report и session summary для возврата результата.'],
    ['Показали результат', 'Вывели две волны, честный процент и CTA скачивания полного WAV.']
  ];

  function text(selector, fallback) {
    var el = document.querySelector(selector);
    var value = el ? String(el.textContent || '').trim() : '';
    return value || fallback || '—';
  }

  function ensureAlert() {
    var alert = document.getElementById('swWaveProofAlert');
    if (alert) return alert;
    alert = document.createElement('section');
    alert.id = 'swWaveProofAlert';
    alert.className = 'swWaveProofAlert';
    alert.setAttribute('role', 'dialog');
    alert.setAttribute('aria-modal', 'true');
    alert.setAttribute('aria-labelledby', 'swWaveProofTitle');
    alert.innerHTML =
      '<div class="swWaveProofAlert__panel">' +
        '<div class="swWaveProofAlert__head">' +
          '<div>' +
            '<span class="swWaveProofAlert__eyebrow">Метод без формулы по мегабайтам</span>' +
            '<h2 id="swWaveProofTitle">Что будем делать</h2>' +
            '<p>Что именно будет происходить</p>' +
          '</div>' +
          '<button class="swWaveProofAlert__close" type="button" aria-label="Закрыть">×</button>' +
        '</div>' +
        '<div class="swWaveProofAlert__body">' +
          '<div class="swWaveProofAlert__metrics">' +
            '<span>Исходный вес<b data-proof-source>—</b></span>' +
            '<span>Полученный вес<b data-proof-result>—</b></span>' +
            '<span>Прирост волновой структуры<b data-proof-growth>—</b></span>' +
          '</div>' +
          '<ol class="swWaveProofAlert__steps">' +
            steps.map(function(step){ return '<li><b>' + step[0] + '</b>' + step[1] + '</li>'; }).join('') +
          '</ol>' +
        '</div>' +
      '</div>';
    document.body.appendChild(alert);
    alert.addEventListener('click', function(event) {
      if (event.target === alert || event.target.closest('.swWaveProofAlert__close')) closeAlert();
    });
    return alert;
  }

  function refreshAlertMetrics(alert) {
    var source = alert.querySelector('[data-proof-source]');
    var result = alert.querySelector('[data-proof-result]');
    var growth = alert.querySelector('[data-proof-growth]');
    if (source) source.textContent = text('#impactSourceSize');
    if (result) result.textContent = text('#impactResultSize');
    if (growth) growth.textContent = text('#impactGrowth');
  }

  function setFutureAlertMetrics(alert) {
    var source = alert.querySelector('[data-proof-source]');
    var result = alert.querySelector('[data-proof-result]');
    var growth = alert.querySelector('[data-proof-growth]');
    if (source) source.textContent = 'Тут отобразится принятый вес';
    if (result) result.textContent = 'Тут будет полученный вес';
    if (growth) growth.textContent = 'Тут рассчитаем реальный прирост волновой структуры, покажем, как он рассчитывается и что это даёт';
  }

  function openAlert(tense) {
    var alert = ensureAlert();
    alert.dataset.swProofTense = tense === 'future' ? 'future' : 'past';
    refreshAlertMetrics(alert);
    if (alert.dataset.swProofTense === 'future') setFutureAlertMetrics(alert);
    alert.dispatchEvent(new CustomEvent('sw:proof-tense'));
    alert.classList.add('is-open');
    document.documentElement.classList.add('swProofAlertOpen');
    var close = alert.querySelector('.swWaveProofAlert__close');
    if (close) close.focus({preventScroll:true});
  }

  function closeAlert() {
    var alert = document.getElementById('swWaveProofAlert');
    if (!alert) return;
    alert.classList.remove('is-open');
    document.documentElement.classList.remove('swProofAlertOpen');
  }

  /* Public bridge for homepage explain links: the result proof modal remains
     the single canonical 37-operation report, regardless of entry point. */
  window.__swOpenWaveProofAlert = openAlert;
  window.__swCloseWaveProofAlert = closeAlert;

  function proofJobId() {
    try {
      var params = new URLSearchParams(window.location.search || '');
      var fromUrl = String(params.get('job') || '').trim().toLowerCase();
      if (/^[a-f0-9]{32}$/.test(fromUrl)) return fromUrl;
    } catch (_) {}
    try {
      var cookieMatch = document.cookie.match(/(?:^|;\s*)(?:sunowave_last_job|sw_last_job)=([^;]+)/);
      var fromCookie = cookieMatch ? decodeURIComponent(cookieMatch[1] || '').trim().toLowerCase() : '';
      if (/^[a-f0-9]{32}$/.test(fromCookie)) return fromCookie;
    } catch (_) {}
    var keys = ['sw_saved_result_job', 'sunowave_last_job', 'sunowave:last_job', 'sw_minusa_last_job'];
    for (var i = 0; i < keys.length; i += 1) {
      try {
        var localValue = String(window.localStorage && window.localStorage.getItem(keys[i]) || '').trim().toLowerCase();
        if (/^[a-f0-9]{32}$/.test(localValue)) return localValue;
      } catch (_) {}
      try {
        var sessionValue = String(window.sessionStorage && window.sessionStorage.getItem(keys[i]) || '').trim().toLowerCase();
        if (/^[a-f0-9]{32}$/.test(sessionValue)) return sessionValue;
      } catch (_) {}
    }
    return '';
  }

  function reportProofOpen() {
    var job = proofJobId();
    if (!job) return;
    var body = new URLSearchParams();
    body.set('event', 'wave_proof_open');
    body.set('job', job);
    body.set('source', 'index_result_modal');
    body.set('button', 'what_was_done');
    body.set('page', window.location.pathname + window.location.search);
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body.toString()], {type:'application/x-www-form-urlencoded; charset=UTF-8'});
        if (navigator.sendBeacon('/wave_proof_event.php', blob)) return;
      }
    } catch (_) {}
    try {
      fetch('/wave_proof_event.php', {
        method:'POST',
        credentials:'same-origin',
        keepalive:true,
        headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With':'XMLHttpRequest'},
        body:body.toString()
      }).catch(function(){});
    } catch (_) {}
  }

  function ensureCta() {
    var standaloneModal = document.getElementById('resultModal');
    var standaloneCard = standaloneModal ? standaloneModal.querySelector('.audio-card.after') : null;
    var standaloneOffer = standaloneCard ? standaloneCard.querySelector('.result-offer') : null;
    if (!standaloneModal || !standaloneCard || !standaloneOffer) return;
    standaloneModal.querySelectorAll('.swWaveProofCta').forEach(function(node) { node.remove(); });
    var standaloneButton = document.getElementById('swWaveProofStandaloneButton');
    if (!standaloneButton) {
      standaloneButton = document.createElement('button');
      standaloneButton.id = 'swWaveProofStandaloneButton';
      standaloneButton.className = 'swWaveProofCta__button swWaveProofCloud__button swWaveProofStandaloneButton';
      standaloneButton.type = 'button';
      standaloneButton.setAttribute('aria-haspopup', 'dialog');
      standaloneButton.setAttribute('aria-controls', 'swWaveProofAlert');
      standaloneButton.innerHTML = '<span class="swProofButtonSignal" aria-hidden="true"></span><span class="swProofButtonLabel">\u0427\u0442\u043e \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e</span>';
      var signal = standaloneButton.querySelector('.swProofButtonSignal');
      var heights = [18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69];
      heights.forEach(function(height, index) {
        var bar = document.createElement('i');
        bar.style.setProperty('--h', height + 'px');
        bar.style.setProperty('--d', (-index * 0.11).toFixed(2) + 's');
        signal.appendChild(bar);
      });
      standaloneOffer.insertAdjacentElement('beforebegin', standaloneButton);
      standaloneButton.addEventListener('click', function() {
        reportProofOpen();
        openAlert('past');
      });
    } else {
      /* Upgrade a button left by an older cached script without touching its listener. */
      var oldLabel = standaloneButton.querySelector('.swProofButtonLabel');
      if (!oldLabel) {
        var oldText = Array.prototype.filter.call(standaloneButton.childNodes, function(node) { return node.nodeType === 3; }).map(function(node) { return node.nodeValue; }).join('').trim() || '\u0427\u0442\u043e \u0431\u044b\u043b\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e';
        standaloneButton.innerHTML = '<span class="swProofButtonSignal" aria-hidden="true"></span><span class="swProofButtonLabel"></span>';
        standaloneButton.querySelector('.swProofButtonLabel').textContent = oldText;
      }
      if (!standaloneButton.querySelector('.swProofButtonSignal i')) {
        var existingSignal = standaloneButton.querySelector('.swProofButtonSignal');
        if (!existingSignal) { existingSignal = document.createElement('span'); existingSignal.className = 'swProofButtonSignal'; existingSignal.setAttribute('aria-hidden','true'); standaloneButton.insertBefore(existingSignal, standaloneButton.firstChild); }
        var existingHeights = [18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69,18,35,52,69];
        existingHeights.forEach(function(height, index) { var bar = document.createElement('i'); bar.style.setProperty('--h', height + 'px'); bar.style.setProperty('--d', (-index * 0.11).toFixed(2) + 's'); existingSignal.appendChild(bar); });
      }
    }
    return;
    var modal = document.getElementById('resultModal');
    var impact = modal ? modal.querySelector('.result-impact') : null;
    if (!modal || !impact) return;
    if (modal.querySelector('.swWaveProofCta')) return;
    var cta = document.createElement('section');
    cta.className = 'cloud_profit swWaveProofCta swWaveProofCloud';
    cta.setAttribute('data-sw-proof-cloud', 'cloud_profit');
    cta.setAttribute('aria-label', 'Как рассчитывается прирост волновой структуры');
    cta.innerHTML =
      '<div class="swWaveProofCta__copy swWaveProofCloud__copy">' +
        '<b>Как мы это рассчитываем</b>' +
        '<span>Покажем 25 действий: от обработки файла до фактического вычитания envelope исходника из результата.</span>' +
      '</div>' +
      '<button class="swWaveProofCta__button swWaveProofCloud__button" type="button">Что было сделано</button>';
    impact.insertAdjacentElement('afterend', cta);
    cta.querySelector('button').addEventListener('click', function() {
      reportProofOpen();
      openAlert('past');
    });
  }

  function start() {
    ensureCta();
    ensureAlert();
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') closeAlert();
    });
    new MutationObserver(ensureCta).observe(document.documentElement, { childList:true, subtree:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();

// SOURCE production/index.php:14815-14876
(() => {
  'use strict';
  if (window.__swIndexExplainToResultProofV1) return;
  window.__swIndexExplainToResultProofV1 = true;

  const openResultProof = (event) => {
    const trigger = event.target && event.target.closest
      ? event.target.closest('[data-sw-open-explain],a[href="#swExplainOverlay"]')
      : null;
    if (!trigger) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    const legacy = document.getElementById('swExplainOverlay');
    if (legacy) {
      legacy.hidden = true;
      legacy.classList.remove('is-open');
      document.documentElement.classList.remove('swExplainOpen');
    }
    trigger.setAttribute('aria-controls', 'swWaveProofAlert');
    trigger.setAttribute('aria-haspopup', 'dialog');
    try {
      if (window.location.hash === '#swExplainOverlay') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    } catch (_) {}

    const open = window.__swOpenWaveProofAlert;
    if (typeof open === 'function') {
      open('future');
      return;
    }

    /* The proof module may still be booting on first paint. Retry briefly
       instead of exposing the old explanatory dialog or losing the click. */
    let attempts = 0;
    const retry = () => {
      const fn = window.__swOpenWaveProofAlert;
      if (typeof fn === 'function') {
        fn('future');
        return;
      }
      attempts += 1;
      if (attempts < 40) window.setTimeout(retry, 25);
    };
    retry();
  };

  document.addEventListener('click', openResultProof, true);
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const trigger = event.target && event.target.closest
      ? event.target.closest('[data-sw-open-explain],a[href="#swExplainOverlay"]')
      : null;
    if (!trigger) return;
    openResultProof(event);
  }, true);
})();

// SOURCE production/index.php:14878-14934
(() => {
  if (window.__swResultCarousel37PastPresentFutureV1) return;
  const rows = [
    ['Получаем файл','Проверяем, что аудио загрузилось полностью и без повреждений.','Обработка начинается с надёжного исходника.'],
    ['Проверяем формат','Смотрим тип файла, длительность и базовые ограничения.','Сервис понимает задачу и не тратит время на неподходящий файл.'],
    ['Сохраняем оригинал','Оставляем исходную дорожку как точку сравнения.','Можно честно увидеть разницу между «Было» и «Стало».'],
    ['Читаем звук','Определяем каналы, частоту, громкость и длительность трека.','Настройки подбираются под конкретную запись.'],
    ['Строим исходную волну','Рисуем аккуратный волновой рисунок исходного файла.','Изменения видны глазами, а не только на слух.'],
    ['Находим проблемные места','Отмечаем перегруз, провалы, шумовые хвосты и слабые участки.','Исправления направлены туда, где они действительно нужны.'],
    ['Собираем план','Выбираем последовательность улучшений для этого материала.','Трек не обрабатывается одной грубой настройкой для всех.'],
    ['Чистим артефакты','Убираем лишний фон, щелчки и технический мусор.','Звук становится чище и спокойнее.'],
    ['Балансируем каналы','Выравниваем левую и правую стороны записи.','Центр и панорама звучат устойчиво.'],
    ['Настраиваем уровень','Поднимаем полезную громкость без слепого увеличения всего файла.','Запись звучит увереннее и остаётся комфортной.'],
    ['Сглаживаем динамику','Удерживаем слишком резкие пики и поддерживаем тихие места.','Музыка становится ровнее, но не теряет живость.'],
    ['Возвращаем ясность','Подчёркиваем полезные детали там, где они были незаметны.','Голос и инструменты читаются лучше.'],
    ['Защищаем пики','Ограничиваем опасные всплески перед сохранением результата.','Меньше риска неприятного клиппинга и искажений.'],
    ['Готовим демо','Собираем короткое прослушивание для быстрой проверки.','Можно оценить результат до получения полной версии.'],
    ['Собираем полный WAV','Рендерим всю дорожку в полном качестве.','Готов файл для дальнейшего использования и скачивания.'],
    ['Строим волну «Стало»','Рисуем итоговый волновой рисунок в той же сетке.','Сравнение остаётся честным и наглядным.'],
    ['Сравниваем результат','Сопоставляем исходную и итоговую форму по общей шкале.','Понятно, где добавилась плотность и выразительность.'],
    ['Показываем отчёт','Сохраняем параметры и выводим их рядом с готовым результатом.','Всегда ясно, что произошло и за что отвечает каждый шаг.']
  ];
  const text = (value) => String(value || '');
  const patch = () => {
    document.querySelectorAll('.swWaveProofCta').forEach((cta) => {
      const title = cta.querySelector('.swWaveProofCta__copy b');
      const subtitle = cta.querySelector('.swWaveProofCta__copy span');
      const button = cta.querySelector('.swWaveProofCta__button');
      if (title && title.textContent !== 'Это как?') title.textContent = 'Это как?';
      if (subtitle && subtitle.textContent !== 'Что именно было сделано') subtitle.textContent = 'Что именно было сделано';
      if (button && button.textContent !== 'Что было сделано') button.textContent = 'Что было сделано';
    });
    const alert = document.getElementById('swWaveProofAlert');
    if (!alert || alert.dataset.swTableReady === '1') return;
    const heading = alert.querySelector('#swWaveProofTitle');
    const intro = alert.querySelector('.swWaveProofAlert__head p');
    if (heading) heading.textContent = 'Что будем делать';
    if (intro) intro.textContent = 'Что именно будет происходить';
    const oldList = alert.querySelector('.swWaveProofAlert__steps');
    if (!oldList) return;
    const sheet = document.createElement('div');
    sheet.className = 'swWaveProofSheet';
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const headRow = document.createElement('tr');
    ['Блок','Что делаем','Что это даёт'].forEach((label) => { const cell = document.createElement('th'); cell.textContent = label; headRow.appendChild(cell); });
    head.appendChild(headRow); table.appendChild(head);
    const body = document.createElement('tbody');
    rows.forEach((row, index) => { const tr = document.createElement('tr'); tr.style.setProperty('--sw-proof-delay', `${index * .22}s`); row.forEach((value) => { const cell = document.createElement('td'); cell.textContent = text(value); tr.appendChild(cell); }); body.appendChild(tr); });
    table.appendChild(body); sheet.appendChild(table); oldList.replaceWith(sheet);
    alert.dataset.swTableReady = '1';
  };
  patch();
  new MutationObserver(patch).observe(document.body, {childList:true, subtree:true});
})();

// SOURCE production/index.php:15226-15260
(() => {
  const rows = [
    ['Анализируем звучание', 'Слушаем баланс частот, перепады громкости, резкие пики, тихие участки, стереокартину и заметные помехи. Для каждого трека определяем, где звук перегружен, а где ему не хватает плотности и ясности.', 'Чтобы обработка подстраивалась под конкретную запись, а не накладывала один и тот же эффект на любую музыку. Так сохраняются характер трека и естественные акценты.'],
    ['Очищаем фон и артефакты', 'Ослабляем постоянный шум, щелчки, треск и лишние хвосты, которые маскируют полезные детали. Делаем это аккуратно, не срезая атаку ударных, дыхание голоса и живую фактуру инструментов.', 'Паузы становятся чище, тихие детали слышны лучше, а наушники и громкая акустика меньше подчёркивают технический мусор записи.'],
    ['Собираем плотный низ', 'Контролируем гул и лишний суббас, уплотняем полезный бас и согласуем его с бочкой. Низкие частоты остаются мощными, но перестают перекрывать голос и середину.', 'Трек увереннее звучит на колонках и в машине, а на телефоне ритм читается лучше и не превращается в размытый гул.'],
    ['Раскрываем середину', 'Убираем мутность и назойливые резонансы в области, где пересекаются голос, гитары, клавиши и основные музыкальные детали. Нужные частоты подчёркиваем мягко, без резкого «радио»-эффекта.', 'Вокал и ведущие инструменты выходят вперёд, слова становятся понятнее, а плотный микс меньше утомляет при долгом прослушивании.'],
    ['Добавляем ясный верх', 'Сглаживаем колкость, свистящие согласные и резкие тарелки, затем возвращаем воздуху и мелким деталям достаточную выразительность. Яркость добавляется только там, где она не создаёт нового шума.', 'Запись звучит открытее и современнее, но не режет слух на высокой громкости и не становится шипящей в наушниках.'],
    ['Выравниваем динамику', 'Поддерживаем слишком тихие фрагменты и сдерживаем внезапные скачки громкости. Сохраняем атаки ударных и музыкальное дыхание, чтобы трек не стал плоским и постоянно зажатым.', 'Куплеты и припевы воспринимаются ровнее, важные детали не пропадают, а громкость не приходится постоянно поправлять вручную.'],
    ['Защищаем пики', 'Ловим короткие перегрузы до появления цифрового хруста и клиппинга. Ограничиваем только опасные всплески, оставляя ударам и акцентам естественную силу.', 'Можно получить более уверенный и громкий результат без неприятных искажений, которые особенно заметны на телефоне и компактной акустике.'],
    ['Настраиваем итоговую громкость', 'Приводим воспринимаемый уровень к уверенной финальной громкости, проверяем баланс левого и правого каналов и ещё раз слушаем результат на разных по характеру участках трека.', 'Готовая версия звучит собранно и предсказуемо на телефоне, в наушниках, машине и домашней системе — без провалов, перегруза и резких скачков.']
  ];
  const patch = () => {
    const table = document.querySelector('.swWaveProofSheet table');
    if (!table || table.dataset.swSoundOnly === '1') return;
    const heads = table.querySelectorAll('thead th');
    if (heads[0]) heads[0].textContent = 'Этап';
    if (heads[1]) heads[1].textContent = 'Что происходит со звуком';
    if (heads[2]) heads[2].textContent = 'Для чего это нужно';
    const body = table.querySelector('tbody');
    if (!body) return;
    body.replaceChildren(...rows.map((row, index) => {
      const tr = document.createElement('tr');
      tr.style.setProperty('--sw-proof-delay', `${index * .36}s`);
      row.forEach((value) => { const td = document.createElement('td'); td.textContent = value; tr.appendChild(td); });
      return tr;
    }));
    const intro = document.querySelector('.swWaveProofAlert__head p');
    if (intro) intro.textContent = 'Только о звучании: какие изменения происходят с треком, зачем нужен каждый этап и что станет слышно после обработки.';
    table.dataset.swSoundOnly = '1';
  };
  patch();
  new MutationObserver(patch).observe(document.body, {childList:true,subtree:true});
})();

// SOURCE production/index.php:15537-15611
(function(){
  'use strict';
  if (window.__codexIndexResultWaveOverlayV983) return;
  window.__codexIndexResultWaveOverlayV983 = true;

  function one(selector){ return document.querySelector(selector); }

  function sourceUrl(img){
    if (!img) return '';
    return img.dataset.waveSource || img.currentSrc || img.getAttribute('src') || img.src || '';
  }

  function sync(){
    var source = one('#sourceWave');
    var result = one('#resultWave');
    if (!source || !result) return false;
    var stage = result.closest('.swWaveSaasStage');
    if (!stage) return false;
    var overlay = stage.querySelector('.swWaveCompareOverlayV983');
    if (!overlay) {
      overlay = document.createElement('img');
      overlay.className = 'swWaveCompareOverlayV983';
      overlay.alt = '';
      overlay.decoding = 'async';
      overlay.setAttribute('aria-hidden', 'true');
      result.insertAdjacentElement('afterend', overlay);
    }
    var src = sourceUrl(source);
    if (!src) return false;
    if (overlay.getAttribute('src') !== src) {
      overlay.removeAttribute('data-ready');
      overlay.onload = function(){
        overlay.setAttribute('data-ready', '1');
        stage.classList.add('has-source-overlay-v983');
      };
      overlay.onerror = function(){
        overlay.removeAttribute('data-ready');
        stage.classList.remove('has-source-overlay-v983');
      };
      overlay.src = src;
    } else if (source.classList.contains('is-ready') || source.complete) {
      overlay.setAttribute('data-ready', '1');
      stage.classList.add('has-source-overlay-v983');
    }
    return true;
  }

  function boot(){
    var attempts = 0;
    var timer = window.setInterval(function(){
      attempts += 1;
      sync();
      if (attempts >= 80) window.clearInterval(timer);
    }, 250);
    var source = one('#sourceWave');
    var result = one('#resultWave');
    [source, result].forEach(function(img){
      if (!img) return;
      img.addEventListener('load', sync, { passive:true });
      img.addEventListener('error', sync, { passive:true });
    });
    if ('MutationObserver' in window && source && result) {
      var observer = new MutationObserver(sync);
      observer.observe(source, { attributes:true, attributeFilter:['src','class','data-wave-source'] });
      observer.observe(result, { attributes:true, attributeFilter:['src','class','data-wave-source'] });
      window.setTimeout(function(){ observer.disconnect(); }, 30000);
    }
    sync();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true });
  else boot();
})();

// SOURCE production/index.php:17048-17079
(function(){
  'use strict';
  function mount(){
    var obsoleteBenefits = document.getElementById('codexResultBenefitsV1');
    if (obsoleteBenefits) obsoleteBenefits.remove();
    return;
    var modal = document.getElementById('resultModal');
    if (!modal || document.getElementById('codexResultBenefitsV1')) return;
    var benefits = document.createElement('div');
    benefits.id = 'codexResultBenefitsV1';
    benefits.className = 'codexResultBenefitsV1';
    benefits.setAttribute('aria-label', 'Преимущества обработки');
    benefits.innerHTML = [
      ['✣','Чистый и насыщенный звук','удалены шумы, улучшена динамика и детализация'],
      ['♮','Профессиональная обработка','AI-алгоритмы устранили помехи и выровняли частоты'],
      ['▥','Естественный прирост веса','+23.64% в волновой структуре без искажений'],
      ['♡','Безопасно и конфиденциально','ваши файлы удалятся с сервера сразу после обработки'],
      ['ϟ','Быстро и удобно','обработка за секунды, качество на выходе']
    ].filter(function(_, index){ return index === 0 || index === 1 || index === 3; }).map(function(item){
      return '<div class="codexResultBenefitsV1__item"><span class="codexResultBenefitsV1__icon" aria-hidden="true">' + item[0] + '</span><span class="codexResultBenefitsV1__copy"><b>' + item[1] + '</b><span>' + item[2] + '</span></span></div>';
    }).join('');
    var proof = modal.querySelector('.swWaveProofCta');
    var grid = modal.querySelector('.result-grid');
    if (proof) proof.appendChild(benefits);
    else if (grid) grid.insertAdjacentElement('afterend', benefits);
    else modal.appendChild(benefits);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();

// SOURCE production/index.php:17081-17116
(function(){
  'use strict';
  function mount(){
    var question = document.getElementById('swWaveUpgradeQuestion');
    var modal = document.getElementById('swEverywhereModal');
    var close = document.getElementById('swEverywhereClose');
    if (!question || !modal || !close || question.dataset.bound === '1') return;
    question.dataset.bound = '1';
    function open(){
      modal.hidden = false;
      modal.classList.add('is-open');
      document.body.classList.add('sw-everywhere-modal-open');
      close.focus();
    }
    function shut(){
      modal.hidden = true;
      modal.classList.remove('is-open');
      document.body.classList.remove('sw-everywhere-modal-open');
      question.focus();
    }
    question.addEventListener('click', open);
    close.addEventListener('click', shut);
    modal.addEventListener('click', function(event){ if (event.target === modal) shut(); });
    window.addEventListener('keydown', function(event){
      if (event.key === 'Escape' && !modal.hidden){
        event.preventDefault();
        event.stopImmediatePropagation();
        shut();
      }
    }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once:true });
  else mount();
})();

// SOURCE production/index.php:17250-17298
(function(){
  'use strict';
  function syncPurchaseCopy(){
    var button = document.getElementById('payFullLink');
    var eyebrow = document.getElementById('payFullEyebrow');
    var text = document.getElementById('payFullText');
    var sub = document.getElementById('payFullSub');
    var price = document.getElementById('payFullPrice');
    if (!button || !eyebrow || !text || !sub || !price) return;
    var setText = function(node, value){ if (node.textContent !== value) node.textContent = value; };
    var outputName = function(){
      var heading = document.getElementById('resultTitle');
      var value = heading ? String(heading.textContent || '').trim() : '';
      if (!value) return 'Готовый трек.wav';
      return value.replace(/\.[a-z0-9]{1,8}$/i, '') + '.wav';
    };
    var free = button.classList.contains('is-free');
    var paid = button.classList.contains('is-paid');
    if (free) {
      setText(eyebrow, '\u0411\u0415\u0417 \u041e\u041f\u041b\u0410\u0422\u042b');
      setText(text, '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e');
      setText(price, '');
      button.setAttribute('aria-label', '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e');
      return;
    }
    setText(eyebrow, '\u0412\u042b \u041c\u041e\u0416\u0415\u0422\u0415');
    if (text.textContent.replace(/\s+/g, ' ').trim() !== '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b' || text.children.length !== 2) {
      text.innerHTML = '<span>\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442</span> <span>\u0444\u0430\u0439\u043b</span>';
    }
    text.setAttribute('aria-label', '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b');
    var fileName = outputName();
    setText(sub, fileName);
    sub.setAttribute('title', fileName);
    setText(price, '90 \u20bd');
    button.setAttribute('aria-label', '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b ' + fileName + ' \u0437\u0430 90 \u0440\u0443\u0431\u043b\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u0421\u0411\u041f');
  }
  function mount(){
    var button = document.getElementById('payFullLink');
    if (!button) return;
    syncPurchaseCopy();
    new MutationObserver(syncPurchaseCopy).observe(button, {attributes:true, attributeFilter:['class','href'], childList:true, subtree:true, characterData:true});
    var resultTitle = document.getElementById('resultTitle');
    if (resultTitle) new MutationObserver(syncPurchaseCopy).observe(resultTitle, {childList:true, subtree:true, characterData:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();

// SOURCE production/index.php:17714-18062
(function(){
  'use strict';
  if (window.__swResultCarousel37V3) return;
  window.__swResultCarousel37V3 = true;
  window.__swResultCarousel37PastPresentFutureV1 = true;

  var operations = [
    ['DC/Subsonic Cleanup','Убираем неслышимый инфраниз','Удаляем постоянное смещение сигнала и слишком низкие колебания, которые почти не слышны, но занимают запас громкости.','Чтобы бас и вся следующая обработка не упирались в невидимую перегрузку.','Бас становится собраннее, а трек можно сделать увереннее по громкости без гула и хруста.'],
    ['Glitch Burst Guard','Ловим цифровые всплески','Находим очень короткие сбои и резкие цифровые выбросы до основной обработки.','Чтобы случайный дефект не усилился вместе с музыкой на следующих этапах.','Слушателя не отвлекают внезапные щелчки и короткий цифровой треск.'],
    ['Targeted Restoration Route','Выбираем только нужный ремонт','По анализу файла решаем, какие способы восстановления действительно нужны именно этому треку.','Чтобы не прогонять хороший звук через лишние фильтры и не стереть полезные детали.','Трек звучит чище, но сохраняет свой характер и не становится искусственно приглушённым.'],
    ['Adaptive Declip','Восстанавливаем срезанные пики','Пробуем вернуть естественную форму местам, где слишком громкий сигнал был обрезан.','Чтобы уменьшить жёсткий цифровой хруст на ударах, голосе и других громких моментах.','Громкие фрагменты воспринимаются мягче и естественнее, без ощущения сломанной записи.'],
    ['Heavy Peak Repair','Ремонтируем тяжёлые перегрузы','Отдельно проверяем самые повреждённые пики и аккуратно восстанавливаем их повторным проходом.','Чтобы сложные перегрузы не остались после обычного восстановления.','Самые громкие места звучат чище и меньше утомляют на высокой громкости.'],
    ['De-hum','Убираем сетевой гул','Находим ровный низкий фон от электросети и его повторяющиеся гармоники.','Чтобы технический гул не маскировал музыку в паузах и тихих фрагментах.','В тишине и вступлениях слышно больше полезного звука и меньше монотонного фона.'],
    ['Broadband Denoise','Снижаем общий шум','По тихим участкам строим профиль фонового шума и ослабляем его без грубого среза частот.','Чтобы очистить запись и при этом сохранить дыхание, пространство и окончания нот.','Тихие детали становятся понятнее, а фон меньше шипит в наушниках.'],
    ['De-hiss','Убираем высокое шипение','Отдельно ослабляем постоянный шум в верхней части частотного диапазона.','Чтобы вернуть чистоту верха, не делая запись глухой.','Наушники меньше подчёркивают шипение, и долгое прослушивание меньше утомляет.'],
    ['De-click','Удаляем щелчки','Находим одиночные короткие импульсы и отличаем их от настоящих атак инструментов.','Чтобы убрать технические щелчки, не повредив барабаны, струны и согласные звуки.','Музыка идёт ровно, без случайных уколов и отвлекающих тресков.'],
    ['Stereo Glitch Guard','Стабилизируем сбои в стерео','Проверяем, не возник ли короткий дефект только в левом или правом канале.','Чтобы единичный сбой не заставлял звук резко прыгать в сторону.','Центр остаётся устойчивым, а панорама не дёргается в наушниках.'],
    ['MP3 Artifact Smoothing','Смягчаем следы MP3','Ослабляем металлическую зернистость и размазанные атаки, которые появляются после сильного MP3-сжатия.','Чтобы кодек меньше выдавал себя, но музыка не потеряла чёткость.','Тарелки, голос и атаки звучат спокойнее и менее пластмассово.'],
    ['MP3 Repair Pro','Глубже восстанавливаем MP3','Ищем сильно повреждённые места MP3 и восстанавливаем их более осторожным отдельным проходом.','Чтобы обычного сглаживания хватало не только на лёгкие, но и на заметные дефекты.','Плотные фрагменты звучат связнее, с меньшим количеством цифровой крошки.'],
    ['Spectral Repair Pro','Заполняем локальные провалы','Находим короткие повреждения в отдельных частотах и восстанавливаем их по соседнему звуку.','Чтобы маленькая спектральная дыра не превращалась в заметный провал или всплеск.','Тембр воспринимается ровнее, без странных кратких изменений окраски.'],
    ['Spectral Harmonic Repair','Возвращаем связь гармоник','Восстанавливаем естественные отношения между основной нотой и её верхними составляющими.','Чтобы сжатый или узкополосный источник не звучал пустым и разорванным.','Инструменты и голос воспринимаются полнее и естественнее.'],
    ['Downward Expander','Делаем паузы чище','Мягко уменьшаем фон там, где полезный сигнал становится тихим, не закрывая звук резкими воротами.','Чтобы очистить промежутки между фразами и сохранить естественные хвосты.','Паузы спокойнее, но слова, реверберация и окончания нот не обрываются.'],
    ['Voice Finish','Доводим голос, когда он есть','Если материал действительно голосовой, применяем мягкую финальную настройку разборчивости и ровности.','Чтобы вокал или речь лучше читались, а музыкальный трек не получил ненужную речевую обработку.','Слова понятнее, голос ближе, но не становится резким или неестественным.'],
    ['Internal Gain Staging','Создаём запас громкости','Выставляем безопасный внутренний уровень перед эквалайзером, компрессией и другими сильными операциями.','Чтобы каждый следующий модуль работал в удобном диапазоне и не создавал перегруз.','Трек остаётся плотным и чистым, без скрытого хруста от слишком горячего сигнала.'],
    ['Low-End Mono Safety','Укрепляем низ в моно','Собираем самые низкие частоты ближе к центру, не сужая весь остальной микс.','Чтобы бас не исчезал из-за фазовых конфликтов на колонках и телефонах.','Низ ощущается устойчивее и одинаковее на разных устройствах.'],
    ['Stereo Balance / Width / Phase','Выравниваем стереопанораму','Проверяем громкость каналов, ширину и фазу, затем исправляем только заметный перекос.','Чтобы широкое звучание не разваливалось при воспроизведении в моно.','Центр точнее, края понятнее, а музыка не тянет слушателя в одну сторону.'],
    ['Corrective EQ','Исправляем тональный баланс','Убираем лишнюю мутность и резкость, а недостающие полезные частоты добавляем по измерениям трека.','Чтобы инструменты не перекрывали друг друга и не приходилось просто делать всё ярче.','Музыка читается легче: бас не гудит, середина яснее, верх меньше режет слух.'],
    ['M/S Dynamic EQ','Разделяем центр и края','Обрабатываем центральную и боковую часть стерео отдельно только в моменты появления проблемы.','Чтобы очистить середину, не потеряв полезную ширину и атмосферу по краям.','Вокал и ударные стоят увереннее в центре, а пространство остаётся широким.'],
    ['Dynamic Resonance Suppression','Убираем звенящие резонансы','Ослабляем неприятную частоту только тогда, когда она действительно выпирает.','Чтобы не вырезать эту область из всего трека и не обеднить нормальные моменты.','Резкие ноты меньше звенят и утомляют, а общий тембр остаётся живым.'],
    ['Multiband Dynamics','Выравниваем диапазоны отдельно','Управляем перепадами баса, середины и верха раздельно, потому что они двигаются по-разному.','Чтобы один громкий басовый удар не прижимал весь трек целиком.','Баланс стабильнее, детали не пропадают, а музыка продолжает дышать.'],
    ['Transient Recovery','Возвращаем атаку','После очистки восстанавливаем начало ударов и коротких музыкальных событий.','Чтобы полезная энергия не стала слишком мягкой после ремонта и шумоподавления.','Барабаны, струны и ритм снова звучат чётко и энергично.'],
    ['Stereo Image Mastering','Финализируем ширину сцены','Последним проходом выстраиваем центр, ширину и устойчивость стереополя.','Чтобы трек был просторным, но не терял основу и совместимость с простой акустикой.','В наушниках появляется объём, а на колонках голос и бас остаются на месте.'],
    ['Seven-Way A/B Render','Сравниваем семь вариантов','Создаём несколько внутренних версий с разной силой обработки и оцениваем их по одним правилам.','Чтобы не принимать первый результат за лучший и выбрать наиболее удачный баланс.','Слушатель получает версию, где чистота и плотность выросли без лишней переделки музыки.'],
    ['Adaptive De-ess','Смягчаем свистящие звуки','Находим резкие «с» и похожие звуки и ослабляем их только в нужные моменты.','Чтобы верх не колол слух, но речь и вокал сохранили ясность.','Слова остаются разборчивыми, а громкое прослушивание становится комфортнее.'],
    ['Glue Compression','Собираем микс вместе','Мягко уменьшаем общие скачки, чтобы разные инструменты ощущались частью одного трека.','Чтобы добавить связность без сильного сжатия и слышимого качания громкости.','Музыка звучит цельнее и увереннее, сохраняя естественные акценты.'],
    ['Parallel Compression','Добавляем плотность параллельно','Смешиваем чистый сигнал с отдельно сжатой копией в безопасной пропорции.','Чтобы поднять тихие детали и вес, не уничтожив атаки исходной дорожки.','Трек кажется мощнее и ближе, но барабаны и динамика остаются живыми.'],
    ['Post-Dynamics Sibilance Guard','Повторно проверяем резкость','После компрессии ещё раз ищем свистящие и колкие участки, которые могли стать заметнее.','Чтобы усиление тихих деталей не вернуло неприятную резкость.','Вокал и верх остаются ровными даже после уплотнения микса.'],
    ['Loudness Normalization','Настраиваем итоговую громкость','Приводим среднюю воспринимаемую громкость к целевому уровню, сохраняя допустимую динамику.','Чтобы файл не оказался неожиданно тихим или чрезмерно зажатым рядом с другими треками.','Громкость воспринимается уверенно и предсказуемо на разных устройствах.'],
    ['True-Peak Limiter','Защищаем истинные пики','С передискретизацией ловим пики, которые могут появиться уже при воспроизведении между цифровыми отсчётами.','Чтобы файл не начал искажаться после конвертации или на обычном проигрывателе.','Результат можно слушать громко без внезапного цифрового хруста.'],
    ['Micro-Clip Safety','Убираем единичный микроклиппинг','Ищем редкие отдельные перегрузы, которые могли остаться после финального ограничения.','Чтобы один незаметный по графику дефект не испортил чистый мастер.','В самых горячих местах не появляются одиночные сухие щелчки.'],
    ['Micro-Event Guard','Ловим микрособытия','Проверяем сверхкороткие цифровые иглы, щелчки и выбросы по всей готовой дорожке.','Чтобы мелкая техническая ошибка не прошла из-за своей короткой длительности.','Прослушивание остаётся непрерывным, без случайных резких уколов.'],
    ['Second-Pass Safety QA','Проверяем результат второй раз','Снова сравниваем обработанную версию с исходником и отмечаем места, где изменение могло навредить.','Чтобы автоматически отменить спорное улучшение, если метрики и звук стали хуже.','Слушатель получает более чистый трек без новых проблем, созданных самой обработкой.'],
    ['Iterative Mastering Rollback','Оставляем только удачную итерацию','Дополнительный мастеринг запускается только при пользе, а неудачный вариант заменяется предыдущим.','Чтобы не продолжать обработку ради количества и не пережать уже хороший результат.','Звук получает нужную полировку, но не теряет естественность из-за лишних проходов.'],
    ['Final Do-No-Harm Gate','Не выпускаем ухудшенный вариант','Финальный шлюз проверяет ключевые показатели и запрещает выдачу версии, которая хуже исходника.','Чтобы вся цепочка завершалась реальной пользой, а не просто изменением файла.','Слушатель получает безопасный, цельный и естественный результат без неприятных сюрпризов.']
  ];

  function resultReplace(value, pairs){
    return pairs.reduce(function(result, pair){ return result.split(pair[0]).join(pair[1]); }, String(value || ''));
  }
  var resultPastPairs = [
    ['Пробуем вернуть','Вернули'],['По анализу файла решаем','По анализу файла решили'],['Последним проходом выстраиваем','Последним проходом выстроили'],
    ['После очистки восстанавливаем','После очистки восстановили'],['После компрессии ещё раз ищем','После компрессии ещё раз нашли'],['Снова сравниваем','Снова сравнили'],
    ['Если материал действительно голосовой, применяем','Для голосового материала применили'],['Финальный шлюз проверяет','Финальный шлюз проверил'],['Дополнительный мастеринг запускается','Дополнительный мастеринг запустили'],
    ['Стабилизируем сбои в стерео','Исправили сбои в стерео'],['Финализируем ширину сцены','Завершили настройку ширины сцены'],['Управляем перепадами','Выровняли перепады'],
    ['Убираем','Убрали'],['Удаляем','Удалили'],['Ловим','Поймали'],['Находим','Нашли'],['Выбираем','Выбрали'],['решаем','решили'],['Восстанавливаем','Восстановили'],
    ['Ремонтируем','Отремонтировали'],['проверяем','проверили'],['Проверяем','Проверили'],['строим','построили'],['Строим','Построили'],['ослабляем','ослабили'],
    ['Ослабляем','Ослабили'],['отличаем','отличили'],['Стабилизируем','Стабилизировали'],['Смягчаем','Смягчили'],['Ищем','Нашли'],['Заполняем','Заполнили'],
    ['Возвращаем','Вернули'],['Делаем','Сделали'],['уменьшаем','уменьшили'],['Уменьшаем','Уменьшили'],['Доводим','Довели'],['применяем','применили'],
    ['Создаём','Создали'],['Выставляем','Выставили'],['Укрепляем','Укрепили'],['Собираем','Собрали'],['Выравниваем','Выровняли'],['исправляем','исправили'],
    ['Исправляем','Исправили'],['добавляем','добавили'],['Добавляем','Добавили'],['Разделяем','Разделили'],['Обрабатываем','Обработали'],['Финализируем','Финализировали'],
    ['Сравниваем','Сравнили'],['оцениваем','оценили'],['Настраиваем','Настроили'],['Приводим','Привели'],['Защищаем','Защитили'],['Повторно проверяем','Повторно проверили'],
    ['Оставляем','Оставили'],['Не выпускаем','Не выпустили'],['запрещает','не допустил'],['заменяется','заменили'],['становится','стал']
  ];
  var resultFutureEffectPairs = [
    ['можно сделать','можно будет сделать'],['можно слушать','можно будет слушать'],['Слушателя не отвлекают','Слушателя не будут отвлекать'],
    ['Слова понятнее, голос ближе','Слова будут понятнее, голос станет ближе'],['Центр точнее, края понятнее','Центр будет точнее, края станут понятнее'],['Баланс стабильнее','Баланс станет стабильнее'],
    ['Паузы спокойнее','Паузы станут спокойнее'],['фон меньше шипит','фон будет меньше шипеть'],['Наушники меньше подчёркивают','Наушники будут меньше подчёркивать'],
    ['долгое прослушивание меньше утомляет','долгое прослушивание будет меньше утомлять'],['середина яснее','середина станет яснее'],['верх меньше режет','верх будет меньше резать'],
    ['Резкие ноты меньше звенят и утомляют','Резкие ноты будут меньше звенеть и меньше будут утомлять'],['Резкие ноты меньше звенят','Резкие ноты будут меньше звенеть'],
    ['чистота и плотность выросли','чистота и плотность вырастут'],['не теряет естественность','не потеряет естественность'],['становятся','станут'],['становится','станет'],
    ['не становится','не станет'],['звучат','будут звучать'],['звучит','будет звучать'],['сохраняет','сохранит'],['воспринимаются','будут восприниматься'],
    ['воспринимается','будет восприниматься'],['слышно','будет слышно'],['подчёркивают','будут подчёркивать'],['утомляют','будут утомлять'],['утомляет','будет утомлять'],
    ['идёт','будет идти'],['остаётся','останется'],['остаются','останутся'],['дёргается','будет дёргаться'],['получает','получит'],['читается','будет читаться'],
    ['стоят','будут стоять'],['звенят','будут звенеть'],['продолжает','продолжит'],['появляется','появится'],['появляются','появятся'],['ощущается','будет ощущаться'],
    ['тянет','будет тянуть'],['обрываются','будут обрываться'],['кажется','будет казаться'],['гудит','будет гудеть'],['режет','будет резать'],['шипит','будет шипеть'],
    ['пропадают','пропадут']
  ];
  function resultTense(item){
    return [item[0],resultReplace(item[1],resultPastPairs),resultReplace(item[2],resultPastPairs),item[3],resultReplace(item[4],resultFutureEffectPairs)];
  }
  var resultFutureCopy = [
    ['Уберём неслышимый инфраниз','Удалим постоянное смещение сигнала и слишком низкие колебания, которые почти не слышны, но занимают запас громкости.'],
    ['Поймаем цифровые всплески','Найдём очень короткие сбои и резкие цифровые выбросы до основной обработки.'],
    ['Выберем только нужный ремонт','По анализу файла решим, какие способы восстановления действительно нужны именно этому треку.'],
    ['Восстановим срезанные пики','Попробуем вернуть естественную форму местам, где слишком громкий сигнал был обрезан.'],
    ['Отремонтируем тяжёлые перегрузы','Отдельно проверим самые повреждённые пики и аккуратно восстановим их повторным проходом.'],
    ['Уберём сетевой гул','Найдём ровный низкий фон от электросети и его повторяющиеся гармоники.'],
    ['Снизим общий шум','По тихим участкам построим профиль фонового шума и ослабим его без грубого среза частот.'],
    ['Уберём высокое шипение','Отдельно ослабим постоянный шум в верхней части частотного диапазона.'],
    ['Удалим щелчки','Найдём одиночные короткие импульсы и отличим их от настоящих атак инструментов.'],
    ['Стабилизируем сбои в стерео','Проверим, не возник ли короткий дефект только в левом или правом канале.'],
    ['Смягчим следы MP3','Ослабим металлическую зернистость и размазанные атаки, которые появляются после сильного MP3-сжатия.'],
    ['Глубже восстановим MP3','Найдём сильно повреждённые места MP3 и восстановим их более осторожным отдельным проходом.'],
    ['Заполним локальные провалы','Найдём короткие повреждения в отдельных частотах и восстановим их по соседнему звуку.'],
    ['Вернём связь гармоник','Восстановим естественные отношения между основной нотой и её верхними составляющими.'],
    ['Сделаем паузы чище','Мягко уменьшим фон там, где полезный сигнал становится тихим, не закрывая звук резкими воротами.'],
    ['Доведём голос, когда он есть','Если материал действительно голосовой, применим мягкую финальную настройку разборчивости и ровности.'],
    ['Создадим запас громкости','Выставим безопасный внутренний уровень перед эквалайзером, компрессией и другими сильными операциями.'],
    ['Укрепим низ в моно','Соберём самые низкие частоты ближе к центру, не сужая весь остальной микс.'],
    ['Выровняем стереопанораму','Проверим громкость каналов, ширину и фазу, затем исправим только заметный перекос.'],
    ['Исправим тональный баланс','Уберём лишнюю мутность и резкость, а недостающие полезные частоты добавим по измерениям трека.'],
    ['Разделим центр и края','Обработаем центральную и боковую часть стерео отдельно только в моменты появления проблемы.'],
    ['Уберём звенящие резонансы','Ослабим неприятную частоту только тогда, когда она действительно выпирает.'],
    ['Выровняем диапазоны отдельно','Выровняем перепады баса, середины и верха раздельно, потому что они двигаются по-разному.'],
    ['Вернём атаку','После очистки восстановим начало ударов и коротких музыкальных событий.'],
    ['Завершим настройку ширины сцены','Последним проходом выстроим центр, ширину и устойчивость стереополя.'],
    ['Сравним семь вариантов','Создадим несколько внутренних версий с разной силой обработки и оценим их по одним правилам.'],
    ['Смягчим свистящие звуки','Найдём резкие «с» и похожие звуки и ослабим их только в нужные моменты.'],
    ['Соберём микс вместе','Мягко уменьшим общие скачки, чтобы разные инструменты ощущались частью одного трека.'],
    ['Добавим плотность параллельно','Смешаем чистый сигнал с отдельно сжатой копией в безопасной пропорции.'],
    ['Повторно проверим резкость','После компрессии ещё раз найдём свистящие и колкие участки, которые могли стать заметнее.'],
    ['Настроим итоговую громкость','Приведём среднюю воспринимаемую громкость к целевому уровню, сохраняя допустимую динамику.'],
    ['Защитим истинные пики','С передискретизацией поймаем пики, которые могут появиться уже при воспроизведении между цифровыми отсчётами.'],
    ['Уберём единичный микроклиппинг','Найдём редкие отдельные перегрузы, которые могли остаться после финального ограничения.'],
    ['Поймаем микрособытия','Проверим сверхкороткие цифровые иглы, щелчки и выбросы по всей готовой дорожке.'],
    ['Проверим результат второй раз','Снова сравним обработанную версию с исходником и отметим места, где изменение могло навредить.'],
    ['Оставим только удачную итерацию','Дополнительный мастеринг запустим только при пользе, а неудачный вариант заменим предыдущим.'],
    ['Не выпустим ухудшенный вариант','Финальный шлюз проверит ключевые показатели и не допустит выдачу версии, которая хуже исходника.']
  ];
  function futureTense(item, operationIndex){
    var future = resultFutureCopy[operationIndex] || [item[1], item[2]];
    return [item[0],future[0],future[1],item[3],resultReplace(item[4],resultFutureEffectPairs)];
  }
  /* codex-index-processing-canonical-37-v1: processing reads this exact rendered sequence. */
  window.__swResultOperations37 = operations.map(function(item){ return resultTense(item).slice(0, 5); });

  function twoDigits(value){ return value < 10 ? '0' + value : String(value); }

  function mount(){
    var alert = document.getElementById('swWaveProofAlert');
    if (!alert || alert.dataset.swCarousel37Ready === '1') return;
    var body = alert.querySelector('.swWaveProofAlert__body');
    var oldContent = body && body.querySelector('.swWaveProofSheet,.swWaveProofAlert__steps');
    if (!body || !oldContent) return;

    var heading = alert.querySelector('#swWaveProofTitle');
    var intro = alert.querySelector('.swWaveProofAlert__head p');
    var eyebrow = alert.querySelector('.swWaveProofAlert__eyebrow');
    if (heading) heading.textContent = 'Что было сделано';
    if (intro) intro.textContent = '37 реальных операций обработки простым языком.';
    if (eyebrow) eyebrow.textContent = 'Полная цепочка SUNO WAVE';

    var carousel = document.createElement('div');
    carousel.className = 'swResultCarousel37';
    carousel.dataset.direction = 'next';
    carousel.setAttribute('role', 'group');
    carousel.setAttribute('aria-roledescription', 'карусель');
    carousel.setAttribute('aria-label', '37 операций обработки');
    carousel.innerHTML =
      '<div class="swResultCarousel37__viewport">' +
        '<article class="swResultCarousel37__slide" aria-live="polite" tabindex="-1">' +
          '<div class="swResultCarousel37__meta"><span class="swResultCarousel37__number"></span><span class="swResultCarousel37__tech"></span></div>' +
          '<h3 class="swResultCarousel37__title"></h3>' +
          '<p class="swResultCarousel37__action"></p>' +
          '<div class="swResultCarousel37__telemetry" aria-label="Фактические параметры выполнения операции">' +
            '<span><small>Время</small><b data-sw-result-duration>Не записано</b></span>' +
            '<span><small>CPU-потоки</small><b data-sw-result-cpu>Не записано</b></span>' +
            '<span><small data-sw-result-accelerator-label>GPU</small><b data-sw-result-gpu>Не записано</b></span>' +
          '</div>' +
          '<div class="swResultCarousel37__details">' +
            '<section class="swResultCarousel37__detail"><span class="swResultCarousel37__label">Зачем это нужно</span><p data-sw-result-carousel-why></p></section>' +
            '<section class="swResultCarousel37__detail"><span class="swResultCarousel37__label">Что услышит слушатель</span><p data-sw-result-carousel-effect></p></section>' +
          '</div>' +
        '</article>' +
      '</div>' +
      '<div class="swResultCarousel37__controls">' +
        '<button class="swResultCarousel37__arrow" type="button" data-sw-result-carousel-prev aria-label="Предыдущая операция" title="Предыдущая операция"></button>' +
        '<div class="swResultCarousel37__progress"><div class="swResultCarousel37__track" aria-hidden="true"><div class="swResultCarousel37__fill"></div></div><span class="swResultCarousel37__count" aria-live="polite"></span></div>' +
        '<button class="swResultCarousel37__arrow" type="button" data-sw-result-carousel-next aria-label="Следующая операция" title="Следующая операция"></button>' +
      '</div>';
    oldContent.replaceWith(carousel);
    alert.dataset.swCarousel37Ready = '1';
    alert.dataset.swTableReady = '1';

    var viewport = carousel.querySelector('.swResultCarousel37__viewport');
    var slide = carousel.querySelector('.swResultCarousel37__slide');
    var number = carousel.querySelector('.swResultCarousel37__number');
    var tech = carousel.querySelector('.swResultCarousel37__tech');
    var title = carousel.querySelector('.swResultCarousel37__title');
    var action = carousel.querySelector('.swResultCarousel37__action');
    var duration = carousel.querySelector('[data-sw-result-duration]');
    var cpu = carousel.querySelector('[data-sw-result-cpu]');
    var gpu = carousel.querySelector('[data-sw-result-gpu]');
    var acceleratorLabel = carousel.querySelector('[data-sw-result-accelerator-label]');
    var why = carousel.querySelector('[data-sw-result-carousel-why]');
    var effect = carousel.querySelector('[data-sw-result-carousel-effect]');
    var fill = carousel.querySelector('.swResultCarousel37__fill');
    var count = carousel.querySelector('.swResultCarousel37__count');
    var previous = carousel.querySelector('[data-sw-result-carousel-prev]');
    var next = carousel.querySelector('[data-sw-result-carousel-next]');
    var index = 0;
    var pointerStart = null;
    var transitioning = false;
    var cueTimer = 0;
    var telemetry = [];
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resultJobId(){
      var values = [];
      try { values.push(new URLSearchParams(window.location.search || '').get('job') || ''); } catch (_) {}
      try {
        var cookieMatch = document.cookie.match(/(?:^|;\s*)(?:sunowave_last_job|sw_last_job)=([^;]+)/);
        values.push(cookieMatch ? decodeURIComponent(cookieMatch[1] || '') : '');
      } catch (_) {}
      ['sw_saved_result_job','sunowave_last_job','sunowave:last_job','sw_minusa_last_job'].forEach(function(key){
        try { values.push(window.localStorage && window.localStorage.getItem(key) || ''); } catch (_) {}
        try { values.push(window.sessionStorage && window.sessionStorage.getItem(key) || ''); } catch (_) {}
      });
      return values.map(function(value){ return String(value || '').trim().toLowerCase(); }).find(function(value){ return /^[a-f0-9]{32}$/.test(value); }) || '';
    }

    function loadTelemetry(){
      var job = resultJobId();
      if (!job) return;
      fetch('/status_best.php?job=' + encodeURIComponent(job) + '&telemetry=1&_=' + Date.now(), {
        credentials:'same-origin',
        cache:'no-store',
        headers:{Accept:'application/json','X-Requested-With':'XMLHttpRequest'}
      }).then(function(response){ return response.ok ? response.json() : null; }).then(function(data){
        if (!data || !Array.isArray(data.operation_telemetry)) return;
        telemetry = data.operation_telemetry;
        render(carousel.dataset.direction || 'next');
      }).catch(function(){});
    }

    function telemetryFor(operationIndex){
      return telemetry.find(function(item){ return Number(item && item.index) === operationIndex; }) || null;
    }

    function renderTelemetry(operationIndex){
      var item = telemetryFor(operationIndex);
      var seconds = item && item.duration_seconds !== null && Number.isFinite(Number(item.duration_seconds)) ? Number(item.duration_seconds) : null;
      var roundedSeconds = seconds === null ? null : Math.round(Math.max(0, seconds) * 100) / 100;
      var threads = item && Number(item.cpu_threads) > 0 ? Math.round(Number(item.cpu_threads)) : 0;
      var cpuBaseGhz = item && Number(item.cpu_base_ghz) > 0 ? Number(item.cpu_base_ghz) : 2.4;
      var cpuTotalGhz = item && Number(item.cpu_total_ghz) > 0 ? Number(item.cpu_total_ghz) : (threads > 0 ? threads * cpuBaseGhz : 0);
      var gpuName = item ? String(item.gpu_name || '').trim() : '';
      var formatGhz = function(value){ return Number(value).toLocaleString('ru-RU', {minimumFractionDigits:2,maximumFractionDigits:2}); };
      if (duration) duration.textContent = roundedSeconds === null
        ? 'Не записано'
        : (roundedSeconds === 0 ? 'Не требовалось' : roundedSeconds.toFixed(2) + ' с');
      if (cpu) cpu.textContent = threads > 0 ? threads + ' потоков' : 'Не записано';
      if (gpu) {
        if (!item || item.gpu_used === null || typeof item.gpu_used === 'undefined') {
          if (acceleratorLabel) acceleratorLabel.textContent = 'Ускорение';
          gpu.textContent = 'Не записано';
        } else if (item.gpu_used) {
          if (acceleratorLabel) acceleratorLabel.textContent = 'GPU';
          gpu.textContent = gpuName || 'GPU задействована';
        } else {
          if (acceleratorLabel) acceleratorLabel.textContent = 'Суммарная частота CPU';
          gpu.textContent = cpuTotalGhz > 0
            ? formatGhz(cpuTotalGhz) + ' ГГц · ' + threads + ' × ' + formatGhz(cpuBaseGhz)
            : 'Не записано';
        }
      }
    }

    function proofTense(){
      return alert.dataset.swProofTense === 'future' ? 'future' : 'past';
    }
    function render(direction){
      var tense = proofTense();
      var item = tense === 'future' ? futureTense(operations[index], index) : resultTense(operations[index]);
      if (heading) heading.textContent = tense === 'future' ? 'Что будет сделано' : 'Что было сделано';
      if (intro) intro.textContent = tense === 'future'
        ? 'План BEST: 37 операций, их техническая задача и ожидаемый результат для слушателя.'
        : 'Отчёт BEST: 37 выполненных операций, фактические параметры и слышимый результат.';
      if (eyebrow) eyebrow.textContent = tense === 'future'
        ? 'План обработки BEST · 37 операций'
        : 'Отчёт обработки BEST · 37 операций';
      carousel.dataset.direction = direction || 'next';
      number.textContent = 'Операция ' + twoDigits(index + 1);
      tech.textContent = item[0];
      title.textContent = item[1];
      action.textContent = item[2];
      why.textContent = item[3];
      effect.textContent = item[4];
      if (tense === 'future') {
        if (duration) duration.textContent = 'Запишем по факту';
        if (cpu) cpu.textContent = 'Покажем по факту';
        if (acceleratorLabel) acceleratorLabel.textContent = 'Ускорение';
        if (gpu) gpu.textContent = 'Покажем по факту';
      } else {
        renderTelemetry(index + 1);
      }
      count.textContent = twoDigits(index + 1) + ' / ' + operations.length;
      fill.style.width = (((index + 1) / operations.length) * 100).toFixed(4) + '%';
      slide.setAttribute('aria-label', 'Операция ' + (index + 1) + ' из ' + operations.length + ': ' + item[1]);
      slide.classList.remove('is-entering','is-leaving');
      void slide.offsetWidth;
      slide.classList.add('is-entering');
      viewport.scrollTop = 0;
    }
    function move(delta){
      if (transitioning) return;
      transitioning = true;
      window.clearTimeout(cueTimer);
      carousel.classList.remove('is-cue-next');
      carousel.dataset.direction = delta < 0 ? 'prev' : 'next';
      slide.classList.remove('is-entering');
      slide.classList.add('is-leaving');
      window.setTimeout(function(){
        index = (index + delta + operations.length) % operations.length;
        render(delta < 0 ? 'prev' : 'next');
        transitioning = false;
      }, reduceMotion ? 0 : 180);
    }
    function cueNext(){
      if (index !== 0 || carousel.dataset.cueShown === '1' || !alert.classList.contains('is-open')) return;
      carousel.dataset.cueShown = '1';
      carousel.classList.add('is-cue-next');
      cueTimer = window.setTimeout(function(){ carousel.classList.remove('is-cue-next'); }, 3400);
    }

    previous.addEventListener('click', function(){ move(-1); });
    next.addEventListener('click', function(){ move(1); });
    alert.addEventListener('sw:proof-tense', function(){ render(carousel.dataset.direction || 'next'); });
    alert.addEventListener('keydown', function(event){
      if (!alert.classList.contains('is-open')) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      else if (event.key === 'Home') { event.preventDefault(); index = 0; render('prev'); }
      else if (event.key === 'End') { event.preventDefault(); index = operations.length - 1; render('next'); }
    });
    viewport.addEventListener('pointerdown', function(event){
      if (event.pointerType !== 'touch') return;
      pointerStart = {x:event.clientX,y:event.clientY};
    }, {passive:true});
    viewport.addEventListener('pointerup', function(event){
      if (!pointerStart || event.pointerType !== 'touch') return;
      var dx = event.clientX - pointerStart.x;
      var dy = event.clientY - pointerStart.y;
      pointerStart = null;
      if (Math.abs(dx) < 44 || Math.abs(dx) <= Math.abs(dy)) return;
      move(dx < 0 ? 1 : -1);
    }, {passive:true});
    viewport.addEventListener('pointercancel', function(){ pointerStart = null; }, {passive:true});
    render('next');
    loadTelemetry();
    cueNext();
    new MutationObserver(cueNext).observe(alert, {attributes:true,attributeFilter:['class']});
  }

  mount();
  new MutationObserver(mount).observe(document.body, {childList:true,subtree:true});
})();

// SOURCE production/index.php:18346-18479
(function(){
  'use strict';
  if(window.__swImpactGrowthVideoDialogV2)return;
  window.__swImpactGrowthVideoDialogV2=true;
  var restoreFocus=null;
  var inertLayer=null;
  var inertLayerAriaHidden=null;

  function ensureModal(){
    var modal=document.getElementById('swImpactGrowthModal');
    if(modal){
      if(modal.parentElement!==document.body)document.body.appendChild(modal);
      return modal;
    }
    modal=document.createElement('div');
    modal.className='swImpactGrowthModal';
    modal.id='swImpactGrowthModal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-labelledby','swImpactGrowthTitle');
    modal.setAttribute('aria-describedby','swImpactGrowthCopy');
    modal.hidden=true;
    modal.innerHTML=
      '<article class="swImpactGrowthModal__panel">'+
        '<button class="swImpactGrowthModal__close" id="swImpactGrowthClose" type="button" aria-label="&#1047;&#1072;&#1082;&#1088;&#1099;&#1090;&#1100;">&times;</button>'+
        '<span class="swImpactGrowthModal__eyebrow">&#1052;&#1077;&#1090;&#1086;&#1076;&#1080;&#1082;&#1072; SUNO WAVE</span>'+
        '<h2 id="swImpactGrowthTitle">&#1050;&#1072;&#1082; &#1080;&#1079;&#1084;&#1077;&#1088;&#1103;&#1077;&#1084; &#1087;&#1088;&#1080;&#1088;&#1086;&#1089;&#1090;</h2>'+
        '<p id="swImpactGrowthCopy">&#1053;&#1072; &#1096;&#1080;&#1088;&#1086;&#1082;&#1091;&#1102; &#1074;&#1086;&#1083;&#1085;&#1091; &#1088;&#1077;&#1079;&#1091;&#1083;&#1100;&#1090;&#1072;&#1090;&#1072; &#1085;&#1072;&#1082;&#1083;&#1072;&#1076;&#1099;&#1074;&#1072;&#1077;&#1084; &#1042;&#1072;&#1096;&#1091; &#1080;&#1089;&#1093;&#1086;&#1076;&#1085;&#1091;&#1102; waveform. &#1055;&#1080;&#1082;&#1089;&#1077;&#1083;&#1100; &#1079;&#1072; &#1087;&#1080;&#1082;&#1089;&#1077;&#1083;&#1077;&#1084; &#1080;&#1079;&#1084;&#1077;&#1088;&#1103;&#1077;&#1084; &#1087;&#1083;&#1086;&#1097;&#1072;&#1076;&#1100; &#1085;&#1086;&#1074;&#1086;&#1075;&#1086; &#1082;&#1086;&#1085;&#1090;&#1091;&#1088;&#1072; &#1079;&#1072; &#1077;&#1105; &#1087;&#1088;&#1077;&#1076;&#1077;&#1083;&#1072;&#1084;&#1080; &mdash; &#1090;&#1072;&#1082; &#1087;&#1086;&#1083;&#1091;&#1095;&#1072;&#1077;&#1084; &#1085;&#1072;&#1090;&#1091;&#1088;&#1072;&#1083;&#1100;&#1085;&#1099;&#1081; &#1087;&#1088;&#1080;&#1088;&#1086;&#1089;&#1090; &#1074;&#1086;&#1083;&#1085;&#1086;&#1074;&#1086;&#1081; &#1089;&#1090;&#1088;&#1091;&#1082;&#1090;&#1091;&#1088;&#1099; &#1074; &#1087;&#1088;&#1086;&#1094;&#1077;&#1085;&#1090;&#1072;&#1093;.</p>'+
        '<div class="swImpactGrowthVideo">'+
          '<video class="swImpactGrowthVideo__media" autoplay muted loop playsinline preload="auto" disablepictureinpicture disableremoteplayback aria-label="&#1042;&#1080;&#1076;&#1077;&#1086; &#1086; &#1088;&#1072;&#1089;&#1095;&#1105;&#1090;&#1077; &#1087;&#1088;&#1080;&#1088;&#1086;&#1089;&#1090;&#1072; &#1074;&#1086;&#1083;&#1085;&#1086;&#1074;&#1086;&#1081; &#1089;&#1090;&#1088;&#1091;&#1082;&#1090;&#1091;&#1088;&#1099;">'+
            '<source src="/assets/impact-growth-waveform.mp4?v=20260809_1" type="video/mp4">'+
          '</video>'+
        '</div>'+
      '</article>';
    document.body.appendChild(modal);
    return modal;
  }

  function decorateProofTrigger(){
    var value=document.querySelector('#swWaveProofAlert [data-proof-growth]');
    var trigger=value&&value.parentElement;
    if(!trigger)return;
    trigger.setAttribute('data-impact-growth-open','1');
    trigger.setAttribute('role','button');
    trigger.setAttribute('tabindex','0');
    trigger.setAttribute('aria-haspopup','dialog');
    trigger.setAttribute('aria-controls','swImpactGrowthModal');
    trigger.setAttribute('aria-label','\u0423\u0437\u043d\u0430\u0442\u044c, \u043a\u0430\u043a \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0440\u043e\u0441\u0442 \u0432\u043e\u043b\u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b');
  }

  function openModal(trigger){
    var modal=ensureModal();
    restoreFocus=trigger||document.activeElement;
    inertLayer=trigger&&trigger.closest?trigger.closest('#swWaveProofAlert'):null;
    if(!inertLayer)inertLayer=document.getElementById('resultOverlay');
    if(inertLayer){
      inertLayerAriaHidden=inertLayer.getAttribute('aria-hidden');
      inertLayer.setAttribute('inert','');
      inertLayer.setAttribute('aria-hidden','true');
    }
    modal.hidden=false;
    document.documentElement.classList.add('swImpactGrowthOpen');
    var video=modal.querySelector('video');
    if(video){
      video.muted=true;
      var play=video.play();
      if(play&&typeof play.catch==='function')play.catch(function(){});
    }
    var close=modal.querySelector('.swImpactGrowthModal__close');
    if(close)close.focus({preventScroll:true});
  }

  function closeModal(){
    var modal=document.getElementById('swImpactGrowthModal');
    if(!modal||modal.hidden)return;
    modal.hidden=true;
    document.documentElement.classList.remove('swImpactGrowthOpen');
    if(inertLayer){
      inertLayer.removeAttribute('inert');
      if(inertLayerAriaHidden===null)inertLayer.removeAttribute('aria-hidden');
      else inertLayer.setAttribute('aria-hidden',inertLayerAriaHidden);
    }
    inertLayer=null;
    inertLayerAriaHidden=null;
    if(restoreFocus&&typeof restoreFocus.focus==='function')restoreFocus.focus({preventScroll:true});
    restoreFocus=null;
  }

  function triggerFrom(event){
    return event.target&&event.target.closest?event.target.closest('#impactGrowthTrigger,[data-impact-growth-open]'):null;
  }

  function mount(){
    ensureModal();
    decorateProofTrigger();
    document.addEventListener('click',function(event){
      var trigger=triggerFrom(event);
      if(trigger){
        event.preventDefault();
        event.stopPropagation();
        openModal(trigger);
        return;
      }
      var modal=document.getElementById('swImpactGrowthModal');
      if(modal&&!modal.hidden&&(event.target===modal||event.target.closest('.swImpactGrowthModal__close')))closeModal();
    },true);
    document.addEventListener('keydown',function(event){
      var modal=document.getElementById('swImpactGrowthModal');
      if(modal&&!modal.hidden){
        if(event.key==='Escape'){
          event.preventDefault();
          event.stopImmediatePropagation();
          closeModal();
        }else if(event.key==='Tab'){
          event.preventDefault();
          var close=modal.querySelector('.swImpactGrowthModal__close');
          if(close)close.focus({preventScroll:true});
        }
        return;
      }
      var trigger=triggerFrom(event);
      if(trigger&&trigger.hasAttribute('data-impact-growth-open')&&(event.key==='Enter'||event.key===' ')){
        event.preventDefault();
        openModal(trigger);
      }
    },true);
    new MutationObserver(decorateProofTrigger).observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});
  else mount();
})();

// SOURCE production/index.php:18480-18554
(function(){
  'use strict';
  function mount(){
    var modal = document.getElementById('resultModal');
    var card = modal ? modal.querySelector('.audio-card.before') : null;
    var bounds = modal ? modal.querySelector('.result-grid') : null;
    if (!card || !bounds || card.dataset.swDragBound === '1') return;
    card.dataset.swDragBound = '1';
    card.setAttribute('aria-label', '\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f. \u041e\u043a\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0442\u044c \u043c\u044b\u0448\u044c\u044e');
    var drag = null;
    var interactive = 'button,a,input,select,textarea,audio,[role="slider"],[data-saas-scrub]';

    function desktop(){ return window.matchMedia('(min-width:901px)').matches; }
    function clamp(value, min, max){ return Math.max(min, Math.min(max, value)); }
    function place(left, top){
      card.style.setProperty('left', Math.round(left) + 'px', 'important');
      card.style.setProperty('top', Math.round(top) + 'px', 'important');
      card.style.setProperty('right', 'auto', 'important');
      card.style.setProperty('bottom', 'auto', 'important');
      card.style.setProperty('transform', 'none', 'important');
    }
    function limits(){
      return {
        maxLeft: Math.max(0, bounds.clientWidth - card.offsetWidth),
        maxTop: Math.max(0, bounds.clientHeight - card.offsetHeight)
      };
    }
    function stop(event){
      if (!drag || (event && event.pointerId !== drag.pointerId)) return;
      drag = null;
      card.classList.remove('is-dragging');
      document.documentElement.classList.remove('sw-source-card-dragging');
    }
    card.addEventListener('pointerdown', function(event){
      if (!desktop() || event.button !== 0 || event.target.closest(interactive)) return;
      var cardRect = card.getBoundingClientRect();
      var boundsRect = bounds.getBoundingClientRect();
      drag = {
        pointerId:event.pointerId,
        offsetX:event.clientX - cardRect.left,
        offsetY:event.clientY - cardRect.top,
        boundsLeft:boundsRect.left,
        boundsTop:boundsRect.top
      };
      card.classList.add('is-dragging');
      document.documentElement.classList.add('sw-source-card-dragging');
      if (card.setPointerCapture) {
        try { card.setPointerCapture(event.pointerId); } catch (_) {}
      }
      event.preventDefault();
    });
    document.addEventListener('pointermove', function(event){
      if (!drag || event.pointerId !== drag.pointerId) return;
      card.dataset.swDragged = '1';
      var range = limits();
      place(
        clamp(event.clientX - drag.boundsLeft - drag.offsetX, 0, range.maxLeft),
        clamp(event.clientY - drag.boundsTop - drag.offsetY, 0, range.maxTop)
      );
      event.preventDefault();
    }, {passive:false});
    document.addEventListener('pointerup', stop);
    document.addEventListener('pointercancel', stop);
    window.addEventListener('blur', stop);
    window.addEventListener('resize', function(){
      if (!desktop() || card.dataset.swDragged !== '1') return;
      var range = limits();
      place(clamp(card.offsetLeft, 0, range.maxLeft), clamp(card.offsetTop, 0, range.maxTop));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();

// SOURCE production/index.php:19044-19074
(function(){
  'use strict';
  if(window.__swSourceCardDismissV1)return;
  window.__swSourceCardDismissV1=true;
  function pauseSource(){var audio=document.getElementById('sourceAudio');if(audio&&typeof audio.pause==='function'){try{audio.pause();}catch(_){}}}
  function setDismissed(card,hidden,reveal){if(!card)return;card.hidden=!!hidden;card.classList.toggle('is-source-dismissed',!!hidden);card.setAttribute('aria-hidden',hidden?'true':'false');if(hidden){pauseSource();if(reveal)reveal.focus({preventScroll:true});return}card.classList.remove('is-source-returning');void card.offsetWidth;card.classList.add('is-source-returning');window.setTimeout(function(){card.classList.remove('is-source-returning');},1100);try{card.scrollIntoView({block:'nearest',inline:'nearest'});}catch(_){}}
  function mount(){
    var modal=document.getElementById('resultModal');
    var card=modal&&modal.querySelector('.audio-card.before');
    var badge=modal&&modal.querySelector('.audio-card.after .improved-badge');
    var row=badge&&badge.closest('.badge-row');
    if(!card||!badge||!row)return false;
    if(card.dataset.swSourceDismissBound!=='1'){
      if(!card.id)card.id='sourceAudioCard';
      var pulse=document.createElement('span');pulse.className='swSourcePulseFrame';pulse.setAttribute('aria-hidden','true');card.appendChild(pulse);
      var close=document.createElement('button');close.className='swSourceCardClose';close.type='button';close.setAttribute('aria-label','Закрыть исходную версию');close.textContent='×';card.appendChild(close);card.dataset.swSourceDismissBound='1';
      close.addEventListener('click',function(event){event.preventDefault();event.stopPropagation();setDismissed(card,true,reveal);});
    }
    var reveal=row.querySelector('.swSourceRevealButton');
    if(!reveal){
      reveal=document.createElement('button');reveal.className='swSourceRevealButton';reveal.type='button';reveal.textContent='А как было?';reveal.setAttribute('aria-controls',card.id||'sourceAudioCard');reveal.setAttribute('aria-label','Показать исходную версию');row.insertBefore(reveal,badge.nextSibling);
      reveal.addEventListener('click',function(event){event.preventDefault();event.stopPropagation();setDismissed(card,false,null);var close=card.querySelector('.swSourceCardClose');if(close)window.setTimeout(function(){close.focus({preventScroll:true});},40);});
    }
    window.__swSourceCardDismissControls={card:card,close:card.querySelector('.swSourceCardClose'),reveal:reveal};
    return true;
  }
  function boot(){if(mount())return;var root=document.getElementById('resultModal')||document.body;if(!root)return;var observer=new MutationObserver(function(){if(mount())observer.disconnect();});observer.observe(root,{childList:true,subtree:true});window.setTimeout(function(){observer.disconnect();},10000);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();

// SOURCE production/index.php:20037-20103
(() => {
  'use strict';
  if (window.__swResultTopTrustV1) return;
  window.__swResultTopTrustV1 = true;
  const mount = () => {
    const modal = document.getElementById('resultModal');
    const header = modal?.querySelector('.result-header');
    const source = modal?.querySelector('#payFullLink > .swSbpPurchase__trust');
    if (!modal || !header || !source) return;
    const hideSource = () => {
      const current = modal.querySelector('#payFullLink > .swSbpPurchase__trust');
      if (!current) return;
      current.dataset.swTrustSource = '1';
      current.style.setProperty('display', 'none', 'important');
      current.style.setProperty('visibility', 'hidden', 'important');
      current.style.setProperty('pointer-events', 'none', 'important');
    };
    let top = header.querySelector('.swResultTopTrust');
    if (!top) {
      top = source.cloneNode(true);
      top.className = 'swResultTopTrust';
      top.removeAttribute('data-sw-trust-source');
      top.removeAttribute('style');
      top.removeAttribute('aria-hidden');
      top.setAttribute('role', 'list');
      top.setAttribute('aria-label', 'Преимущества обработки');
      top.querySelectorAll(':scope > span').forEach((item) => item.setAttribute('role', 'listitem'));
      header.appendChild(top);
    }
    top.removeAttribute('data-sw-trust-source');
    top.style.removeProperty('display');
    top.style.removeProperty('visibility');
    top.style.removeProperty('pointer-events');
    hideSource();
    const syncTrustGeometry = () => {
      if (!window.matchMedia('(min-width:1024px)').matches) {
        top.style.removeProperty('width');
        return;
      }
      const headerRect = header.getBoundingClientRect();
      const impact = modal.querySelector('.result-impact');
      const impactRect = impact?.getBoundingClientRect();
      const freeRight = impactRect && impactRect.left > headerRect.left
        ? Math.min(headerRect.right, impactRect.left - 10)
        : headerRect.right;
      top.style.setProperty('width', Math.max(280, Math.floor(freeRight - headerRect.left)) + 'px', 'important');
    };
    syncTrustGeometry();
    window.requestAnimationFrame(() => {
      syncTrustGeometry();
      window.requestAnimationFrame(syncTrustGeometry);
    });
    window.setTimeout(syncTrustGeometry, 120);
    window.addEventListener('resize', syncTrustGeometry, {passive:true});
    const pay = modal.querySelector('#payFullLink');
    if (pay && !pay.dataset.swTrustObserver) {
      const observer = new MutationObserver(hideSource);
      observer.observe(pay, {childList:true, subtree:true});
      pay.dataset.swTrustObserver = '1';
    }
  };
  mount();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else window.setTimeout(mount, 0);
})();

// SOURCE production/index.php:20120-20191
(() => {
  'use strict';
  if (window.__swMobileResultWaveGrowthGeometryV1) return;
  window.__swMobileResultWaveGrowthGeometryV1 = true;

  const root = document.documentElement;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const mobile = () => window.matchMedia('(max-width:1023px)').matches;
  const numberFromText = (value) => {
    const match = String(value || '').replace(',', '.').match(/-?\d+(?:\.\d+)?/);
    const n = match ? Number(match[0]) : NaN;
    return Number.isFinite(n) ? n : null;
  };
  const visibleRect = (el) => {
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return rect.height > 1 && style.display !== 'none' && style.visibility !== 'hidden' ? rect : null;
  };

  function sourceStage(){
    return document.querySelector('#resultModal .audio-card.before .swWaveSaasStage');
  }
  function resultCard(){
    return document.querySelector('#resultModal .audio-card.after');
  }
  function growthPercent(){
    const metric = document.getElementById('impactGrowth');
    const value = numberFromText(metric && metric.textContent);
    return value !== null && value >= 0 ? value : null;
  }
  function sync(){
    if (!mobile()) {
      root.style.removeProperty('--sw-mobile-result-wave-h');
      return;
    }
    const card = resultCard();
    const source = sourceStage();
    if (!card || !source) return;
    const sourceRect = visibleRect(source);
    if (!sourceRect) return;
    const growth = growthPercent();
    if (growth === null) return;

    /* The source stage is the visual reference. The factor is the exact
       percentage shown to the customer, with no decorative minimum/maximum. */
    const rawHeight = sourceRect.height * (1 + growth / 100);
    const height = rawHeight;
    root.style.setProperty('--sw-mobile-result-wave-h', `${height.toFixed(2)}px`);
    card.dataset.swWaveGrowthPercent = growth.toFixed(2);
    card.dataset.swWaveSourceHeight = sourceRect.height.toFixed(2);
    card.dataset.swWaveResultHeight = height.toFixed(2);
  }

  function boot(){
    const schedule = () => window.requestAnimationFrame(sync);
    schedule();
    window.addEventListener('resize', schedule, {passive:true});
    window.addEventListener('orientationchange', schedule, {passive:true});
    const modal = document.getElementById('resultModal');
    if (!modal || !('MutationObserver' in window)) return;
    const observer = new MutationObserver(schedule);
    observer.observe(modal, {subtree:true, childList:true, attributes:true, attributeFilter:['class','style','src']});
    window.setTimeout(() => observer.disconnect(), 30000);
    window.setTimeout(schedule, 80);
    window.setTimeout(schedule, 320);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

// SOURCE production/index.php:20403-20620
(() => {
  'use strict';
  window.__swProcessingEtaLiveV1 = true;
  if (window.__swProcessingElapsedLiveV2) return;
  window.__swProcessingElapsedLiveV2 = true;

  const root = document.documentElement;
  const state = {
    status: '',
    percent: 0,
    startedAt: 0,
    elapsedBase: 0,
    elapsedReceivedAt: 0,
    displayed: 0,
    done: false
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const finitePositive = (value) => {
    const number = Number(value);
    return Number.isFinite(number) && number > 0 ? number : null;
  };
  const clock = (seconds) => {
    const safe = Math.max(0, Math.round(seconds));
    const hours = Math.floor(safe / 3600);
    const minutes = Math.floor((safe % 3600) / 60);
    const secondsPart = safe % 60;
    return hours > 0
      ? String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(secondsPart).padStart(2, '0')
      : String(minutes).padStart(2, '0') + ':' + String(secondsPart).padStart(2, '0');
  };
  const active = () => {
    const pageState = String(document.body && document.body.dataset ? document.body.dataset.pageState || '' : '');
    return root.classList.contains('upload-active')
      || root.classList.contains('sw-processing-final-active')
      || /^(uploading|processing|queued|paid-processing)$/i.test(pageState);
  };

  function ensureOrbEta(){
    const orb = document.getElementById('swFastProcessOrb');
    if (!orb) return null;
    let eta = orb.querySelector(':scope > .swOrbEtaMatrix');
    if (!eta) {
      eta = document.createElement('div');
      eta.className = 'swOrbEtaMatrix';
      eta.setAttribute('aria-live', 'off');
      eta.innerHTML = '<span class="swOrbEtaMatrix__label">\u0422\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u043e</span><strong class="swOrbEtaMatrix__value">00:00</strong>';
      orb.appendChild(eta);
    }
    eta.setAttribute('aria-label', '\u0422\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u043e');
    const label = eta.querySelector('.swOrbEtaMatrix__label');
    if (label) label.textContent = '\u0422\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u043e';
    return eta;
  }

  function animateOrbEta(element, value){
    if (!element) return;
    if (!element.dataset.etaCurrent || element.textContent === '--:--') {
      element.textContent = value;
      element.dataset.etaCurrent = value;
      return;
    }
    if (element.dataset.etaCurrent === value || element.dataset.etaNext === value) return;
    element.dataset.etaNext = value;
    element.classList.remove('is-time-entering');
    element.classList.add('is-time-exiting');
    window.clearTimeout(element.__swEtaSwapTimer);
    window.clearTimeout(element.__swEtaEnterTimer);
    element.__swEtaSwapTimer = window.setTimeout(() => {
      const next = element.dataset.etaNext || value;
      element.textContent = next;
      element.dataset.etaCurrent = next;
      delete element.dataset.etaNext;
      element.classList.remove('is-time-exiting');
      element.classList.add('is-time-entering');
      element.__swEtaEnterTimer = window.setTimeout(() => {
        element.classList.remove('is-time-entering');
      }, 260);
    }, 145);
  }

  function localDuration(){
    let duration = 0;
    try {
      const meta = JSON.parse(localStorage.getItem('sunowave:processing_track_meta') || 'null');
      duration = finitePositive(meta && meta.duration) || 0;
    } catch (_) {}
    if (!duration) {
      const audio = document.querySelector('audio[data-source-audio], #sourceAudio, #resultSourceAudio');
      duration = finitePositive(audio && audio.duration) || 0;
    }
    return duration;
  }

  function nestedValue(payload, keys){
    if (!payload || typeof payload !== 'object') return null;
    for (const key of keys) {
      const value = finitePositive(payload[key]);
      if (value !== null) return value;
    }
    for (const key of ['processing', 'progress', 'metrics', 'timing', 'eta']) {
      const nested = payload[key];
      if (!nested || typeof nested !== 'object') continue;
      for (const candidate of keys) {
        const value = finitePositive(nested[candidate]);
        if (value !== null) return value;
      }
    }
    return null;
  }

  function ingest(payload){
    if (!payload || typeof payload !== 'object') return;
    const status = String(payload.status || '').toLowerCase();
    const percent = Number(payload.progress_percent ?? payload.percent);
    const now = Date.now();
    state.status = status || state.status;
    state.done = /^(done|error|failed|cancelled|canceled)$/.test(status);
    if (Number.isFinite(percent)) state.percent = clamp(percent, 0, 100);
    const serverNow = finitePositive(payload.server_now_ts);
    const serverElapsed = Number(payload.processing_elapsed_seconds);
    const started = finitePositive(payload.processing_started_ts)
      || finitePositive(payload.started_ts)
      || finitePositive(payload.queue_launched_ts);
    let elapsed = Number.isFinite(serverElapsed) && serverElapsed >= 0 ? serverElapsed : null;
    if (elapsed === null && serverNow !== null && started !== null) elapsed = Math.max(0, serverNow - started);
    if (elapsed !== null) {
      const projected = state.elapsedReceivedAt ? state.elapsedBase + Math.max(0, (now - state.elapsedReceivedAt) / 1000) : 0;
      state.elapsedBase = Math.max(elapsed, projected, state.displayed);
      state.elapsedReceivedAt = now;
    } else if (!state.elapsedReceivedAt && status === 'processing') {
      state.elapsedBase = 0;
      state.elapsedReceivedAt = now;
    }
    window.__swProcessingElapsed = {
      status: state.status,
      percent: state.percent,
      elapsedSeconds: Math.floor(state.elapsedBase),
      source: elapsed !== null ? 'server' : 'local'
    };
  }

  function readDomPercent(){
    let percent = state.percent;
    document.querySelectorAll('#swFastProcessOrb,#swFastStatusBar,[aria-valuenow]').forEach((element) => {
      const style = element.getAttribute('style') || '';
      const css = /--sw-process-pct\s*:\s*([0-9.]+)/i.exec(style);
      const width = /width\s*:\s*([0-9.]+)%/i.exec(style);
      const aria = element.getAttribute('aria-valuenow');
      const value = Number((css && css[1]) || (width && width[1]) || aria);
      if (Number.isFinite(value)) percent = Math.max(percent, clamp(value, 0, 100));
    });
    return percent;
  }

  function render(){
    const now = Date.now();
    if (!active() || state.done) {
      state.displayed = 0;
      if (!active()) {
        state.elapsedBase = 0;
        state.elapsedReceivedAt = 0;
      }
      return;
    }
    if (!state.elapsedReceivedAt) {
      state.displayed = 0;
      const idleOrb = ensureOrbEta();
      const idleValue = idleOrb && idleOrb.querySelector('.swOrbEtaMatrix__value');
      if (idleValue) animateOrbEta(idleValue, '00:00');
      return;
    }
    const target = state.elapsedBase + Math.max(0, (now - state.elapsedReceivedAt) / 1000);
    state.displayed = Math.max(state.displayed, target);
    const value = clock(state.displayed);
    const source = state.elapsedBase > 0 ? 'server' : 'local';
    const orbEta = ensureOrbEta();
    document.querySelectorAll('.swFinalOrbCopy__eta strong,.swProcessingStatusEta strong,.swEtaChip strong').forEach((element) => {
      if (element.textContent !== value) element.textContent = value;
      element.dataset.elapsedSource = source;
    });
    if (orbEta) {
      const orbValue = orbEta.querySelector('.swOrbEtaMatrix__value');
      animateOrbEta(orbValue, value);
      if (orbValue) orbValue.dataset.elapsedSource = source;
    }
    document.querySelectorAll('.swFinalOrbCopy__eta span,.swProcessingStatusEta span,.swEtaChip span').forEach((element) => {
      element.textContent = '\u0422\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u043e';
    });
    if (window.__swProcessingElapsed) window.__swProcessingElapsed.displayedSeconds = Math.floor(state.displayed);
  }

  const originalFetch = window.fetch && window.fetch.bind(window);
  if (originalFetch) {
    window.fetch = function(input, init){
      const requestUrl = typeof input === 'string' ? input : String(input && input.url || '');
      return originalFetch(input, init).then((response) => {
        if (/(?:^|\/)status(?:_best)?\.php(?:\?|$)/i.test(requestUrl)) {
          try { response.clone().json().then(ingest).catch(() => {}); } catch (_) {}
        }
        return response;
      });
    };
  }

  document.addEventListener('change', (event) => {
    if (event.target && event.target.matches && event.target.matches('input[type="file"]')) {
      state.elapsedBase = 0;
      state.elapsedReceivedAt = 0;
      state.displayed = 0;
      state.done = false;
    }
  }, true);
  window.setInterval(render, 500);
  render();
})();

// SOURCE production/index.php:21878-21953
(() => {
  'use strict';
  if (window.__swIndexDesktopProcessingWaveGrowthV2) return;
  window.__swIndexDesktopProcessingWaveGrowthV2 = true;

  const root = document.documentElement;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const active = () => {
    const state = String(document.body?.dataset?.pageState || '');
    return window.innerWidth >= 1024 && (root.classList.contains('upload-active') || root.classList.contains('sw-processing-final-active') || /^(uploading|processing|queued|paid-processing)$/i.test(state));
  };
  let currentGrowth = .30;
  let targetGrowth = .30;
  let frame = 0;
  let watchedOrb = null;
  let progressObserver = null;
  let treeObserver = null;

  const readProgress = (orb) => {
    const value = Number.parseFloat(orb?.style?.getPropertyValue('--sw-process-pct') || '');
    return Number.isFinite(value) ? clamp(value / 100, 0, 1) : 0;
  };
  const pickOneWave = (orb) => {
    const waves = Array.from(orb?.querySelectorAll('.swProcessingWaveBurst') || []);
    const primary = waves.find((wave) => !wave.classList.contains('is-empty')) || waves[0] || null;
    waves.forEach((wave) => {
      const keep = wave === primary;
      if (keep) {
        wave.dataset.swPrimaryWave = '1';
        delete wave.dataset.swDuplicateWave;
      } else {
        delete wave.dataset.swPrimaryWave;
        wave.dataset.swDuplicateWave = '1';
      }
    });
    return primary;
  };
  const paint = () => {
    frame = 0;
    if (!active()) return;
    const orb = document.getElementById('swFastProcessOrb');
    const wave = pickOneWave(orb);
    if (!orb || !wave || wave.classList.contains('is-empty')) return;
    const progress = readProgress(orb);
    targetGrowth = .30 + .70 * Math.pow(progress, 2.15);
    currentGrowth += (targetGrowth - currentGrowth) * .075;
    if (Math.abs(targetGrowth - currentGrowth) < .0008) currentGrowth = targetGrowth;
    wave.style.setProperty('--sw-processing-wave-growth', currentGrowth.toFixed(5));
    wave.style.setProperty('--sw-processing-wave-opacity', (.965 + .035 * progress).toFixed(3));
    wave.dataset.swWaveProgress = (progress * 100).toFixed(2);
    if (currentGrowth !== targetGrowth) frame = requestAnimationFrame(paint);
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(paint);
  };
  const watchOrb = () => {
    const orb = document.getElementById('swFastProcessOrb');
    if (!orb || orb === watchedOrb) return;
    progressObserver?.disconnect();
    treeObserver?.disconnect();
    watchedOrb = orb;
    progressObserver = new MutationObserver(schedule);
    progressObserver.observe(orb, {attributes:true,attributeFilter:['style']});
    treeObserver = new MutationObserver(schedule);
    treeObserver.observe(orb, {childList:true,subtree:true});
    schedule();
  };
  const sync = () => { watchOrb(); schedule(); };
  new MutationObserver(sync).observe(root, {attributes:true,attributeFilter:['class']});
  if (document.body) new MutationObserver(sync).observe(document.body, {attributes:true,attributeFilter:['data-page-state']});
  window.addEventListener('resize', sync, {passive:true});
  window.setInterval(sync, 700);
  sync();
})();

// SOURCE production/index.php:22081-22127
(() => {
  'use strict';
  if (window.__swResultTopTrustPlacementV2) return;
  window.__swResultTopTrustPlacementV2 = true;
  const ensureTop = (modal) => {
    if (!modal) return null;
    const source = modal.querySelector('#payFullLink > .swSbpPurchase__trust');
    if (!source) return modal.querySelector('.swResultTopTrust');
    source.dataset.swTrustSource = '1';
    source.style.setProperty('display','none','important');
    source.style.setProperty('visibility','hidden','important');
    source.style.setProperty('pointer-events','none','important');
    const existing = Array.from(modal.querySelectorAll('.swResultTopTrust'));
    let top = existing[0] || null;
    existing.slice(1).forEach((duplicate) => duplicate.remove());
    if (!top) {
      top = source.cloneNode(true);
      top.className = 'swResultTopTrust';
      top.removeAttribute('aria-hidden');
      top.removeAttribute('data-sw-trust-source');
      top.removeAttribute('style');
      top.setAttribute('role','list');
      top.setAttribute('aria-label','Преимущества обработки');
      top.querySelectorAll(':scope > span').forEach((item) => item.setAttribute('role','listitem'));
    }
    top.style.removeProperty('width');
    return top;
  };
  const place = () => {
    const modal = document.getElementById('resultModal');
    const top = ensureTop(modal);
    if (!modal || !top) return;
    const pay = modal.querySelector('#payFullLink');
    const action = pay?.closest('.result-offer__action');
    if (action && top.parentElement !== action) pay.insertAdjacentElement('afterend', top);
    top.dataset.swTrustPlacement = 'after-payment';
  };
  place();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place, {once:true});
  else window.setTimeout(place, 0);
  window.addEventListener('resize', place, {passive:true});
  const modal = document.getElementById('resultModal');
  if (modal) new MutationObserver(place).observe(modal, {childList:true,subtree:true});
  window.setInterval(place, 500);
})();

// SOURCE production/index.php:22261-22291
(() => {
  'use strict';
  if (window.__swPaidCtaGapAxisV1) return;
  window.__swPaidCtaGapAxisV1 = true;
  const sync = () => {
    document.querySelectorAll('#resultModal #payFullLink:not(.is-free):not(.is-paid)').forEach((pay) => {
      const copy = pay.querySelector('.swSbpPurchase__copy');
      const brand = pay.querySelector('.swSbpPurchase__brand');
      const panel = pay.querySelector('.swSbpPurchase__panel');
      const text = pay.querySelector('#payFullText > span:first-child') || pay.querySelector('#payFullText');
      if (!copy || !brand || !panel || !text) return;
      /* Measure the unshifted copy first so the observer cannot accumulate transforms. */
      copy.style.removeProperty('transform');
      const brandRect = brand.getBoundingClientRect();
      const textRect = text.getBoundingClientRect();
      const visualGap = Math.min(22, Math.max(14, window.innerWidth * 0.016));
      const shiftX = brandRect.right - textRect.left + visualGap;
      copy.style.setProperty(
        'transform',
        `translate(${shiftX.toFixed(2)}px, -4px)`,
        'important'
      );
    });
  };
  sync();
  window.addEventListener('resize', sync, {passive:true});
  new MutationObserver(sync).observe(document.body, {childList:true,subtree:true});
  window.setInterval(sync, 700);
})();

// SOURCE production/index.php:23215-23231
(() => {
  'use strict';
  if (window.__swResultGrowthArrowV1) return;
  window.__swResultGrowthArrowV1 = true;
  const DELAY_MS = 1000;
  let revealTimer = 0;
  let wasOpen = false;
  let currentScore = null;
  function elements(){return {overlay:document.getElementById('resultOverlay'),score:document.querySelector('#resultModal #impactGrowthTrigger')}}
  function isOpen(overlay){if(!overlay||overlay.hidden)return false;const style=window.getComputedStyle(overlay);return style.display!=='none'&&style.visibility!=='hidden'&&Number(style.opacity||1)>0.01}
  function reset(score){if(revealTimer)window.clearTimeout(revealTimer);revealTimer=0;if(score)score.classList.remove('has-sw-growth-arrow')}
  function sync(){const {overlay,score}=elements();const open=isOpen(overlay);const scoreChanged=score!==currentScore;if(!scoreChanged&&open===wasOpen)return;if(currentScore&&scoreChanged)currentScore.classList.remove('has-sw-growth-arrow');currentScore=score;wasOpen=open;reset(score);if(!open||!score)return;revealTimer=window.setTimeout(()=>{revealTimer=0;if(currentScore===score&&isOpen(overlay))score.classList.add('has-sw-growth-arrow')},DELAY_MS)}
  function mount(){sync();if('MutationObserver'in window){const observer=new MutationObserver(sync);observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style','hidden','aria-hidden']})}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();

// SOURCE production/index.php:23537-23670
(() => {
  if (window.__codexSourceWaveRealRenderV2) return;
  window.__codexSourceWaveRealRenderV2 = true;
  const GREEN = '#10b981';
  const GREEN_LIGHT = '#6ee7b7';
  const GREEN_DARK = '#047857';

  function getCanvas(stage) {
    if (!stage) return null;
    let canvas = stage.querySelector('.swWaveEmeraldCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'swWaveEmeraldCanvas';
      canvas.setAttribute('aria-hidden', 'true');
      stage.appendChild(canvas);
    }
    return canvas;
  }

  function renderSource(img) {
    if (!img || !img.complete || !img.naturalWidth || !img.naturalHeight) return false;
    const stage = img.closest('.swWaveSaasStage');
    const canvas = getCanvas(stage);
    if (!stage || !canvas) return false;
    const key = String(img.dataset.waveSource || img.currentSrc || img.src || '') + ':' + img.naturalWidth + 'x' + img.naturalHeight;
    if (canvas.dataset.renderKey === key) return true;

    const width = img.naturalWidth;
    const height = img.naturalHeight;
    const work = document.createElement('canvas');
    work.width = width;
    work.height = height;
    const workContext = work.getContext('2d', { willReadFrequently: true });
    const context = canvas.getContext('2d');
    if (!workContext || !context) return false;

    try {
      workContext.drawImage(img, 0, 0, width, height);
      const pixels = workContext.getImageData(0, 0, width, height).data;
      const top = new Float32Array(width);
      const bottom = new Float32Array(width);
      const center = (height - 1) * 0.5;
      let detected = 0;

      for (let x = 0; x < width; x += 1) {
        let first = height;
        let last = -1;
        for (let y = 0; y < height; y += 1) {
          const offset = (y * width + x) * 4;
          const red = pixels[offset];
          const green = pixels[offset + 1];
          const blue = pixels[offset + 2];
          const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
          const chroma = Math.max(red, green, blue) - Math.min(red, green, blue);
          if (luminance > 48 || (luminance > 34 && chroma > 28)) {
            if (first === height) first = y;
            last = y;
          }
        }
        if (last < 0) {
          top[x] = center;
          bottom[x] = center;
        } else {
          top[x] = first;
          bottom[x] = last;
          detected += 1;
        }
      }
      if (detected < Math.max(32, width * 0.08)) return false;

      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, width, height);
      context.lineJoin = 'round';
      context.lineCap = 'round';

      context.beginPath();
      context.moveTo(0, top[0]);
      for (let x = 1; x < width; x += 1) context.lineTo(x, top[x]);
      for (let x = width - 1; x >= 0; x -= 1) context.lineTo(x, bottom[x]);
      context.closePath();
      context.fillStyle = 'rgba(16,185,129,.22)';
      context.fill();

      context.beginPath();
      context.moveTo(0, top[0]);
      for (let x = 1; x < width; x += 1) context.lineTo(x, top[x]);
      context.strokeStyle = GREEN_LIGHT;
      context.globalAlpha = .92;
      context.lineWidth = Math.max(1, width / 1500);
      context.stroke();

      context.beginPath();
      context.moveTo(0, bottom[0]);
      for (let x = 1; x < width; x += 1) context.lineTo(x, bottom[x]);
      context.strokeStyle = GREEN_DARK;
      context.globalAlpha = .92;
      context.stroke();

      context.beginPath();
      context.moveTo(0, center);
      context.lineTo(width, center);
      context.strokeStyle = 'rgba(167,243,208,.34)';
      context.globalAlpha = 1;
      context.lineWidth = Math.max(1, width / 1800);
      context.stroke();

      canvas.dataset.renderKey = key;
      img.classList.add('swWaveEmeraldSourceImage');
      stage.classList.add('swWaveEmeraldRendered');
      return true;
    } catch (_) {
      return false;
    }
  }

  function boot() {
    const img = document.getElementById('sourceWave');
    if (!img) return;
    const attempt = () => { renderSource(img); };
    img.addEventListener('load', attempt, { passive: true });
    attempt();
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(attempt);
      observer.observe(img, { attributes: true, attributeFilter: ['src', 'class', 'data-wave-source'] });
      window.setTimeout(() => observer.disconnect(), 30000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();

// SOURCE production/index.php:23702-23820
(() => {
  if (window.__codexSourceWaveRealRenderV3) return;
  window.__codexSourceWaveRealRenderV3 = true;

  let syncQueued = false;

  function scheduleSync() {
    if (syncQueued) return;
    syncQueued = true;
    window.requestAnimationFrame(() => {
      syncQueued = false;
      syncComparison();
    });
  }

  function setStyleVar(element, name, value) {
    if (element.style.getPropertyValue(name) !== value) {
      element.style.setProperty(name, value);
    }
  }

  function setDataValue(element, name, value) {
    if (element.dataset[name] !== value) element.dataset[name] = value;
  }

  function syncComparison() {
    const source = document.getElementById('sourceWave');
    const result = document.getElementById('resultWave');
    const sourceCanvas = source && source.closest('.swWaveSaasStage')
      ? source.closest('.swWaveSaasStage').querySelector('.swWaveEmeraldCanvas')
      : null;
    const resultStage = result ? result.closest('.swWaveSaasStage') : null;
    if (!sourceCanvas || !resultStage || !sourceCanvas.width || !sourceCanvas.height) return false;

    const metric = document.getElementById('impactGrowth');
    const rawPercent = Number.parseFloat(String(metric ? metric.textContent : '').replace(',', '.').replace(/[^0-9.+-]/g, ''));
    const percent = Number.isFinite(rawPercent) ? Math.max(-100, Math.min(300, rawPercent)) : 0;
    /* The backend now renders both files against one common peak scale. The
       actual ratio is already present in the two measured contours; CSS must
       not invent a second, global enlargement from the label. */
    const sourceScale = 1;
    const resultScale = 1;
    const resultGrowthFactor = Math.max(0, Math.min(4, 1 + percent / 100));
    const sourceScaleText = sourceScale.toFixed(5);
    const resultScaleText = resultScale.toFixed(5);
    const percentText = percent.toFixed(2);
    setStyleVar(resultStage, '--sw-source-overlay-scale', sourceScaleText);
    setStyleVar(resultStage, '--sw-result-wave-scale', resultScaleText);
    setDataValue(resultStage, 'waveGrowthPercent', percentText);
    setDataValue(resultStage, 'sourceOverlayScale', sourceScaleText);
    setDataValue(resultStage, 'resultWaveScale', resultScaleText);
    setDataValue(resultStage, 'resultWaveGrowthFactor', resultGrowthFactor.toFixed(5));

    let comparison = resultStage.querySelector('.swWaveEmeraldCompareCanvas');
    if (!comparison) {
      comparison = document.createElement('canvas');
      comparison.className = 'swWaveEmeraldCompareCanvas';
      comparison.setAttribute('aria-hidden', 'true');
      resultStage.appendChild(comparison);
    }
    const key = String(sourceCanvas.dataset.renderKey || '') + ':' + sourceCanvas.width + 'x' + sourceCanvas.height;
    if (comparison.dataset.renderKey !== key) {
      comparison.width = sourceCanvas.width;
      comparison.height = sourceCanvas.height;
      const context = comparison.getContext('2d');
      if (!context) return false;
      context.clearRect(0, 0, comparison.width, comparison.height);
      context.drawImage(sourceCanvas, 0, 0);
      comparison.dataset.renderKey = key;
    }
    setDataValue(comparison, 'growthPercent', percentText);
    setDataValue(comparison, 'sourceScale', sourceScaleText);
    setDataValue(comparison, 'resultScale', resultScaleText);
    setDataValue(comparison, 'growthFactor', resultGrowthFactor.toFixed(5));

    const legacy = resultStage.querySelector('.swWaveCompareOverlayV983');
    if (legacy && !legacy.classList.contains('swWaveLegacyHidden')) {
      legacy.classList.add('swWaveLegacyHidden');
    }
    return true;
  }

  function boot() {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      scheduleSync();
      if (attempts >= 120) window.clearInterval(timer);
    }, 250);
    scheduleSync();
    if ('MutationObserver' in window) {
      // Observe DOM insertion only. syncComparison writes style/data attributes;
      // observing attributes here would create a self-triggering loop.
      const modal = document.getElementById('resultModal') || document.body;
      const observer = new MutationObserver(scheduleSync);
      observer.observe(modal, { childList: true, subtree: true });

      const source = document.getElementById('sourceWave');
      if (source) {
        const sourceObserver = new MutationObserver(scheduleSync);
        sourceObserver.observe(source, { attributes: true, attributeFilter: ['src', 'class', 'data-wave-source'] });
        window.setTimeout(() => sourceObserver.disconnect(), 30000);
      }

      const metric = document.getElementById('impactGrowth');
      if (metric) {
        const metricObserver = new MutationObserver(scheduleSync);
        metricObserver.observe(metric, { childList: true, subtree: true, characterData: true });
        window.setTimeout(() => metricObserver.disconnect(), 30000);
      }
      window.setTimeout(() => observer.disconnect(), 30000);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();

// SOURCE production/index.php:23836-23904
(() => {
  'use strict';
  if (window.__codexResultWaveformFitV1) return;
  window.__codexResultWaveformFitV1 = true;

  const root = document.documentElement;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const numberFromText = (value) => {
    const match = String(value || '').replace(',', '.').match(/-?\d+(?:\.\d+)?/);
    const n = match ? Number(match[0]) : NaN;
    return Number.isFinite(n) ? n : null;
  };

  function sync() {
    const stage = document.querySelector('#resultModal .audio-card.after .swWaveSaasStage');
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    if (rect.height < 8 || rect.width < 8) return;

    const metric = document.getElementById('impactGrowth');
    const percent = clamp(numberFromText(metric && metric.textContent) || 0, -100, 300);
    const growthFactor = clamp(1 + percent / 100, 0, 4);
    const factorText = growthFactor.toFixed(5);
    stage.style.setProperty('--sw-result-wave-scale', '1.00000');
    stage.style.setProperty('--sw-result-wave-visual-scale', '1.00000');
    stage.dataset.resultWaveScale = '1.00000';
    stage.dataset.resultWaveVisualScale = '1.00000';
    stage.dataset.resultWaveGrowthFactor = factorText;
    stage.dataset.resultWaveGeometry = 'common_peak_envelope_positive_excess_v2';
    root.dataset.resultWaveformFit = '1';
  }

  function boot() {
    const schedule = () => window.requestAnimationFrame(sync);
    schedule();
    window.addEventListener('resize', schedule, {passive:true});
    window.addEventListener('orientationchange', schedule, {passive:true});

    const stage = document.querySelector('#resultModal .audio-card.after .swWaveSaasStage');
    if ('ResizeObserver' in window && stage) {
      const resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(stage);
    }

    const modal = document.getElementById('resultModal');
    if (modal && 'MutationObserver' in window) {
      const observer = new MutationObserver(schedule);
      observer.observe(modal, {
        childList:true,
        subtree:true,
        attributes:true,
        attributeFilter:['class','src']
      });
      window.setTimeout(() => observer.disconnect(), 30000);
    }

    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      schedule();
      if (attempts >= 120) window.clearInterval(timer);
    }, 250);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

// SOURCE production/index.php:23983-24033
(() => {
  'use strict';
  if (window.__codexResultCompareLinksRailV1) return;
  window.__codexResultCompareLinksRailV1 = true;

  function mount() {
    const modal = document.getElementById('resultModal');
    const row = modal && modal.querySelector('.audio-card.after .badge-row');
    const reveal = row && row.querySelector('.swSourceRevealButton');
    const question = modal && document.getElementById('swWaveUpgradeQuestion');
    if (!row || !reveal || !question) return false;

    let rail = row.querySelector('.swResultCompareLinks');
    if (!rail) {
      rail = document.createElement('span');
      rail.className = 'swResultCompareLinks';
      rail.setAttribute('role', 'group');
      rail.setAttribute('aria-label', 'Сравнение результата');
      const divider = document.createElement('span');
      divider.className = 'swResultCompareLinksDivider';
      divider.setAttribute('aria-hidden', 'true');
      divider.textContent = '|';
      rail.append(reveal, divider, question);
      row.appendChild(rail);
    } else if (!rail.contains(reveal) || !rail.contains(question)) {
      const divider = rail.querySelector('.swResultCompareLinksDivider');
      rail.append(reveal);
      if (divider) rail.append(divider);
      rail.append(question);
    }

    row.dataset.swCompareLinksRail = '1';
    return true;
  }

  function boot() {
    if (mount()) return;
    const root = document.getElementById('resultModal') || document.body;
    if (!root || !('MutationObserver' in window)) return;
    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(root, {childList:true, subtree:true});
    window.setTimeout(() => observer.disconnect(), 10000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

// SOURCE production/index.php:24569-24629
(() => {
  'use strict';
  if (window.__swMobileResultHeaderSwapV1) return;
  window.__swMobileResultHeaderSwapV1 = true;

  let impactAnchor = null;
  let titleAnchor = null;
  let titleSlot = null;

  const sync = () => {
    const modal = document.getElementById('resultModal');
    const impact = modal?.querySelector('.result-impact');
    const after = modal?.querySelector('.audio-card.after');
    const audioTop = after?.querySelector('.audio-top');
    const title = audioTop?.querySelector('.title-pill') || titleSlot?.querySelector('.title-pill');
    const player = after?.querySelector('.player-row');
    if (!modal || !impact || !after || !audioTop || !title || !player) return;

    if (!impactAnchor) {
      impactAnchor = document.createComment('sw-mobile-impact-origin');
      impact.parentNode.insertBefore(impactAnchor, impact);
    }
    if (!titleAnchor) {
      titleAnchor = document.createComment('sw-mobile-after-title-origin');
      audioTop.insertBefore(titleAnchor, title);
    }

    if (window.matchMedia('(max-width:1023px)').matches) {
      if (!titleSlot) {
        titleSlot = document.createElement('div');
        titleSlot.className = 'swMobileAfterTitleSlot';
        titleSlot.setAttribute('aria-label', 'После обработки');
      }
      if (!titleSlot.isConnected) impactAnchor.parentNode.insertBefore(titleSlot, impactAnchor.nextSibling);
      if (title.parentNode !== titleSlot) titleSlot.appendChild(title);
      if (impact.parentNode !== after || impact.nextSibling !== player) after.insertBefore(impact, player);
      after.classList.add('sw-mobile-result-layout');
      return;
    }

    if (title.parentNode !== audioTop) audioTop.insertBefore(title, titleAnchor.nextSibling);
    if (impact.parentNode !== impactAnchor.parentNode || impact.previousSibling !== impactAnchor) {
      impactAnchor.parentNode.insertBefore(impact, impactAnchor.nextSibling);
    }
    after.classList.remove('sw-mobile-result-layout');
    if (titleSlot?.isConnected) titleSlot.remove();
  };

  const schedule = () => window.requestAnimationFrame(sync);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule, {once:true});
  else schedule();
  window.addEventListener('resize', schedule, {passive:true});
  window.addEventListener('orientationchange', schedule, {passive:true});
  const root = document.getElementById('resultModal');
  if (root && 'MutationObserver' in window) {
    const observer = new MutationObserver(schedule);
    observer.observe(root, {childList:true, subtree:true});
  }
})();