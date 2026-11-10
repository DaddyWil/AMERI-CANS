/* Drydock page runtime: menu, Night and Daylight, reveal on scroll, count-up numbers, the equipment filter, the request form. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = false;
  try { reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  if (reduce) root.classList.add('no-motion');

  /* Theme: one setting shared with the rest of williamhans.app (localStorage ac-theme). */
  function applyTheme(night) {
    if (night) root.setAttribute('data-theme', 'night'); else root.removeAttribute('data-theme');
    document.querySelectorAll('[data-theme-label]').forEach(function (b) { b.textContent = night ? 'Daylight' : 'Night'; b.setAttribute('aria-pressed', night ? 'true' : 'false'); });
  }
  function themeInit() {
    var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    var saved = function () { try { return localStorage.getItem('ac-theme'); } catch (e) { return null; } };
    var s = saved(); applyTheme(s ? s === 'night' : !!(mq && mq.matches));
    if (mq && mq.addEventListener) mq.addEventListener('change', function (e) { if (!saved()) applyTheme(e.matches); });
    window.addEventListener('storage', function (e) { if (e.key === 'ac-theme') applyTheme(e.newValue ? e.newValue === 'night' : !!(mq && mq.matches)); });
    document.querySelectorAll('[data-theme-label]').forEach(function (b) {
      b.addEventListener('click', function () { var night = root.getAttribute('data-theme') !== 'night'; try { localStorage.setItem('ac-theme', night ? 'night' : 'day'); } catch (e) {} applyTheme(night); });
    });
  }

  /* Menu */
  function menuInit() {
    var nav = document.querySelector('.nav'), btn = document.querySelector('.menu-btn'); if (!nav || !btn) return;
    var set = function (open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); };
    btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    nav.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* Reveal on scroll, with a stagger inside each group. */
  function revealInit() {
    var els = document.querySelectorAll('.rv'); if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Count-up: a stat starts at 0 and is set to its value when it scrolls in; wash.js tweens the change, and this falls back to its own tween when the wash is off. */
  function fmt(v, dec, commas) { var s = dec ? v.toFixed(dec) : String(Math.round(v)); var a = s.split('.'); if (commas) a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); return a.join('.'); }
  function countInit() {
    var els = document.querySelectorAll('.stat b[data-count]'); if (!els.length) return;
    var run = function (b) {
      var target = parseFloat(b.getAttribute('data-count')), pre = b.getAttribute('data-pre') || '', suf = b.getAttribute('data-suf') || '', dec = (b.getAttribute('data-count').split('.')[1] || '').length, commas = target >= 1000;
      var final = pre + fmt(target, dec, commas) + suf;
      if (reduce || !root.classList.contains('ac-anim')) { b.textContent = final; return; }
      if (window.ACWash) { b.textContent = final; return; } /* the wash animates the text change */
      var t0 = performance.now(), D = 900;
      (function step(t) { var k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3); b.textContent = k < 1 ? pre + fmt(target * e, dec, commas) + suf : final; if (k < 1) requestAnimationFrame(step); })(t0);
    };
    els.forEach(function (b) { b.textContent = (b.getAttribute('data-pre') || '') + '0' + (b.getAttribute('data-suf') || ''); });
    if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }); }, { threshold: 0.4 });
    els.forEach(function (b) { io.observe(b); });
  }

  /* Equipment filter chips. */
  function filterInit() {
    var bar = document.querySelector('.filters'); if (!bar) return;
    var cards = document.querySelectorAll('[data-group]'), groups = document.querySelectorAll('[data-group-section]');
    var apply = function (key) {
      bar.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === key ? 'true' : 'false'); });
      cards.forEach(function (c) { c.classList.toggle('hidden', key !== 'all' && c.getAttribute('data-group') !== key); });
      groups.forEach(function (g) { g.classList.toggle('hidden', key !== 'all' && g.getAttribute('data-group-section') !== key); });
      try { history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key); } catch (e) {}
    };
    bar.addEventListener('click', function (e) { var b = e.target.closest('button[data-filter]'); if (b) apply(b.getAttribute('data-filter')); });
    var h = (location.hash || '').slice(1); if (h && bar.querySelector('[data-filter="' + h + '"]')) apply(h);
  }

  /* Request form: prefill from the URL, validate, then compose the email (no server needed). */
  function formInit() {
    var f = document.getElementById('request-form'); if (!f) return;
    var q = null; try { q = new URLSearchParams(location.search); } catch (e) {}
    if (q) {
      var pre = { equipment: 'equipment', state: 'site_state', type: 'request_type', location: 'location' };
      Object.keys(pre).forEach(function (k) { var v = q.get(k); if (!v) return; var el = f.elements[pre[k]]; if (!el) return; if (el.tagName === 'SELECT') { var opt = Array.prototype.find.call(el.options, function (o) { return o.value.toLowerCase() === v.toLowerCase() || o.text.toLowerCase() === v.toLowerCase(); }); if (opt) el.value = opt.value; } else if (el.length && el[0] && el[0].type === 'radio') { Array.prototype.forEach.call(el, function (r) { if (r.value.toLowerCase() === v.toLowerCase()) r.checked = true; }); } else el.value = v; });
    }
    var out = document.getElementById('request-out'), err = document.getElementById('request-err');
    f.addEventListener('submit', function (e) {
      e.preventDefault(); err.textContent = '';
      var missing = [];
      Array.prototype.forEach.call(f.querySelectorAll('[required]'), function (el) {
        if (el.type === 'radio') { if (!f.querySelector('input[name="' + el.name + '"]:checked')) { var lab = f.querySelector('[data-for="' + el.name + '"]'); var t = lab ? lab.textContent : el.name; if (missing.indexOf(t) < 0) missing.push(t); } }
        else if (!el.value.trim()) { var l = f.querySelector('label[for="' + el.id + '"]'); missing.push(l ? l.textContent.replace('*', '').trim() : el.name); }
      });
      if (missing.length) { err.textContent = 'Still needed: ' + missing.join(', ') + '.'; var first = f.querySelector('[required]:invalid, [required]'); if (first) first.focus(); return; }
      var lines = [], fd = new FormData(f);
      f.querySelectorAll('[data-line]').forEach(function (el) {
        var name = el.getAttribute('name') || (el.querySelector('[name]') || {}).name; if (!name) return;
        var vals = fd.getAll(name).filter(function (v) { return String(v).trim(); }); if (!vals.length) return;
        lines.push(el.getAttribute('data-line') + ': ' + vals.join(', '));
      });
      var type = fd.get('request_type') || 'Service request', who = (fd.get('first_name') || '') + ' ' + (fd.get('last_name') || ''), co = fd.get('company') || '';
      var subject = type + ' - ' + co + (who.trim() ? ' (' + who.trim() + ')' : '');
      var body = 'AMERI-CANS request\n\n' + lines.join('\n') + '\n\nSent from the AMERI-CANS website request form.';
      var mail = 'mailto:orders@ameri-cans.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      out.hidden = false; out.querySelector('pre').textContent = subject + '\n\n' + body; out.querySelector('a').href = mail;
      out.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      window.location.href = mail;
    });
    var copy = out && out.querySelector('button');
    if (copy) copy.addEventListener('click', function () { var t = out.querySelector('pre').textContent; if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy the request'; }, 1600); }); });
  }

  function yearInit() { document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); }); }

  function start() { themeInit(); menuInit(); revealInit(); countInit(); filterInit(); formInit(); yearInit(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
