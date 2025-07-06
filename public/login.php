<?php
include("./includes/conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $correo = trim($_POST['correo']);
  $contraseña = trim($_POST['contraseña']);

  if (empty($correo) || empty($contraseña)) {
    $mensaje = "<script>
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, ingresa tu correo y contraseña.',
        confirmButtonColor: '#00bcd4',
      });
    </script>";
  } else if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $mensaje = "<script>
      Swal.fire({
        icon: 'warning',
        title: 'Correo no válido',
        text: 'Ingresa un correo electrónico válido.',
        confirmButtonColor: '#00bcd4',
      });
    </script>";
  } else {
    $consulta = "SELECT * FROM usuario WHERE correo='$correo' AND contraseña='$contraseña'";
    $resultado = mysqli_query($conexion, $consulta);

    if (mysqli_num_rows($resultado) > 0) {
      $mensaje = "<script>
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Inicio de sesión exitoso.',
          confirmButtonColor: '#00bcd4',
        }).then(() => {
          window.location.href = 'intranet.html';
        });
      </script>";
    } else {
      $mensaje = "<script>
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'Correo o contraseña incorrectos.',
          confirmButtonColor: '#00bcd4',
        });
      </script>";
    }
  }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MindEcho - Iniciar Sesión</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="assets/styles/login.css" />
  <link rel="icon" href="assets/images/logo.png" type="image/png" />
</head>
<body>

  <!-- HEADER -->
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
    <img src="assets/images/login 2.jpeg" alt="Fondo" />
    <div class="overlay"></div>

    <div class="login-box">
      <div class="login-left">
        <h2>Iniciar Sesión</h2>
        <form action="login.php" method="post">
          <div class="form-group">
            <img src="assets/images/correo.png" alt="Correo" />
            <input type="email" name="correo" placeholder="Correo Electrónico" id="email" />
          </div>

          <div class="form-group">
            <img src="assets/images/key.png" alt="Contraseña" />
            <input type="password" name="contraseña" placeholder="Contraseña" id="password" />
            <img src="assets/images/ojo.png" alt="Mostrar contraseña" id="eyeOpen" class="eye-icon" style="display: none;" />
            <img src="assets/images/invisible.png" alt="Ocultar contraseña" id="eyeClosed" class="eye-icon" />
          </div>

          <p id="forgot-password" class="forgot">¿Olvidaste tu contraseña?</p>
          <button type="submit" class="btn-submit" id="loginBtn">Acceder</button>
        </form>
      </div>

      <div class="login-right">
        <p>¿Nuevo aquí? Crea una cuenta en <a href="./registro.php">Registrar</a></p>
        <p>O también con:</p>
        <div class="social-icons">
          <img src="assets/images/google.png" alt="Google" />
          <img src="assets/images/facebook.png" alt="Facebook" />
          <img src="assets/images/x.png" alt="X" />
        </div>
        <div class="back">
          <a href="index.html" class="back">
            <img src="assets/images/triangulo.png" alt="Volver" /> Volver
          </a>
        </div>
      </div>
    </div>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="assets/scripts/login.js"></script>
  <?php if (isset($mensaje)) { echo $mensaje; } ?>
</body>
</html>