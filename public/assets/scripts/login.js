document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const eyeOpen = document.getElementById("eyeOpen");
  const eyeClosed = document.getElementById("eyeClosed");

  // Mostrar/ocultar contraseña
  if (eyeOpen && eyeClosed && passwordInput) {
    eyeOpen.addEventListener("click", () => {
      passwordInput.type = "password";
      eyeOpen.style.display = "none";
      eyeClosed.style.display = "inline";
    });

    eyeClosed.addEventListener("click", () => {
      passwordInput.type = "text";
      eyeClosed.style.display = "none";
      eyeOpen.style.display = "inline";
    });
  }

  // Validación de login
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        Swal.fire({
          icon: "error",
          title: "Campos incompletos",
          text: "Por favor, ingresa tu correo y contraseña.",
          confirmButtonColor: "#00bcd4",
        });
        return;
      }

      if (!email.includes("@")) {
        Swal.fire({
          icon: "warning",
          title: "Correo no válido",
          text: "Ingresa un correo electrónico válido.",
          confirmButtonColor: "#00bcd4",
        });
        return;
      }

      // Éxito ficticio (no hay backend real)
      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso.",
        confirmButtonColor: "#00bcd4",
      }).then(() => {
        window.location.href = "intranet.html";
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mainMenu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

//Leer correo para mostrar en Dashboard/Main
function loginUsuario(){
  const correo = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("correoGuardado", correo);
  window.location.href = "intranet.html";
}

document.getElementById('forgot-password').addEventListener('click', function () {
  window.location.href = 'olvideContrasena.html';
});