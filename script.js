
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('ativo');

  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute(
    'aria-label',
    aberto ? 'Fechar menu' : 'Abrir menu'
  );
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelector('#ano').textContent =
  new Date().getFullYear();
