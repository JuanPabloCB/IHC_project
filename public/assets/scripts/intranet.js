document.addEventListener('DOMContentLoaded', function () {
    const talkButton = document.querySelector('.buttons-grid button:first-child');

    talkButton.addEventListener('click', function () {
        alert('¡Hola! Estoy aquí para escucharte.');
    });
});

//Leer correo para mostrar en Dashboard/Main
window.addEventListener("DOMContentLoaded", () => {
  const correo = localStorage.getItem("correoGuardado");
  if (correo) {
    const nombre = correo.split("@")[0];
    document.getElementById("bienvenida").textContent = `Bienvenido ${nombre}, aquí estoy para ti.`;
  }
});