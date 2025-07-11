<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuración</title>
    <link rel="stylesheet" href="assets/styles/configuracion.css">
</head>
<body class="light-theme">
    <div class="container">
        <div class="sidebar">
            <img src="assets/images/usuario.png" alt="Avatar">
            <a href="../public/index.html">Inicio</a>
            <a href="../public/login.php" onclick="logout()">Cerrar Sesión</a>
        </div>
        <div class="main">
            <a href="../public/intranet.html" class="volver">&larr; Volver</a>

            <h1>Configuración</h1>

            <button class="accordion">Cuenta</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Nombre de usuario</label>
                        <small>Cambia tu nombre de usuario</small>
                    </div>
                    <input type="text" class="select-styled" value="Usuario123" style="width: 150px;">
                </div>
                <div class="config-item">
                    <div>
                        <label>Correo electrónico</label>
                        <small>Actualiza tu email</small>
                    </div>
                    <input type="email" class="select-styled" value="usuario@email.com" style="width: 200px;">
                </div>
                <div class="config-item">
                    <div>
                        <label>Contraseña</label>
                        <small>Cambia tu contraseña actual</small>
                    </div>
                    <button class="change-password-btn" id="changePasswordBtn">Cambiar Contraseña</button>
                </div>
            </div>

            <button class="accordion">Notificaciones</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Notificaciones push</label>
                        <small>Recibe notificaciones en tu dispositivo</small>
                    </div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="config-item">
                    <div>
                        <label>Tipo de notificación</label>
                        <small>Elige cómo recibir las notificaciones</small>
                    </div>
                    <div class="radio-group">
                        <div class="radio-item">
                            <input type="radio" id="vibration" name="notification-type" value="vibration" checked>
                            <label for="vibration">Vibración</label>
                        </div>
                        <div class="radio-item">
                            <input type="radio" id="sound" name="notification-type" value="sound">
                            <label for="sound">Sonido</label>
                        </div>
                    </div>
                </div>
                <div class="config-item">
                    <div>
                        <label>Recordatorios de bienestar</label>
                        <small>Recibe recordatorios para cuidar tu salud mental</small>
                    </div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <button class="accordion">Tamaño de texto</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Tamaño de fuente</label>
                        <small>Ajusta el tamaño del texto</small>
                    </div>
                    <div class="text-size-container">
                        <span>A</span>
                        <input type="range" class="text-size-slider" min="12" max="24" value="16" id="textSizeSlider">
                        <span style="font-size: 20px;">A</span>
                    </div>
                </div>
                <div class="text-preview" id="textPreview">
                    Texto de muestra para previsualizar
                </div>
            </div>

            <button class="accordion">Idioma</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Idioma de la aplicación</label>
                        <small>Selecciona tu idioma preferido</small>
                    </div>
                    <select class="select-styled">
                        <option value="es" selected>Español</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="pt">Português</option>
                    </select>
                </div>
            </div>

            <button class="accordion">Apariencia</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Tema de la aplicación</label>
                        <small>Elige el tema visual</small>
                    </div>
                    <div class="theme-buttons">
                        <button class="theme-btn active" data-theme="light">Claro</button>
                        <button class="theme-btn" data-theme="dark">Oscuro</button>
                        <button class="theme-btn" data-theme="auto">Automático</button>
                    </div>
                </div>
            </div>

            <button class="accordion">Privacidad y Seguridad</button>
            <div class="panel">
                <div class="config-item">
                    <div>
                        <label>Autenticación de dos factores</label>
                        <small>Se enviará un código a tu correo electrónico</small>
                    </div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="config-item">
                    <div>
                        <label>Historial de conversaciones</label>
                        <small>Mantener historial de tus conversaciones</small>
                    </div>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <button class="accordion">Eliminar cuenta</button>
            <div class="panel">
                <p>Aquí puedes eliminar tu cuenta permanentemente.</p>
                <button id="openModal" style="background-color: #ff7b7b; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer;">
                    Eliminar Cuenta
                </button>
            </div>
        </div>
    </div>

    <!-- Modal de Confirmación Eliminar Cuenta -->
    <div class="modal-overlay" id="modal">
        <div class="modal-content">
            <h2>Confirmación de Eliminación de Cuenta</h2>
            <p>Antes de eliminar su cuenta, debemos comprobar si es usted:</p>
            <form method="post">
                <div class="input-group">
                    <input type="email" name="correo" placeholder="Correo Electrónico">
                </div>

                <div class="input-group">
                    <input type="password" name="contraseña" placeholder="Contraseña">
                </div>

                <button class="btn-cancel" id="closeModal">Volver</button>
                <button class="btn-delete" name="eliminar">Eliminar Cuenta</button>
            </form>
            <?php
            include('./includes/actEliminar.php');
            ?>
        </div>
    </div>

    <!-- Modal de Cambio de Contraseña -->
    <div class="modal-overlay password-modal" id="passwordModal">
        <div class="modal-content">
            <h2>Cambiar Contraseña</h2>
            <p>Ingresa tu contraseña actual y la nueva contraseña:</p>

            <div class="input-group password-field">
                <input type="password" placeholder="Contraseña actual" id="currentPassword">
                <button type="button" class="password-toggle" onclick="togglePassword('currentPassword')">Mostrar</button>
            </div>

            <div class="input-group password-field">
                <input type="password" placeholder="Nueva contraseña" id="newPassword">
                <button type="button" class="password-toggle" onclick="togglePassword('newPassword')">Mostrar</button>
            </div>

            <div class="input-group password-field">
                <input type="password" placeholder="Confirmar nueva contraseña" id="confirmPassword">
                <button type="button" class="password-toggle" onclick="togglePassword('confirmPassword')">Mostrar</button>
            </div>

            <button class="btn-cancel" id="closePasswordModal">Cancelar</button>
            <button class="change-password-btn" id="savePasswordBtn">Cambiar Contraseña</button>
        </div>
    </div>

    <script src="assets/scripts/configuracion.js"></script>
</body>
</html>
