const passwordInput = document.getElementById('password');
const eyeOpen = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');

eyeOpen.addEventListener('click', () => {
  passwordInput.type = 'password';
  eyeOpen.style.display = 'none';
  eyeClosed.style.display = 'inline';
});

eyeClosed.addEventListener('click', () => {
  passwordInput.type = 'text';
  eyeClosed.style.display = 'none';
  eyeOpen.style.display = 'inline';
});

// Elementos
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, ingresa tu correo y contraseña.',
        confirmButtonColor: '#00bcd4'
      });
    } else if (!email.includes('@')) {
      Swal.fire({
        icon: 'warning',
        title: 'Correo no válido',
        text: 'Ingresa un correo electrónico válido.',
        confirmButtonColor: '#00bcd4'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso.',
        confirmButtonColor: '#00bcd4'
      }).then(() => {
        window.location.href = 'index.html';
      });
    }
  });
});


