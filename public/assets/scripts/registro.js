document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("registerBtn");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!name || !fechaNacimiento || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    if (!terms) {
      Swal.fire({
        icon: "info",
        title: "Acepta las políticas",
        text: "Debes aceptar las Políticas de Privacidad.",
      });
      return;
    }

    fetch('./includes/registrar.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombresyApellidos: name,
        fechaNacimiento: fechaNacimiento,
        correo: email,
        contraseña: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        localStorage.setItem("usuarioNombre", name);
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          window.location.href = "intranet.html";
        });
      } else {
        Swal.fire({
          icon: data.status === "warning" ? "warning" : "error",
          title: data.status === "warning" ? "Advertencia" : "Error",
          text: data.message,
        });
      }
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al registrar.",
      });
    });
  });

  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  const passwordInput = document.getElementById('password');
  const eyeClosed = document.getElementById('eyeClosed');
  const eyeOpen = document.getElementById('eyeOpen');

  if (passwordInput && eyeClosed && eyeOpen) {
    eyeClosed.addEventListener('click', function () {
      passwordInput.type = 'text';
      eyeClosed.style.display = 'none';
      eyeOpen.style.display = 'inline';
    });

    eyeOpen.addEventListener('click', function () {
      passwordInput.type = 'password';
      eyeOpen.style.display = 'none';
      eyeClosed.style.display = 'inline';
    });
  }
});