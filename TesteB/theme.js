(function () {
  let savedTheme;
  try { savedTheme = localStorage.getItem('theme'); } catch (error) { /* Storage may be unavailable. */ }
  if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    function updateButton() {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
      button.querySelector('span').textContent = dark ? '\u2600' : '\u263d';
    }
    button.addEventListener('click', function () {
      const dark = document.documentElement.dataset.theme !== 'dark';
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (error) { /* Keep the current page usable. */ }
      updateButton();
    });
    updateButton();
  });
}());
