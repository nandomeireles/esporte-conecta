// Menu hambúrguer responsivo
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const ul = nav ? nav.querySelector('ul') : null;

  if (!nav || !ul) return;

  // Cria o botão hambúrguer
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  toggle.addEventListener('click', function () {
    const isOpen = ul.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha menu ao clicar em um link
  ul.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      ul.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      ul.classList.remove('open');
      toggle.classList.remove('active');
    }
  });
});
