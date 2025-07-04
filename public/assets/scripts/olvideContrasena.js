const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const successMessage = document.getElementById('success-message');

const emailForm = document.getElementById('email-form');
const resetForm = document.getElementById('reset-form');

emailForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    alert('Se ha enviado un código de recuperación a ' + email);
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  }
});

resetForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const code = document.getElementById('code').value.trim();
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (code === '') {
    alert('Por favor, ingresa el código recibido.');
    return;
  }

  if (newPassword !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  if (newPassword.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  step2.classList.add('hidden');
  successMessage.classList.remove('hidden');
});