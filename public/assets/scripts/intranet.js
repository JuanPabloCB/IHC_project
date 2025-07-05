//Leer correo para mostrar en Dashboard/Main
window.addEventListener("DOMContentLoaded", () => {
  const correo = localStorage.getItem("correoGuardado");
  if (correo) {
    const nombre = correo.split("@")[0];
    document.getElementById("Bienvenida").textContent = `Bienvenido ${nombre}, aquí estoy para ti.`;
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const nombre = localStorage.getItem('usuarioNombre');
  const saludoEl = document.getElementById('saludo-usuario');

  if (nombre && saludoEl) {
    saludoEl.textContent = `Bienvenido ${nombre}, aquí estoy para ti.`;
  }
});

