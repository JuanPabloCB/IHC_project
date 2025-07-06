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

let seleccion = '';
let tiempo = 300;
let intervalo;

function abrirModal() {
    document.getElementById('modalCalmarme').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modalCalmarme').style.display = 'none';
}

window.addEventListener('click', function (e) {
    const modal = document.getElementById('modalCalmarme');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.querySelectorAll('input[name="estadoAnimo"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        seleccion = this.value;
    });
});

function aceptarSeleccion() {
    if (seleccion === 'Respiracion') {
        cerrarModal();
        iniciarEjercicioRespiracion();
    } else {
        cerrarModal();
    }
}

function iniciarEjercicioRespiracion() {
    document.getElementById('modalRespiracion').style.display = 'flex';
    intervalo = setInterval(actualizarTimer, 1000);
}

function actualizarTimer() {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    if (segundos < 10) segundos = '0' + segundos;

    document.getElementById('timer').innerText = `${minutos}:${segundos}`;

    if (tiempo > 0) {
        tiempo--;
    } else {
        clearInterval(intervalo);
        alert('¡Ejercicio completado!');
        terminarEjercicio();
    }
}

function terminarEjercicio() {
    clearInterval(intervalo);
    document.getElementById('modalRespiracion').style.display = 'none';
    tiempo = 300;
    document.getElementById('timer').innerText = '05:00';
}
