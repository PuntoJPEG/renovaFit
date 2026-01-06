const submenu = document.querySelector('.submenu');
const submenuList = submenu.querySelector('ul');
let timeout;

submenu.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  submenuList.style.display = 'block';
});

submenu.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    submenuList.style.display = 'none';
  }, 1000000); // tiempo en milisegundos antes de cerrarse
});
