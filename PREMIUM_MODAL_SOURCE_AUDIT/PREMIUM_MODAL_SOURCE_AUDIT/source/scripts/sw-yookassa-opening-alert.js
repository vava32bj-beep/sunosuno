
(function(){
  'use strict';

  // codex-yookassa-free-download-gate-v1

  const ALERT_ID = 'swYooKassaOpeningAlert';
  const PAYMENT_SELECTOR = [
    '#payMinus',
    '#payVocals',
    '#payBundle',
    '#payFullLink',
    '.sw-july-sale',
    '.swPrice',
    '.swCta',
    '[data-payment]',
    '[data-pay]',
    'a[href*="minus_pay.php"]',
    'a[href*="/pay.php"]',
    'a[href*="pay.php"]',
    'a[href*="yoomoney.ru"]',
    'a[href*="yookassa"]'
  ].join(',');

  let hideTimer = 0;
  let lastShownAt = 0;
  let paymentIntentExpiresAt = 0;

  function clean(v){
    return String(v == null ? '' : v).trim();
  }

  function ensureAlert(){
    let alert = document.getElementById(ALERT_ID);
    if (alert) return alert;

    alert = document.createElement('div');
    alert.id = ALERT_ID;
    alert.className = 'swYooKassaOpeningAlert';
    alert.setAttribute('aria-hidden', 'true');
    alert.setAttribute('role', 'status');
    alert.innerHTML =
      '<div class="swYooKassaOpeningAlert__card" aria-live="polite">' +
        '<div class="swYooKassaOpeningAlert__row">' +
          '<div class="swYooKassaOpeningAlert__logo"><img src="/assets/images/ukass.png?v=20260811_yoo_logo_1" width="167" height="59" alt="ЮКасса"></div>' +
          '<div class="swYooKassaOpeningAlert__content">' +
            '<h2 class="swYooKassaOpeningAlert__title">Открываю ЮКасса</h2>' +
            '<p class="swYooKassaOpeningAlert__text">Подготавливаю безопасную оплату. Сейчас появится окно оплаты.</p>' +
          '</div>' +
        '</div>' +
        '<div class="swYooKassaOpeningAlert__bar" aria-hidden="true"></div>' +
      '</div>';

    if (document.body) {
      document.body.appendChild(alert);
    } else {
      document.documentElement.appendChild(alert);
    }

    return alert;
  }

  function looksDisabled(el){
    if (!el) return true;
    if (el.hidden) return true;
    if (el.classList && el.classList.contains('is-hidden')) return true;
    if (clean(el.getAttribute('aria-disabled')).toLowerCase() === 'true') return true;

    const href = clean(el.getAttribute('href'));
    const text = clean(el.textContent).toLowerCase();

    if ((text.includes('скачать') || text.includes('доступ открыт')) && !isPaymentHref(href)) return true;
    if (!href && el.tagName && el.tagName.toLowerCase() === 'a') return true;
    if (href === '#') return true;

    return false;
  }

  function isDownloadHref(href){
    const value = clean(href);
    if (!value) return false;
    if (/^(?:blob:|data:)/i.test(value)) return true;
    try {
      const url = new URL(value, window.location.href);
      const path = String(url.pathname || '').toLowerCase();
      return /(?:^|\/)(?:download(?:_[a-z]+)?|minus_download|minus_bundle_download)\.php$/i.test(path)
        || /\.(?:mp3|wav|flac|m4a|aac|ogg|opus|zip)$/i.test(path);
    } catch (_) {
      return /(?:download(?:_[a-z]+)?|minus_download|minus_bundle_download)\.php|\.(?:mp3|wav|flac|m4a|aac|ogg|opus|zip)(?:[?#]|$)/i.test(value);
    }
  }

  function isPaymentHref(href){
    const value = clean(href);
    if (!value || isDownloadHref(value)) return false;
    try {
      const url = new URL(value, window.location.href);
      const path = String(url.pathname || '').toLowerCase();
      return /(?:^|\/)(?:pay|minus_pay)\.php$/i.test(path)
        || /(?:^|\.)yoomoney\.ru$/i.test(url.hostname)
        || /(?:^|\.)yookassa(?:\.ru)?$/i.test(url.hostname);
    } catch (_) {
      return /(?:^|\/)minus_pay\.php(?:[?#]|$)|(?:^|\/)pay\.php(?:[?#]|$)|yoomoney|yookassa/i.test(value);
    }
  }

  function isFreeDownloadElement(el){
    if (!el || !el.getAttribute) return false;
    const href = clean(el.getAttribute('href'));
    const text = clean(el.textContent).toLowerCase();
    const classes = clean(el.className).toLowerCase();
    const state = [
      el.getAttribute('data-free'),
      el.getAttribute('data-full-access'),
      el.getAttribute('data-access'),
      el.getAttribute('data-action')
    ].map(clean).join(' ').toLowerCase();
    return el.hasAttribute('download')
      || isDownloadHref(href)
      || /(?:^|\s)(?:is-paid|is-free|is-download|is-full-access)(?:\s|$)/.test(classes)
      || /(?:free|download|full_access|full-access)/.test(state)
      || /скачать|бесплатно|доступ\s+открыт/i.test(text);
  }

  function rememberPaymentIntent(){
    paymentIntentExpiresAt = Date.now() + 7000;
  }

  function forgetPaymentIntent(){
    paymentIntentExpiresAt = 0;
  }

  function hasRecentPaymentIntent(){
    return paymentIntentExpiresAt > Date.now();
  }

  function isPaymentDetail(detail){
    if (!detail || typeof detail !== 'object') return false;
    const candidates = [detail.href, detail.url, detail.payment_url, detail.action_url, detail.checkout_url];
    return candidates.some(isPaymentHref);
  }

  function isPaymentElement(el){
    if (!el || !el.matches) return false;
    if (looksDisabled(el)) return false;
    if (isFreeDownloadElement(el)) return false;

    const href = clean(el.getAttribute('href')).toLowerCase();
    const id = clean(el.id).toLowerCase();
    const cls = clean(el.className).toLowerCase();
    const text = clean(el.textContent).toLowerCase();

    if (href.includes('minus_pay.php') || href.includes('/pay.php') || href.includes('yoomoney') || href.includes('yookassa')) return true;
    if (id === 'payminus' || id === 'payvocals' || id === 'paybundle') return !isDownloadHref(href);
    if (id === 'payfulllink') return isPaymentHref(href);
    if (el.hasAttribute('data-payment') || el.hasAttribute('data-pay')) return true;
    if (cls.includes('sw-july-sale')) return true;
    if (text.includes('купить') && (text.includes('₽') || text.includes('руб'))) return true;

    return false;
  }

  function showAlert(){
    const now = Date.now();
    if (now - lastShownAt < 350) return;
    lastShownAt = now;

    const alert = ensureAlert();
    alert.classList.add('is-open');
    alert.setAttribute('aria-hidden', 'false');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){
      alert.classList.remove('is-open');
      alert.setAttribute('aria-hidden', 'true');
    }, 3600);
  }

  document.addEventListener('click', function(event){
    const target = event.target && event.target.closest ? event.target.closest(PAYMENT_SELECTOR) : null;
    if (!target) return;
    if (isFreeDownloadElement(target)) {
      forgetPaymentIntent();
      return;
    }
    if (!isPaymentElement(target)) return;
    rememberPaymentIntent();
    showAlert();
  }, true);

  window.addEventListener('sunowave:payment-event', function(event){
    const detail = event && event.detail ? event.detail : {};
    const name = clean(detail.name).toLowerCase();
    if ((name === 'payment_click' || name === 'payment_open' || name === 'checkout_open')
      && (isPaymentDetail(detail) || hasRecentPaymentIntent())) {
      rememberPaymentIntent();
      showAlert();
    }
  }, true);

  window.addEventListener('pagehide', function(){
    const alert = document.getElementById(ALERT_ID);
    if (!alert) return;
    alert.classList.remove('is-open');
    alert.setAttribute('aria-hidden', 'true');
  });

  window.swYooKassaOpeningAlertShow = function(detail){
    if (!isPaymentDetail(detail) && !hasRecentPaymentIntent()) return false;
    rememberPaymentIntent();
    showAlert();
    return true;
  };
})();
