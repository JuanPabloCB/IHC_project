<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="stylesheet" href="assets/styles/contacto.css">
    <link rel="icon" href="assets/images/logo.png" type="image/png">
</head>
<body>
    
    <header class="navbar">
    <div class="navbar-content">
    <img src="assets/images/Logo Mindecho.png" alt="MindEcho Logo" class="logo" onclick="location.href='./index.html'" style="cursor: pointer;">

        <!-- Icono hamburguesa -->
        <div class="menu-toggle" id="menuToggle">
            <i class="fas fa-bars"></i>
        </div>
    </div>

    <nav class="menu" id="mainMenu">
      <a href="./index.html">Inicio</a>
      <a href="./nosotros.html">Nosotros</a>
      <a href="./experiencias.html">Experiencias</a>
      <a href="./contacto.php">Contacto</a>

      <!-- Solo aparecerá en responsive -->
      <a href="./login.html" class="login-button responsive">Iniciar Sesión</a>
    </nav>

    <!-- Solo visible en escritorio -->
    <a href="./login.html" class="login-button desktop">Iniciar Sesión</a>
  </div>
  </header>

  <main class="contact-container">
    <h1>Contáctanos</h1>
    <form class="contact-form" method="post">
        <div class="form-row">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombres" name="nombres" placeholder="Ingrese su nombre" required>
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required>
            </div>
        </div>
        <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" id="correo" name="correo" placeholder="Ingrese su correo electrónico" required>
        </div>
        <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea type="text" id="mensaje" name="mensaje" rows="4" placeholder="Ingrese un mensaje" required></textarea>
        </div>
        <input type="submit" name="enviar" class="btn-enviar" value="Enviar">
    </form>

    <?php
    include('actContacto.php');
    ?>
</main>

<div class="footer-linea"></div>
<footer>
  <p><br></p>
  <p><br></p>
  <div class="footer-container">
    <div class="logo-social">
      <div class="logo">
        <img src="assets/images/Logo_simple.png" alt="Logo">
      </div>
      <div class="social">
        <a href="#"><img src="assets/images/facebook_footer_logo.png" alt="Facebook"></a>
        <a href="#"><img src="assets/images/youtube_footer_logo.png" alt="YouTube"></a>
        <a href="#"><img src="assets/images/instagram_footer_logo.png" alt="Instagram"></a>
      </div>
    </div>
    <div class="footer-links">
      <div>
        <h4>Ayuda</h4>
        <a href="./contacto.html">Preguntas Frecuentes</a>
        <a href="#">Servicios Externos</a>
        <a href="#">Teléfono</a>
      </div>
      <div>
        <h4>Políticas</h4>
        <a href="#">Privacidad</a>
      </div>
      <div>
        <h4>App Móvil</h4>
        <a href="#">Descargar</a>
      </div>
    </div>
  </div>
  <p><br></p>
</footer>

</body>
</html>