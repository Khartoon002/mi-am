(() => {
  const ALLOW_SELECTOR = 'input, textarea, [data-allow-select]'; // allow forms or tagged elements

  function injectStyles() {
    const css = `
      .cg-noselect { -webkit-user-select:none; -ms-user-select:none; user-select:none; }
      ${ALLOW_SELECTOR}{ -webkit-user-select:text; user-select:text; }
      #cg-toast{
        position:fixed; left:50%; bottom:24px; transform:translateX(-50%);
        background:rgba(0,0,0,.85); color:#fff; padding:10px 14px; border-radius:8px;
        font:14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, Arial;
        z-index:2147483647; pointer-events:none; opacity:0; transition:opacity .2s ease;
        box-shadow:0 6px 18px rgba(0,0,0,.25);
      }`;
    const s = document.createElement('style');
    s.id = 'cg-style'; s.textContent = css;
    document.head.appendChild(s);
    document.addEventListener('DOMContentLoaded', () => document.body.classList.add('cg-noselect'));
  }

  let toastTimer;
  function toast(msg) {
    let t = document.getElementById('cg-toast');
    if (!t) { t = document.createElement('div'); t.id = 'cg-toast'; document.body.appendChild(t); }
    t.textContent = msg; t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = '0'; }, 1600);
  }

  // Block selection (except allowed)
  document.addEventListener('selectstart', e => {
    if (!e.target.closest(ALLOW_SELECTOR)) {
      e.preventDefault();
      toast("this site content can't be copied");
    }
  }, {capture:true});

  // Block right-click
  document.addEventListener('contextmenu', e => {
    if (!e.target.closest(ALLOW_SELECTOR)) {
      e.preventDefault();
      toast("this site content can't be copied");
    }
  });

  // Block copy / cut / drag
  ['copy','cut','dragstart'].forEach(type => {
    document.addEventListener(type, e => {
      if (!e.target.closest(ALLOW_SELECTOR)) {
        e.preventDefault();
        toast("this site content can't be copied");
      }
    }, {capture:true});
  });

  // Block DevTools & view-source keys
  document.addEventListener('keydown', e => {
    const k = (e.key || '').toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    if ((ctrl && (k === 'u' || k === 's' || k === 'p'))) {
      e.preventDefault(); e.stopPropagation();
      toast("this site content source code can't be viewed");
    }

    const isBlockedCombo =
      (k === 'f12') ||
      (ctrl && shift && (k === 'i' || k === 'j' || k === 'c'));

    if (isBlockedCombo) {
      e.preventDefault(); e.stopPropagation();
      toast("this site content source code can't be viewed");
    }
  }, {capture:true});

  injectStyles();
})();
