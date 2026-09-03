(function () {
  'use strict';

  if (window.__swPaymentDetailsAutoOpenV1) return;
  window.__swPaymentDetailsAutoOpenV1 = true;

  var VERSION = '20260721_payment_details_auto_open_1';
  var DETAILS_TEXT = '\u0434\u0435\u0442\u0430\u043b\u0438 \u043f\u043b\u0430\u0442\u0435\u0436\u0430';
  var opened = new WeakSet();
  var activeUntil = Date.now() + 5000;
  var timer = 0;

  function clean(value) {
    return String(value == null ? '' : value).replace(/\s+/g, ' ').trim();
  }

  function visible(el) {
    if (!el || !el.isConnected) return false;
    var rect = el.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return false;
    var style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0.05;
  }

  function looksLikePaymentDetails(el) {
    if (!el || opened.has(el) || !visible(el)) return false;
    var text = clean(el.textContent).toLowerCase();
    if (el.classList && el.classList.contains('cvWky1AT')) return true;
    if (text === DETAILS_TEXT || text.indexOf(DETAILS_TEXT) !== -1) return true;
    return false;
  }

  function isAlreadyExpanded(el) {
    var node = el;
    for (var i = 0; node && i < 4; i += 1, node = node.parentElement) {
      if (node.tagName && node.tagName.toLowerCase() === 'details') return !!node.open;
      var expanded = node.getAttribute && node.getAttribute('aria-expanded');
      if (expanded === 'true') return true;
      if (expanded === 'false') return false;
    }
    var next = el.nextElementSibling;
    if (next && visible(next) && next.getBoundingClientRect().height > 24) return true;
    return false;
  }

  function fireClick(el) {
    if (!looksLikePaymentDetails(el) || isAlreadyExpanded(el)) return false;
    opened.add(el);
    ['pointerdown', 'mousedown', 'mouseup', 'click'].forEach(function (type) {
      try {
        el.dispatchEvent(new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      } catch (_) {}
    });
    try {
      if (typeof el.click === 'function') el.click();
    } catch (_) {}
    return true;
  }

  function scanRoot(root) {
    if (!root || !root.querySelectorAll) return false;
    var found = false;
    var selector = '.cvWky1AT,button,[role="button"],[aria-controls],[class*="payment" i],[class*="checkout" i],[class*="Wky"]';
    try {
      Array.prototype.forEach.call(root.querySelectorAll(selector), function (el) {
        if (fireClick(el)) found = true;
      });
    } catch (_) {}

    try {
      Array.prototype.forEach.call(root.querySelectorAll('iframe'), function (frame) {
        try {
          if (frame.contentDocument) found = scanRoot(frame.contentDocument) || found;
        } catch (_) {}
      });
    } catch (_) {}

    return found;
  }

  function schedule() {
    if (timer) return;
    timer = window.setTimeout(function () {
      timer = 0;
      scanRoot(document);
      if (Date.now() < activeUntil) schedule();
    }, 180);
  }

  function arm(ms) {
    activeUntil = Math.max(activeUntil, Date.now() + (Number(ms) || 16000));
    schedule();
  }

  function isPaymentTrigger(el) {
    if (!el || !el.matches) return false;
    var href = clean(el.getAttribute('href')).toLowerCase();
    var id = clean(el.id).toLowerCase();
    var cls = clean(el.className).toLowerCase();
    var text = clean(el.textContent).toLowerCase();
    if (/pay|payment|checkout|yookassa|yoomoney|sbp|sbp|sbp/.test(href)) return true;
    if (/pay|payment|checkout|sbp/.test(id + ' ' + cls)) return true;
    return /(\u043a\u0443\u043f\u0438\u0442\u044c|\u043e\u043f\u043b\u0430\u0442)/.test(text);
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target && event.target.closest
      ? event.target.closest('a,button,[role="button"]')
      : null;
    if (isPaymentTrigger(trigger)) arm(22000);
  }, true);

  window.addEventListener('sunowave:payment-event', function () { arm(24000); });
  window.addEventListener('message', function () { arm(12000); });

  try {
    new MutationObserver(function () {
      if (Date.now() <= activeUntil) schedule();
    }).observe(document.documentElement, { childList: true, subtree: true });
  } catch (_) {}

  window.swPaymentDetailsAutoOpenArm = arm;
  window.swPaymentDetailsAutoOpenScan = function () { return scanRoot(document); };
  document.documentElement.setAttribute('data-sw-payment-details-auto-open', VERSION);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { arm(5000); }, { once: true });
  } else {
    arm(5000);
  }
})();
