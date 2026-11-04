// El cierre funciona aunque falle el script del menú.
(() => {
 const start = performance.now(), loader = document.getElementById('loader');
 let done = false;
 document.documentElement.classList.add('loading');
 const finish = () => {
  if (done) return;
  done = true;
  document.documentElement.classList.remove('loading');
  loader.classList.add('loader-done');
  setTimeout(() => { loader.hidden = true; }, 350);
 };
 window.addEventListener('load', () => setTimeout(finish, Math.max(0, 600 - (performance.now() - start))), { once: true });
 setTimeout(() => { if (!done) document.getElementById('loader-text').textContent = 'Ya casi… la plancha está re-caliente'; }, 4000);
 setTimeout(finish, 5600);
})();
