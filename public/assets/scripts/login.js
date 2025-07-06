document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
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

  // Menú hamburguesa
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mainMenu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Redirección olvide contraseña
  document.getElementById('forgot-password').addEventListener('click', function () {
    window.location.href = 'olvideContrasena.html';
  });
});