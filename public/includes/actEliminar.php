<?php

include('conexion.php');

$mensaje = '';

if (isset($_POST['eliminar'])) {
    $correo = trim($_POST['correo']);
    $contraseña = trim($_POST['contraseña']);
    if (empty($correo) || empty($contraseña)) {
        echo "<script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
                confirmButtonText: 'Aceptar'
            });
        </script>";
    } else {
        $consulta = "SELECT * FROM usuario WHERE correo='$correo' AND contraseña='$contraseña'";
        $resultado = mysqli_query($conexion, $consulta);
        if (mysqli_num_rows($resultado) > 0) {
            $eliminarConsulta = "DELETE FROM usuario WHERE correo='$correo' AND contraseña='$contraseña'";
            $eliminarResultado = mysqli_query($conexion, $eliminarConsulta);
            if ($eliminarResultado) {
                echo "
                <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
                <script>
                    Swal.fire({
                        icon: 'success',
                        title: '¡Cuenta eliminada correctamente!',
                        text: 'Tu cuenta ha sido eliminada con éxito.',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        window.location = \"index.html\";
                    });
                </script>
                ";
                exit();
            } else {
                echo "
                <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
                <script>
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error al eliminar el usuario.',
                        confirmButtonText: 'Aceptar'
                    });
                </script>
                ";
            }
        } else {
            echo "
            <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
            <script>
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Credenciales incorrectas.',
                    confirmButtonText: 'Aceptar'
                });
            </script>
            ";
        }
    }
}

?>