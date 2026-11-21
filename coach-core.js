'use strict';
/* Coach, gedeeld door app en website.
   Zuinig met AI: schema's, routes en de training van vandaag komen uit vaste regels in de app zelf.
   Alleen vrije tekst gaat naar een klein taalmodel, met een korte samenvatting in plaats van ruwe data.
   Het model bouwt zelf niets: het sluit af met [[schema …]] of [[route …]] en de app voert dat uit. */
window.SP_COACH = (function () {
  var DAY = 864e5, MAX_TURNS = 8, MAX_CHARS = 600;
  /* doel: [afstand in km (0 = geen wedstrijd), fiets?, piekweek in minuten, langste sessie in minuten] */
  var GOALS = { r5: [5, 0, 180, 60], r10: [10, 0, 240, 80], r21: [21.1, 0, 330, 130], r42: [42.2, 0, 450, 180], c100: [100, 1, 420, 240], c160: [160, 1, 600, 330], rfit: [0, 0, 210, 75], cfit: [0, 1, 360, 180] };
  var NAMES = {
    nl: { r5: '5 km', r10: '10 km', r21: 'Halve marathon', r42: 'Marathon', c100: 'Toertocht 100 km', c160: 'Gran fondo 160 km', rfit: 'Conditie opbouwen, hardlopen', cfit: 'Conditie opbouwen, fietsen' },
    en: { r5: '5 km', r10: '10 km', r21: 'Half marathon', r42: 'Marathon', c100: '100 km ride', c160: '160 km gran fondo', rfit: 'Build fitness, running', cfit: 'Build fitness, cycling' },
    de: { r5: '5 km', r10: '10 km', r21: 'Halbmarathon', r42: 'Marathon', c100: '100-km-Tour', c160: 'Gran Fondo 160 km', rfit: 'Fitness aufbauen, Laufen', cfit: 'Fitness aufbauen, Radfahren' }
  };
  var LBL = {
    nl: { long: 'Lange duur', tempo: 'Tempo', int: 'Intervallen', easy: 'Rustig', goal: 'Doel', race: 'Wedstrijdweek', taper: 'Afbouw', rec: 'Herstelweek' },
    en: { long: 'Long session', tempo: 'Tempo', int: 'Intervals', easy: 'Easy', goal: 'Goal', race: 'Race week', taper: 'Taper', rec: 'Recovery week' },
    de: { long: 'Lange Einheit', tempo: 'Tempo', int: 'Intervalle', easy: 'Locker', goal: 'Ziel', race: 'Wettkampfwoche', taper: 'Tapering', rec: 'Erholungswoche' }
  };
  var SPORTS = ['loop', 'fiets', 'gravel', 'mtb', 'wandel'];
  var clamp = function (x, a, b) { return Math.max(a, Math.min(b, Math.round(x))); };

  /* De invulling van een sessie: wat je in die tijd doet. Tijd is de maat, niet de afstand. */
  function suggest(type, ride, mins, lang) {
    var n, b;
    var T = {
      nl: { longR: 'Rustig, op een tempo waarop je kunt blijven praten. Eet en drink elk uur.', longL: 'Rustig, op een tempo waarop je kunt blijven praten. Loop het laatste kwart niet sneller dan het begin.',
        intR: '15 min inrijden, {n} × 5 min hard met 5 min rustig ertussen, daarna uitrijden.', intL: '10 min inlopen, {n} × 3 min hard met 2 min dribbelen ertussen, daarna uitlopen.',
        tempoR: '15 min inrijden, 2 × {b} min op een tempo dat je net een uur volhoudt met 5 min rustig ertussen, daarna uitrijden.', tempoL: '10 min inlopen, {n} × 8 min stevig maar beheerst met 3 min dribbelen ertussen, daarna uitlopen.',
        easyR: 'Licht verzet, hoge trapfrequentie, je moet kunnen blijven praten.', easyL: 'Heel rustig. Voelt het te makkelijk, dan doe je het goed.', goal: 'Je doel. Begin rustiger dan je denkt en verdeel je krachten.' },
      en: { longR: 'Easy, at a pace where you can keep talking. Eat and drink every hour.', longL: 'Easy, at a pace where you can keep talking. Do not run the last quarter faster than the start.',
        intR: '15 min warm-up, {n} × 5 min hard with 5 min easy in between, then spin down.', intL: '10 min warm-up, {n} × 3 min hard with 2 min jog in between, then cool down.',
        tempoR: '15 min warm-up, 2 × {b} min at a pace you could just hold for an hour with 5 min easy in between, then spin down.', tempoL: '10 min warm-up, {n} × 8 min firm but controlled with 3 min jog in between, then cool down.',
        easyR: 'Light gear, high cadence, you should be able to keep talking.', easyL: 'Very easy. If it feels too easy, you are doing it right.', goal: 'Your goal. Start easier than you think and spread your effort.' },
      de: { longR: 'Locker, in einem Tempo, bei dem du dich unterhalten kannst. Iss und trink jede Stunde.', longL: 'Locker, in einem Tempo, bei dem du dich unterhalten kannst. Lauf das letzte Viertel nicht schneller als den Anfang.',
        intR: '15 min einfahren, {n} × 5 min hart mit 5 min locker dazwischen, danach ausfahren.', intL: '10 min einlaufen, {n} × 3 min hart mit 2 min Trabpause, danach auslaufen.',
        tempoR: '15 min einfahren, 2 × {b} min in einem Tempo, das du gerade eine Stunde halten könntest, mit 5 min locker dazwischen, danach ausfahren.', tempoL: '10 min einlaufen, {n} × 8 min zügig, aber kontrolliert, mit 3 min Trabpause, danach auslaufen.',
        easyR: 'Leichter Gang, hohe Trittfrequenz, du solltest dich unterhalten können.', easyL: 'Ganz locker. Wenn es sich zu leicht anfühlt, machst du es richtig.', goal: 'Dein Ziel. Starte lockerer, als du denkst, und teil dir die Kräfte ein.' }
    }[lang] || null;
    if (!T) return suggest(type, ride, mins, 'nl');
    if (type === 'goal') return T.goal;
    if (type === 'int') n = ride ? clamp((mins - 25) / 10, 3, 6) : clamp((mins - 20) / 5, 4, 8);
    if (type === 'tempo') { n = clamp((mins - 20) / 11, 2, 4); b = mins >= 90 ? 20 : mins >= 60 ? 15 : 10; }
    return (T[type + (ride ? 'R' : 'L')] || '').replace('{n}', n).replace('{b}', b);
  }

  /* Schema volgens vaste regels, in trainingstijd: ongeveer 8% erbij per week, elke vierde week herstel, afbouw voor het doel.
     base = minuten per week nu. Elke sessie is [naam, minuten, soort]. */
  function plan(goal, date, days, base, ws, lang) {
    var G = GOALS[goal], ride = G[1], race = G[0] > 0, T = LBL[lang] || LBL.nl, N = NAMES[lang] || NAMES.nl, r5 = function (x) { return Math.round(x / 5) * 5; };
    base = Math.max(base || 0, ride ? 150 : 90);
    var weeks = Math.max(2, Math.min(24, Math.ceil((date - ws) / (7 * DAY)))), peak = Math.max(base, G[2]), out = [], vol = base;
    for (var w = 0; w < weeks; w++) {
      var left = weeks - 1 - w, k, note = '';
      if (race && left === 0) { k = vol * 0.45; note = T.race; } else if (race && left === 1 && weeks > 4) { k = vol * 0.7; note = T.taper; }
      else if ((w + 1) % 4 === 0) { k = vol * 0.8; note = T.rec; } else { k = vol; vol = Math.min(peak, vol * 1.08); }
      var n = Math.max(1, days - 2), long = Math.min(k * 0.4, G[3]), q = Math.max(ride ? 45 : 30, Math.min(k * 0.22, ride ? 90 : 60)), e = Math.max(ride ? 40 : 20, Math.min((k - long - q) / n, ride ? 120 : 60)), s = [];
      if (race && left === 0) { q = ride ? 45 : 30; e = ride ? 40 : 20; s.push([T.goal + ': ' + N[goal], 0, 'goal']); } else s.push([T.long, r5(long), 'long']);
      s.push(w % 2 ? [T.tempo, r5(q), 'tempo'] : [T.int, r5(q), 'int']);
      for (var i = 0; i < n; i++) s.push([T.easy, r5(e), 'easy']);
      out.push({ w: ws + w * 7 * DAY, min: s.reduce(function (x, y) { return x + y[1]; }, 0), note: note, s: s });
    }
    return { goal: goal, date: date, days: days, unit: 'min', made: Date.now(), weeks: out };
  }

  var eng;
  function cfg() { return window.SP_CONFIG || window.SP_SITE || {}; }
  async function engine() {
    if (eng !== undefined) return eng;
    var c = cfg();
    if (typeof window.SP_COACH_ENGINE === 'function') eng = { kind: 'custom', fn: window.SP_COACH_ENGINE };
    else if (c.supabaseUrl && c.supabaseAnonKey) eng = { kind: 'remote' };
    else {
      eng = null;
      try { if (window.claude && window.claude.use) { var s = await window.claude.use('sample'); if (s) eng = { kind: 'sample', s: s }; } } catch (e) { eng = null; }
    }
    return eng;
  }
  async function available() { return !!(await engine()); }

  var strip = function (t) { var i = t.indexOf('[['); return (i >= 0 ? t.slice(0, i) : t).trim(); };
  function actions(text, now) {
    var out = [], re = /\[\[(schema|route)([^\]]*)\]\]/g, m;
    while ((m = re.exec(text))) {
      var a = {}; m[2].replace(/(\w+)=([^\s\]]+)/g, function (_, k, v) { a[k] = v; });
      if (m[1] === 'schema') {
        var d = Date.parse((a.datum || '') + 'T09:00'), n = Math.round(+a.dagen);
        if (GOALS[a.doel] && isFinite(d) && d > now + 7 * DAY && n >= 2 && n <= 7) out.push({ type: 'schema', goal: a.doel, date: d, days: n });
      } else {
        var km = +String(a.km || '').replace(',', '.');
        if (SPORTS.indexOf(a.sport) >= 0 && km >= 1 && km <= 300) out.push({ type: 'route', sport: a.sport, km: km });
      }
    }
    return out;
  }

  /* o: {mode:'app'|'site', lang, ctx, history:[{r:'u'|'c', t}], onText} → {text, actions} */
  async function ask(o) {
    var e = await engine(); if (!e) throw { code: 'none' };
    var msgs = [];
    o.history.slice(-MAX_TURNS).forEach(function (m) {
      var role = m.r === 'u' ? 'user' : 'assistant', t = String(m.t || '').slice(0, MAX_CHARS); if (!t) return;
      if (msgs.length && msgs[msgs.length - 1].role === role) msgs[msgs.length - 1].content += '\n' + t; else msgs.push({ role: role, content: t });
    });
    while (msgs.length && msgs[0].role !== 'user') msgs.shift();
    if (!msgs.length || msgs[msgs.length - 1].role !== 'user') throw { code: 'failed' };
    var ctx = String(o.ctx || '').slice(0, 1200), today = new Date().toISOString().slice(0, 10), text = '';
    if (e.kind === 'remote') {
      var c = cfg(), tok = (window.SP_TOKEN && (await window.SP_TOKEN())) || c.supabaseAnonKey;
      var r = await fetch(c.supabaseUrl + '/functions/v1/coach', { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: c.supabaseAnonKey, Authorization: 'Bearer ' + tok }, body: JSON.stringify({ mode: o.mode, lang: o.lang, ctx: ctx, messages: msgs }) });
      if (r.status === 429) throw { code: 'rate_limited' };
      if (!r.ok) throw { code: 'failed' };
      text = (await r.json()).text || '';
    } else {
      var sys = window.SP_PROMPT(o.mode, o.lang, ctx, today);
      if (e.kind === 'custom') text = await e.fn(msgs, sys);
      else {
        var input = msgs.map(function (m, i) { return i ? m : { role: 'user', content: sys + '\n\n---\n\n' + m.content }; });
        var res = await e.s(input, { modelTier: 'quick', cache: false, onText: o.onText ? function (x) { o.onText(strip(x.text || '')); } : undefined });
        text = res.text || '';
      }
    }
    return { text: strip(text), actions: actions(text, Date.now()) };
  }

  return { plan: plan, suggest: suggest, ask: ask, available: available, goals: GOALS, names: function (l) { return NAMES[l] || NAMES.nl; }, _actions: actions };
})();
