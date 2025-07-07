
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');

    if (!toggle || !menu) {
      console.warn("No se encontró el botón o menú");
      return;
    }

    toggle.addEventListener('click', function () {
      menu.classList.toggle('show');
      console.log("Menú toggled:", menu.classList.contains('show')); // Para verificar en consola
    });
  });

