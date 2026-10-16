/* AMERI-CANS guided tours. A page opts in with <body data-tour="key"> and <script src="tour.js"> in <head> (no defer: the #tour hash is read before the page's own boot script rewrites the URL). The tour starts from #tour in the URL or the Tour button this script adds to the nav. Steps spotlight elements of the live page. Each page's tour stands alone; once every page in a chain is done, the final step offers a certificate (Training Certificate.html). Edit the step text below; sel is a CSS selector, click:true waits for a tap on the target, before runs first (used to switch tabs). */
(function () {
  'use strict';
  var KEY = 'ac-tours', quiet = false, WANT = location.hash === '#tour';
  function tab(sel) { return function () { var b = document.querySelector(sel); if (b && b.getAttribute('aria-selected') !== 'true') { quiet = true; try { b.click(); } finally { quiet = false; } } }; }
  var CHAINS = {
    forms: { title: 'Forms tour', pages: ['work-order', 'interview', 'fsl'], cert: 'training-certificate.html#forms' },
    survey: { title: 'Site survey tour', pages: ['survey-universal', 'survey-multiplex'], cert: 'training-certificate.html#survey' }
  };
  var PAGES = {
    'work-order': { chain: 'forms', name: 'Work Order Intake', href: 'work-order-intake.html#tour', steps: [
      { text: 'Work Order Intake, OPS-F01. Fill it while you confirm details with the client. It turns into a work order the Orders team can read at a glance.' },
      { sel: '.callout', text: 'Confirm everything with the client before drafting. Anything you cannot confirm is flagged [NEED]; empty fields print as [NEED] on their own.' },
      { sel: '#s-intake', before: tab('[data-view="form"]'), text: 'Section 1: who took the order, how it came in, and the equipment.' },
      { sel: '#s-req .sec-head', before: tab('[data-view="form"]'), text: 'Section 2: the 17 required fields. Each has a Confirmed button and a [NEED] button.' },
      { sel: '[data-req="1"]', before: tab('[data-view="form"]'), text: 'Mark Confirmed once the client confirms the field. Tap [NEED] if you cannot; a line opens for what is missing and who owes it.' },
      { sel: '[data-view="wo"]', before: tab('[data-view="form"]'), click: true, text: 'The form builds the work order as you go.', do: 'Tap Work order.' },
      { sel: '#wo', before: tab('[data-view="wo"]'), text: 'The work order. Open [NEED] items sit at the top; Orders cannot close them without the client.' },
      { sel: '.toolbar [data-action="copy"]', text: 'Copy for Teams puts the work order on the clipboard as text, ready to paste into the job channel.' },
      { sel: '.toolbar [data-action="print"]', text: 'Print / save PDF produces the work order page and the completed OPS-F01 for the Teams job folder. Download .json saves the form to move it to another device.' },
      { text: 'Work Order Intake done.' }
    ] },
    'interview': { chain: 'forms', name: 'Interview Questionnaire', href: 'interview-form.html#tour', steps: [
      { text: 'Interview Questionnaire. One form, three positions. Fill in answers during the interview, score the candidate, then print the grade sheet for the file.' },
      { sel: '.views', text: 'Pick the position. Each position autosaves separately on this device.' },
      { sel: '#form .sec', text: 'Questions by section. Type the answer as the candidate speaks. Yes or no questions have two buttons.' },
      { sel: '.eval', text: 'Candidate evaluation: tap a score from 1 to 5 per criterion. The total updates under the table.' },
      { sel: '.rec', text: 'Interviewer recommendation: one pick.' },
      { sel: '.sign', text: 'Type your name. It signs the printed sheet.' },
      { sel: '.toolbar [data-action="print"]', text: 'Print / save PDF produces the completed questionnaire and grade sheet. Download .json moves a candidate to another device; Open .json brings one in.' },
      { text: 'Interview Questionnaire done.' }
    ] },
    'fsl': { chain: 'forms', name: 'Field Service Lead Interview Guide', href: 'fsl-interview.html#tour', steps: [
      { text: 'Field Service Lead Interview Guide, OPS-F04. Two stages: a 15 minute phone screen, then a 45 to 60 minute in-person interview scored out of 40.' },
      { sel: '.views', before: tab('[data-stage="ps"]'), text: 'Phone screen first. One candidate per form; both stages autosave together on this device.' },
      { sel: '.ko', before: tab('[data-stage="ps"]'), text: 'Knock-outs: ask, note the answer, mark OK or Flag.' },
      { sel: '#form .q', before: tab('[data-stage="ps"]'), text: 'Phone questions, scored 1 to 5, each with what to listen for.' },
      { sel: '[data-stage="ip"]', before: tab('[data-stage="ps"]'), click: true, text: 'If the candidate advances, the in-person guide is the second tab.', do: 'Tap In-person interview.' },
      { sel: '#form .sec', before: tab('[data-stage="ip"]'), text: 'Eight competencies, each scored 1 to 5, with a probe to ask.' },
      { sel: '.fam', before: tab('[data-stage="ip"]'), text: 'Familiarity: ask, or check from the conversation.' },
      { sel: '.total', before: tab('[data-stage="ip"]'), text: 'Score sheet: the total out of 40, with the auto-disqualifiers below it.' },
      { sel: '.toolbar [data-action="download"]', text: 'Download .json hands the phone screen to the in-person interviewer. Print / save PDF produces the completed guide with the score sheet.' },
      { text: 'Field Service Lead Interview Guide done.' }
    ] },
    'survey-universal': { chain: 'survey', name: 'Site Survey: Universal', href: 'site-survey-universal.html#tour', steps: [
      { text: 'Site Survey Worksheet, Universal: single, double, triple wide, and modular units. Supports SOP Section 4 and prints as a three-page controlled form.' },
      { sel: '.callout', text: 'How to use, in one paragraph. Read it once.' },
      { sel: '.toolbar', text: 'The worksheet autosaves on this device. Download .json to hand it to the office. Print / save PDF produces the controlled form for the Teams job folder.' },
      { sel: '#s-job', before: tab('[data-view="form"]'), text: 'Section 1: job information. Fill every field; N/A if it does not apply.' },
      { sel: '#s-clear', before: tab('[data-view="form"]'), text: 'Section 3: clearance under the frame. Under 22 in is a STOP: call the AOM and log the call in Section 10.' },
      { sel: '#s-waste', before: tab('[data-view="form"]'), text: 'Section 5: stub-outs and drain routing. Every stub-out gets a photo and a spot on the sketch.' },
      { sel: '#s-conflicts', before: tab('[data-view="form"]'), text: 'Section 10: conflicts and escalation. Do not proceed on assumptions.' },
      { sel: '#s-photos', before: tab('[data-view="form"]'), text: 'Section 11: required photos. Check each as you take it; the count at the bottom keeps score.' },
      { sel: '#s-closeout', before: tab('[data-view="form"]'), text: 'Section 12: close-out checklist and signatures before you leave the site.' },
      { sel: '[data-view="sketch"]', before: tab('[data-view="form"]'), click: true, text: 'The layout sketch has its own tab.', do: 'Tap Layout sketch.' },
      { sel: '.palette', before: tab('[data-view="sketch"]'), text: 'The legend. Drag an item onto the grid, or tap it and then tap the grid.' },
      { sel: '.board', before: tab('[data-view="sketch"]'), text: 'The grid, half-square snap. Tap an item to select it, drag to move it. On a phone, pinch with two fingers to resize and twist to turn.' },
      { sel: '[data-insp]', before: tab('[data-view="sketch"]'), text: 'The inspector for the selected item: turn, resize, label, delete.' },
      { sel: '.canvasbar', before: tab('[data-view="sketch"]'), text: 'Undo, Finish line for the line tools, and Cancel live above the grid.' },
      { text: 'Universal sheet done.' }
    ] },
    'survey-multiplex': { chain: 'survey', name: 'Site Survey: Multiplex', href: 'site-survey-multiplex.html#tour', steps: [
      { text: 'Multiplex: 4-wide to 20-wide complexes and trailer cities. Same flow as Universal, plus a Section Log, a Waste System Plan, and a Complex Plan.' },
      { sel: '#s-complex', before: tab('[data-view="form"]'), text: 'Section 2: count sections at the marriage lines and confirm the count with the POC. It drives the Section Log and the plan columns.' },
      { sel: '#s-seclog', before: tab('[data-view="form"]'), text: 'Section 6: one line per section. Stub-outs by size, clearance, water inlet, water heater, floor drain.' },
      { sel: '#s-wasteplan', before: tab('[data-view="form"]'), text: 'Section 7: gravity first. Add a lift station only where a run cannot hold fall to a tank.' },
      { sel: '[data-view="sketch"]', before: tab('[data-view="form"]'), click: true, text: 'The complex plan has its own tab.', do: 'Tap Complex plan.' },
      { sel: '.board', before: tab('[data-view="sketch"]'), text: 'One column per section, numbered from END 1. Exterior zones A and B are the two long sides: tanks, pump houses, and lift stations go there.' },
      { text: 'Multiplex sheet done.' }
    ] }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  function init() {
  var key = document.body && document.body.getAttribute('data-tour'), page = PAGES[key];
  if (!page) return;
  var chain = CHAINS[page.chain];
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') return s; } catch (e) {} return {}; }
  var S = load(); S.done = S.done || {}; S.certs = S.certs || {}; S.name = typeof S.name === 'string' ? S.name : '';
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function today() { var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; }; return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()); }

  var CSS = [
    ':root{--ac-tour-dim:rgba(1,43,78,.45)}html[data-theme=night]{--ac-tour-dim:rgba(2,6,14,.64)}',
    '.ac-tour-spot{position:fixed;z-index:1000;border:2px solid var(--sky,#5D8FAF);box-shadow:0 0 0 9999px var(--ac-tour-dim);pointer-events:none;box-sizing:border-box}',
    '.ac-tour-spot.none{border-color:transparent}',
    '.ac-tour-card{position:fixed;z-index:1001;width:min(360px,calc(100vw - 32px));box-sizing:border-box;background:var(--pale,#F4F7FA);color:var(--ink,#000);border:1px solid var(--rule,#BFD0DD);padding:16px 18px;font:inherit;font-size:15px;line-height:1.45;display:flex;flex-direction:column;gap:10px}',
    '@media (max-width:899px){.ac-tour-card{left:0;right:0;bottom:0;top:auto;width:100%;max-height:50vh;overflow:auto;border-width:1px 0 0;padding-bottom:max(16px,env(safe-area-inset-bottom))}}',
    '.ac-tour-kicker{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--denim,#3E6883)}',
    '.ac-tour-text{margin:0;text-wrap:pretty}.ac-tour-do{margin:0;font-weight:700;color:var(--navy,#012B4E)}',
    '.ac-tour-msg{margin:0;font-size:14px;color:var(--red,#B72319);min-height:20px}',
    '.ac-tour-actions{display:flex;flex-wrap:wrap;gap:8px}',
    '.ac-tour-btn{font:inherit;font-size:14px;font-weight:700;min-height:40px;padding:0 14px;border:1px solid var(--sky,#5D8FAF);background:transparent;color:var(--navy,#012B4E);border-radius:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap}',
    '.ac-tour-btn:hover{background:var(--sky-tint,#E9F1F7)}.ac-tour-btn:focus-visible{outline:3px solid var(--sky,#5D8FAF);outline-offset:1px}',
    '.ac-tour-btn.primary{background:var(--navy,#012B4E);border-color:var(--navy,#012B4E);color:var(--inverse,#fff)}.ac-tour-btn.primary:hover{background:var(--deep-sea,#1C445B);border-color:var(--deep-sea,#1C445B)}',
    '.ac-tour-btn.ghost{border-color:transparent;color:var(--denim,#3E6883)}',
    '.ac-tour-field{display:flex;flex-direction:column;gap:6px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--denim,#3E6883)}',
    '.ac-tour-field input{width:100%;min-height:44px;box-sizing:border-box;border:1px solid var(--sky,#5D8FAF);background:var(--page,#fff);color:var(--ink,#000);padding:0 12px;font:inherit;font-size:16px;border-radius:0}',
    '@media print{.ac-tour-spot,.ac-tour-card{display:none!important}}'
  ].join('\n');
  var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);

  var spot, card, i = -1, active = false, msg = '', timer = 0, raf = 0;
  function rect(el) { return el.getBoundingClientRect(); }
  function visible(el) { if (!el) return false; var r = rect(el); return r.width > 0 || r.height > 0; }
  function target(st) { return st.sel ? document.querySelector(st.sel) : null; }

  function start() {
    if (active) return; active = true;
    spot = document.createElement('div'); spot.className = 'ac-tour-spot';
    card = document.createElement('section'); card.className = 'ac-tour-card'; card.setAttribute('aria-label', chain.title); card.setAttribute('aria-live', 'polite');
    document.body.appendChild(spot); document.body.appendChild(card);
    card.addEventListener('click', onCard);
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target.id === 'ac-tour-name') { e.preventDefault(); cert(); } });
    timer = setInterval(place, 400);
    if (location.hash !== '#tour') try { history.replaceState(null, '', location.pathname + location.search + '#tour'); } catch (e) {}
    setStep(0, 1);
  }
  function end() {
    if (!active) return; active = false; clearInterval(timer);
    spot.parentNode.removeChild(spot); card.parentNode.removeChild(card);
    if (location.hash === '#tour') try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
  }
  function setStep(n, dir) {
    var N = page.steps.length; dir = dir || 1; n = Math.max(0, Math.min(N - 1, n));
    for (var tries = 0; tries < N; tries++) { var st = page.steps[n]; if (st.before) { try { st.before(); } catch (e) {} } if (!st.sel || visible(target(st))) break; var m = n + dir; if (m < 0 || m >= N) break; n = m; }
    i = n; msg = '';
    if (i === N - 1 && !S.done[key]) { S.done[key] = true; save(); }
    render(); reveal();
  }
  function render() {
    var st = page.steps[i], N = page.steps.length, last = i === N - 1, h = '';
    h += '<div class="ac-tour-kicker">' + esc(chain.title) + ': ' + esc(page.name) + ', ' + (i + 1) + ' of ' + N + '</div><p class="ac-tour-text">' + esc(st.text) + '</p>';
    if (st.do) h += '<p class="ac-tour-do">' + esc(st.do) + '</p>';
    var missing = chain.pages.filter(function (k) { return k !== key && !S.done[k]; }), certReady = last && !missing.length && !S.certs[page.chain];
    if (last && S.certs[page.chain]) h += '<p class="ac-tour-text">Certificate issued ' + esc(S.certs[page.chain].date) + '.</p>';
    else if (last && missing.length) h += '<p class="ac-tour-text">Certificate after: ' + esc(missing.map(function (k) { return PAGES[k].name; }).join(', ')) + '.</p>';
    if (certReady) h += '<p class="ac-tour-text">Enter your name for the certificate.</p><label class="ac-tour-field" for="ac-tour-name">Your name<input id="ac-tour-name" type="text" autocomplete="name" value="' + esc(S.name) + '"></label>';
    h += '<p class="ac-tour-msg">' + esc(msg) + '</p><div class="ac-tour-actions">';
    if (last) {
      if (certReady) h += '<button type="button" class="ac-tour-btn primary" data-t="cert">Get certificate</button>';
      else if (S.certs[page.chain]) h += '<button type="button" class="ac-tour-btn primary" data-t="go" data-href="' + esc(chain.cert) + '">View certificate</button>';
      else h += '<button type="button" class="ac-tour-btn primary" data-t="end">Done</button>';
    } else if (!st.click) h += '<button type="button" class="ac-tour-btn primary" data-t="next">Next</button>';
    if (i > 0) h += '<button type="button" class="ac-tour-btn" data-t="back">Back</button>';
    if (!last) h += '<button type="button" class="ac-tour-btn ghost" data-t="end">End tour</button>';
    h += '</div>';
    card.innerHTML = h; place();
  }
  function place() {
    if (!active) return;
    var st = page.steps[i], el = target(st), vw = window.innerWidth, vh = window.innerHeight, pad = 6, r = null;
    if (el && visible(el)) { r = rect(el); spot.classList.remove('none'); spot.style.top = (r.top - pad) + 'px'; spot.style.left = (r.left - pad) + 'px'; spot.style.width = (r.width + 2 * pad) + 'px'; spot.style.height = (r.height + 2 * pad) + 'px'; }
    else { spot.classList.add('none'); spot.style.top = (vh / 2) + 'px'; spot.style.left = (vw / 2) + 'px'; spot.style.width = '0px'; spot.style.height = '0px'; }
    if (vw < 900) { card.style.top = ''; card.style.left = ''; return; }
    var cw = card.offsetWidth, ch = card.offsetHeight, top, left, gap = 14, m = 16;
    if (!r) { top = (vh - ch) / 2; left = (vw - cw) / 2; }
    else {
      left = Math.max(m, Math.min(r.left, vw - cw - m));
      if (r.bottom + gap + ch <= vh - m) top = r.bottom + gap;
      else if (r.top - gap - ch >= m) top = r.top - gap - ch;
      else if (r.right + gap + cw <= vw - m) { left = r.right + gap; top = Math.max(m, Math.min(r.top, vh - ch - m)); }
      else if (r.left - gap - cw >= m) { left = r.left - gap - cw; top = Math.max(m, Math.min(r.top, vh - ch - m)); }
      else { left = vw - cw - m; top = vh - ch - m; }
    }
    card.style.top = Math.max(m, top) + 'px'; card.style.left = left + 'px';
  }
  function reveal() {
    var st = page.steps[i], el = target(st); if (!el || !visible(el)) { place(); return; }
    var r = rect(el), vh = window.innerHeight, sheet = window.innerWidth < 900, room = sheet ? Math.min(vh * 0.5, card.offsetHeight + 24) : 0, topMin = 72, bottomMax = vh - room - 16;
    if (r.top < topMin || r.bottom > bottomMax) {
      var fits = r.height <= bottomMax - topMin - 16, y = window.pageYOffset + r.top - (fits ? Math.max(topMin, (topMin + bottomMax - r.height) / 2) : topMin + 8);
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
    place();
  }
  function onCard(e) {
    var b = e.target.closest('[data-t]'); if (!b) return; var t = b.getAttribute('data-t');
    if (t === 'next') setStep(i + 1, 1); else if (t === 'back') setStep(i - 1, -1); else if (t === 'end') end();
    else if (t === 'go') { var href = b.getAttribute('data-href'); end(); location.href = href; }
    else if (t === 'cert') cert();
  }
  function cert() {
    var inp = document.getElementById('ac-tour-name'), v = inp ? inp.value.replace(/\s+/g, ' ').trim() : '';
    if (!v) { msg = 'Enter your name.'; render(); var again = document.getElementById('ac-tour-name'); if (again) again.focus(); return; }
    S.name = v; S.certs[page.chain] = { name: v, date: today(), pages: chain.pages.map(function (k) { return PAGES[k].name; }) }; save();
    end(); location.href = chain.cert;
  }
  document.addEventListener('click', function (e) {
    if (!active || quiet) return;
    if (card.contains(e.target) || e.target.closest('#theme-toggle')) return;
    var st = page.steps[i], el = target(st);
    if (el && el.contains(e.target)) { if (st.click) setTimeout(function () { if (active) setStep(i + 1, 1); }, 80); return; }
    e.preventDefault(); e.stopPropagation();
    msg = st.click ? 'Not that one. ' + st.do : 'Follow the tour, or end it.'; render();
  }, true);
  document.addEventListener('keydown', function (e) {
    if (!active) return; var typing = e.target && /^(input|textarea|select)$/i.test(e.target.tagName);
    if (e.key === 'Escape') end();
    else if (e.key === 'ArrowRight' && !typing && !page.steps[i].click && i < page.steps.length - 1) setStep(i + 1, 1);
    else if (e.key === 'ArrowLeft' && !typing && i > 0) setStep(i - 1, -1);
  });
  function schedule() { if (!active) return; cancelAnimationFrame(raf); raf = requestAnimationFrame(place); }
  window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);

  var links = document.querySelector('.nav-links');
  if (links) { var b = document.createElement('button'); b.type = 'button'; b.className = 'btn ghost sm'; b.textContent = 'Tour'; b.setAttribute('aria-label', 'Start the guided tour'); b.addEventListener('click', function () { start(); }); links.insertBefore(b, document.getElementById('theme-toggle')); }
  if (WANT) start();
  }
})();
