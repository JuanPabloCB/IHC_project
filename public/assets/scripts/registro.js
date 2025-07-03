document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("registerBtn");

  btn.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el botón recargue la página

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;

    // Validación
    if (!name || !dob || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (!terms) {
      alert("Debe aceptar las Políticas de Privacidad.");
      return;
    }

    // Mensaje de éxito
    alert("Cuenta creada correctamente. Redirigiendo al login...");

    // Redirige a login.html después de 1 segundo
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });
});
