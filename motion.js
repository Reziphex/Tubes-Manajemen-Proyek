/* Animasi lokal dengan Web Animations API; tanpa dependensi atau koneksi internet. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let preference = 'on';
  try { preference = localStorage.getItem('pab1-motion') || 'on'; } catch (_) {}
  let active = [], direction = 1, lastSlide = -1;
  const enabled = () => preference !== 'off' && !reduced.matches;
  const cancel = () => { active.forEach(animation => animation.cancel()); active = []; };
  function animate(el, keyframes, options = {}) {
    if (!el || !el.animate) return;
    active.push(el.animate(keyframes, {duration:650, easing:'cubic-bezier(.2,.75,.25,1)',fill:'backwards',...options}));
  }
  function updateControls() {
    const on = enabled();
    document.body.classList.toggle('motion-on', on);
    document.body.classList.toggle('motion-off', !on);
    const button = document.querySelector('#motion-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', on ? 'Matikan animasi' : 'Aktifkan animasi');
      button.title = reduced.matches ? 'Animasi mengikuti pengaturan kurangi gerakan pada perangkat' : 'Animasi '+(on?'aktif':'nonaktif')+' (A)';
      button.disabled = reduced.matches;
      button.querySelector('.motion-state').textContent = on ? 'On' : 'Off';
    }
  }
  function set(on, persist = true) {
    preference = on ? 'on' : 'off';
    if (persist) try { localStorage.setItem('pab1-motion', preference); } catch (_) {}
    cancel();
    updateControls();
    if (enabled()) play(document.querySelector('#slide'), {replay:true});
  }
  function play(root, {detail = false, replay = false} = {}) {
    cancel();
    updateControls();
    if (!root || !enabled()) return;
    const slide = Number(document.querySelector('#current-number')?.textContent) || 1;
    if (slide !== lastSlide) direction = slide < lastSlide ? -1 : 1;
    lastSlide = slide;
    const scope = detail ? root.querySelector('.tab-content') || root : root;
    const floorLine = root.querySelector('.cover-art path[stroke="#df603a"][stroke-width="5"]');
    if (floorLine && !root.querySelector('.data-flow')) {
      const flow = floorLine.cloneNode();
      flow.setAttribute('class','data-flow');
      flow.setAttribute('aria-hidden','true');
      floorLine.after(flow);
    }
    const reveal = (el, delay = 0, distance = 20) => animate(el, [
      {opacity:0, transform:`translate3d(0,${distance}px,0)`},
      {opacity:1, transform:'translate3d(0,0,0)'}
    ], {delay});
    if (!detail) {
      animate(root, [
        {opacity:.65, transform:`translate3d(${direction*32}px,0,0) scale(.992)`},
        {opacity:1, transform:'translate3d(0,0,0) scale(1)'}
      ], {duration:650});
      reveal(root.querySelector('.slide-top'), 50, 10);
      reveal(root.querySelector('h2, .cover-title'), 120, 25);
      reveal(root.querySelector('.lede'), 210, 14);
      reveal(root.querySelector('.cover-art'), 200, 32);
      reveal(root.querySelector('.cover-bottom'), 380, 15);
      reveal(root.querySelector('.slide-foot'), 650, 10);
    } else reveal(scope, 0, 10);

    // Kartu dan poin muncul berurutan, tanpa mengubah angka atau tata letaknya.
    const items = scope.querySelectorAll('.overview-item, .stat, .detail-list li, .gate, .wbs-button, .activity-row, .path-box, .convergence, .capex-item, .role-row, .vendor-card, .risk-detail, .why-step, .test-stage, .evm-metric, .change-item, .conclusion-action, .route-step, .system-node, .money-envelope, .finance-case, .handoff-flow > div, .incident-card, .acceptance-check, .closing-steps > div');
    [...items].forEach((el,i) => reveal(el, (detail?45:240)+Math.min(i*65,600), 18));
    scope.querySelectorAll('.big-num').forEach((el,i) => {
      if (el.classList.contains('donut-label')) return;
      animate(el, [{opacity:.2,transform:'translateY(12px) scale(.92)'},{opacity:1,transform:'translateY(0) scale(1)'}],{delay:250+i*55,duration:850});
    });
    root.querySelectorAll('.gantt-bar, .mini-bar > i').forEach((el,i) => {
      el.style.transformOrigin = 'left center';
      animate(el, [{transform:'scaleX(0)'},{transform:'scaleX(1)'}], {delay:260+Math.min(i*45,500),duration:1050});
    });
    scope.querySelectorAll('.chart-click rect, .chart-svg:not(.analysis-svg) > rect').forEach((el,i) => {
      el.style.transformBox = 'fill-box';
      el.style.transformOrigin = 'center bottom';
      animate(el, [{transform:'scaleY(.01)'},{transform:'scaleY(1)'}], {delay:220+Math.min(i*65,600),duration:1100});
    });
    scope.querySelectorAll('.chart-svg polyline, .analysis-svg path').forEach((el,i) => {
      if (!el.getTotalLength) return;
      const length = el.getTotalLength();
      animate(el, [{strokeDasharray:`${length} ${length}`,strokeDashoffset:length},{strokeDasharray:`${length} ${length}`,strokeDashoffset:0}], {delay:400+i*60,duration:1600});
    });
    scope.querySelectorAll('.chart-svg circle').forEach((el,i) => animate(el,[{opacity:0},{opacity:1}],{delay:450+Math.min(i*70,1000),duration:450}));
    scope.querySelectorAll('.heatmap-cell').forEach((el,i) => animate(el,[{opacity:.2,transform:'scale(.8)'},{opacity:1,transform:'scale(1)'}],{delay:160+i*20,duration:650}));
    const donut = scope.querySelector('.donut');
    animate(donut,[{clipPath:'circle(0% at 50% 50%)',opacity:.2},{clipPath:'circle(75% at 50% 50%)',opacity:1}],{delay:200,duration:1200});
    if (replay) document.querySelector('#live-status').textContent='Animasi slide '+slide+' diputar ulang.';
  }
  function replay() { play(document.querySelector('#slide'),{replay:true}); }
  function pulse(el) {
    if (enabled() && el?.animate) el.animate([{transform:'scale(.97)',opacity:.65},{transform:'scale(1)',opacity:1}],{duration:400,easing:'ease-out'});
  }
  reduced.addEventListener('change', () => { cancel(); updateControls(); });
  window.addEventListener('storage', ev => {
    if (ev.key === 'pab1-motion') {preference = ev.newValue || 'on';cancel();updateControls();}
  });
  window.PABMotion = {play,replay,pulse,set,cancel,enabled,toggle:() => set(!enabled())};
  updateControls();
})();
