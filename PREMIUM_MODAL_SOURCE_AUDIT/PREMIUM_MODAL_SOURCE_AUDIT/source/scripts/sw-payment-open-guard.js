(function () {
  'use strict';

  if (window.__swPaymentOpenGuardV1) return;
  window.__swPaymentOpenGuardV1 = true;

  var VERSION = '20260801_payment_widget_guard_3';
  var PAY_SELECTOR = [
    '#payMinus',
    '#payVocals',
    '#payBundle',
    '#payFullLink',
    '.swCleanPayCard',
    '.swSbpPurchase',
    'a[href*="/pay.php"]',
    'a[href*="/minus_pay.php"]',
    'a[href*="/master_pay.php"]',
    'a[href*="yookassa"]',
    'a[href*="yoomoney"]'
  ].join(',');
  var lastOpenAt = 0;
  var pendingHref = '';

  function clean(value) {
    return String(value == null ? '' : value).trim();
  }

  function jobFromEverywhere() {
    var keys = [
      'job',
      'sw_minusa_last_job',
      'sw_minusa_current_job',
      'sunowave_last_job',
      'sunowave:last_job'
    ];
    try {
      var params = new URLSearchParams(window.location.search || '');
      var fromUrl = clean(params.get('job')).toLowerCase();
      if (/^[a-f0-9]{32}$/.test(fromUrl)) return fromUrl;
    } catch (_) {}
    for (var i = 1; i < keys.length; i += 1) {
      try {
        var v = clean(window.localStorage && window.localStorage.getItem(keys[i])).toLowerCase();
        if (/^[a-f0-9]{32}$/.test(v)) return v;
      } catch (_) {}
      try {
        var sv = clean(window.sessionStorage && window.sessionStorage.getItem(keys[i])).toLowerCase();
        if (/^[a-f0-9]{32}$/.test(sv)) return sv;
      } catch (_) {}
    }
    return '';
  }

  function productFor(el) {
    var id = clean(el && el.id);
    if (id === 'payBundle') return { endpoint: '/minus_pay.php', product: 'bundle_full', amount: '130' };
    if (id === 'payVocals') return { endpoint: '/minus_pay.php', product: 'vocals_full', amount: '90' };
    if (id === 'payMinus') return { endpoint: '/minus_pay.php', product: 'instrumental_full', amount: '90' };
    if (id === 'payFullLink') return { endpoint: '/pay.php', product: 'enhance_full', amount: '90' };
    if (window.location.pathname.indexOf('master.php') !== -1) return { endpoint: '/master_pay.php', product: 'master_access', amount: '450' };
    return null;
  }

  function directUrl(el) {
    if (!el) return '';
    var href = clean(el.getAttribute && el.getAttribute('href'));
    try {
      if (href && href !== '#' && !/^javascript:/i.test(href)) {
        return new URL(href, window.location.origin).href;
      }
    } catch (_) {}

    var cfg = productFor(el);
    if (!cfg) return '';
    try {
      var url = new URL(cfg.endpoint, window.location.origin);
      var job = jobFromEverywhere();
      if (job && cfg.endpoint !== '/master_pay.php') url.searchParams.set('job', job);
      if (cfg.product && cfg.endpoint !== '/master_pay.php') url.searchParams.set('product', cfg.product);
      if (cfg.amount && cfg.endpoint !== '/master_pay.php') url.searchParams.set('amount_rub', cfg.amount);
      url.searchParams.set('_sw_guard', VERSION);
      return url.href;
    } catch (_) {
      return '';
    }
  }

  function setSafeHref(el, href) {
    if (!el || !href || !el.setAttribute) return;
    var current = clean(el.getAttribute('href'));
    if (!current || current === '#' || /^javascript:/i.test(current)) {
      el.setAttribute('href', href);
      el.setAttribute('target', '_self');
      el.setAttribute('rel', 'nofollow');
    }
  }

  function widgetOwnsPaymentOpening() {
    return !!document.querySelector(
      '#swYooKassaWidgetJs,script[src*="sunowave-yookassa-widget.js"]'
    );
  }

  function hasVisibleCheckout() {
    var openingUntil = 0;
    try {
      openingUntil = Number(window.__swPaymentWidgetOpeningUntil || 0);
      if (!openingUntil && document.documentElement) {
        openingUntil = Number(document.documentElement.getAttribute('data-sw-payment-widget-opening-until') || 0);
      }
    } catch (_) {}
    if (openingUntil > Date.now()) return true;
    if (document.body && (
      document.body.classList.contains('sw-payment-active') ||
      document.body.classList.contains('sw-payment-overlay-open') ||
      document.body.classList.contains('payment-open') ||
      document.body.classList.contains('payment-modal-open')
    )) return true;
    return !!document.querySelector(
      '.swPayOverlay.is-open,' +
      '#modal-widget iframe,.checkout-modal iframe,.qa-iframe-widget,' +
      'iframe[title="YooMoney"],iframe[src*="yookassa" i],iframe[src*="yoomoney" i],iframe[src*="checkout" i]'
    );
  }

  function dispatchPaymentEvent(name, href, el) {
    try {
      window.dispatchEvent(new CustomEvent('sunowave:payment-event', {
        detail: {
          name: name,
          href: href,
          source: 'payment-open-guard',
          target_id: clean(el && el.id),
          page: window.location.pathname + window.location.search
        }
      }));
    } catch (_) {}
  }

  function fallbackNavigate(href, el, delay) {
    if (!href) return;
    pendingHref = href;
    var startedAt = Date.now();
    window.setTimeout(function () {
      if (pendingHref !== href) return;
      if (Date.now() - lastOpenAt > 12000) return;
      if (window.location.href !== window.__swPaymentOpenGuardStartHref && window.location.href.indexOf('#') === -1) return;
      if (hasVisibleCheckout()) return;
      dispatchPaymentEvent('payment_guard_redirect', href, el);
      try { window.location.assign(href); } catch (_) { window.location.href = href; }
    }, delay || 850);
    window.setTimeout(function () {
      if (pendingHref !== href) return;
      if (Date.now() - startedAt > 6400 && !hasVisibleCheckout()) {
        dispatchPaymentEvent('payment_guard_late_redirect', href, el);
        try { window.location.assign(href); } catch (_) { window.location.href = href; }
      }
    }, 6600);
  }

  function cancelFallback() {
    pendingHref = '';
    lastOpenAt = 0;
  }

  function armFromElement(el) {
    if (!el || (el.getAttribute && el.getAttribute('aria-disabled') === 'true')) return;
    if (el.classList && el.classList.contains('is-paid')) return;
    var href = directUrl(el);
    if (!href) return;
    setSafeHref(el, href);
    if (widgetOwnsPaymentOpening() || hasVisibleCheckout()) {
      cancelFallback();
      return;
    }
    lastOpenAt = Date.now();
    window.__swPaymentOpenGuardStartHref = window.location.href;
    dispatchPaymentEvent('payment_guard_armed', href, el);
    if (window.swPaymentDetailsAutoOpenArm) {
      try { window.swPaymentDetailsAutoOpenArm(26000); } catch (_) {}
    }
    fallbackNavigate(href, el, /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || '') ? 650 : 950);
  }

  function findPayTarget(event) {
    return event && event.target && event.target.closest ? event.target.closest(PAY_SELECTOR) : null;
  }

  ['pointerdown', 'touchstart', 'mousedown', 'focusin'].forEach(function (type) {
    document.addEventListener(type, function (event) {
      armFromElement(findPayTarget(event));
    }, { capture: true, passive: true });
  });

  document.addEventListener('click', function (event) {
    armFromElement(findPayTarget(event));
  }, true);

  window.addEventListener('pageshow', function () {
    cancelFallback();
    document.documentElement.setAttribute('data-sw-payment-open-guard', VERSION);
  });

  window.addEventListener('sunowave:payment-widget-opening', cancelFallback, true);

  document.documentElement.setAttribute('data-sw-payment-open-guard', VERSION);
  window.swPaymentOpenGuard = {
    version: VERSION,
    arm: armFromElement,
    cancel: cancelFallback,
    hrefFor: directUrl,
    hasVisibleCheckout: hasVisibleCheckout
  };
})();
