<?php

include('./conexion.php');

if (isset($_POST['eliminar'])) {
    $correo = trim($_POST['correo']);
    $contraseña = trim($_POST['contraseña']);

    if (empty($correo) || empty($contraseña)) {
        echo "
        <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
        <script>
            Swal.fire({
                icon: 'warning',
                title: 'Campos vacíos',
                text: 'Por favor, completa todos los campos.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location = \"intranet.html\";
            });
        </script>";
        exit();
    }

    // Usar consultas preparadas para evitar inyección SQL
    $stmt = $conexion->prepare("SELECT * FROM usuario WHERE correo = ? AND contraseña = ?");
    $stmt->bind_param("ss", $correo, $contraseña);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $stmt_del = $conexion->prepare("DELETE FROM usuario WHERE correo = ?");
        $stmt_del->bind_param("s", $correo);
        $stmt_del->execute();
        echo "
        <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Cuenta eliminada',
                text: 'Tu cuenta ha sido eliminada exitosamente.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = \"intranet.html\";
            });
        </script>";
        exit();
    } else {
        echo "
        <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
        <script>
            Swal.fire({
                icon: 'warning',
                title: 'Correo o contraseña incorrectos',
                text: 'Por favor, verifica tus credenciales e inténtalo de nuevo.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location = \"intranet.html\";
            });
        </script>";
        exit();
    }
}
?>