<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MindEcho - Registro</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="assets/styles/registro.css" />
  <link rel="icon" href="assets/images/logo.png" type="image/png" />
</head>
<body>

<header class="navbar">
  <div class="navbar-content">
    <img src="assets/images/Logo Mindecho.png" alt="MindEcho Logo" class="logo" />

    <div class="menu-toggle" id="menuToggle">
      <i class="fas fa-bars"></i>
    </div>

    <nav class="menu" id="mainMenu">
      <a href="./index.html">Inicio</a>
      <a href="./nosotros.html">Nosotros</a>
      <a href="./experiencias.html">Experiencias</a>
      <a href="./contacto.php">Contacto</a>
      <a href="./login.php" class="login-button responsive">Iniciar Sesión</a>
    </nav>

    <a href="./login.php" class="login-button desktop">Iniciar Sesión</a>
  </div>
</header>

<main>
  <img src="assets/images/registro.jpeg" alt="Fondo" />
  <div class="overlay"></div>

  <div class="registro-box">
    <h2>Regístrate</h2>

    <form id="registerForm">
      <div class="form-group">
        <img src="assets/images/avatar.png" alt="Usuario" />
        <input type="text" name="nombresyApellidos" placeholder="Nombres y Apellidos" id="name" />
      </div>

      <div class="form-group">
        <img src="assets/images/calendario.png" alt="Fecha" />
        <input type="date" name="fechaNacimiento" id="fechaNacimiento" />
      </div>

      <div class="form-group">
        <img src="assets/images/correo.png" alt="Correo" />
        <input type="email" name="correo" placeholder="Correo Electrónico" id="email" />
      </div>

      <div class="form-group">
        <img src="assets/images/key.png" alt="Contraseña" />
        <input type="password" name="contraseña" placeholder="Contraseña" id="password" />
        <img src="assets/images/ojo.png" alt="Mostrar contraseña" id="eyeClosed" style="height: 20px; cursor: pointer;" />
        <img src="assets/images/invisible.png" alt="Ocultar contraseña" id="eyeOpen" style="height: 20px; cursor: pointer; display: none;" />
      </div>

      <div class="checkbox-container">
        <label>
          <input type="checkbox" id="terms" />
          He leído y acepto las <a href="#">Políticas de Privacidad</a>
        </label>
      </div>

      <button type="submit" class="btn-submit" id="registerBtn">Crear Cuenta</button>
    </form>

    <div class="line"></div>

    <p class="login-link">
      ¿Ya tienes una cuenta? <a href="login.php">Entra aquí</a>
    </p>

    <p>Puedes iniciar sesión con:</p>
    <div class="social-icons">
      <img src="assets/images/google.png" alt="Google" />
      <img src="assets/images/facebook.png" alt="Facebook" />
      <img src="assets/images/x.png" alt="X" />
    </div>

    <div class="back">
      <img src="assets/images/triangulo.png" alt="Volver" />
      <a href="index.html">Volver</a>
    </div>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="assets/scripts/registro.js"></script>

</body>
</html>
