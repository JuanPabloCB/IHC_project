document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("registerBtn");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); // Evita recarga

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    // Validación
    if (!name || !dob || !email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    }

    if (!terms) {
      Swal.fire({
        icon: 'info',
        title: 'Acepta las políticas',
        text: 'Debes aceptar las Políticas de Privacidad.',
      });
      return;
    }

    // Guardar nombre
    localStorage.setItem("usuarioNombre", name);

    // Mensaje de éxito y redirección
    Swal.fire({
      icon: 'success',
      title: '¡Cuenta creada con éxito!',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      window.location.href = "intranet.html"; // Redirige al dashboard
    });
  });

  // Menú hamburguesa
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

