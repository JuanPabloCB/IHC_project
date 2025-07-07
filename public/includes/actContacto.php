<?php

include('./includes/conexion.php');

if (isset($_POST['enviar'])) {
    if(
    $nombres = $_POST['nombres'] >= 1 &&
    $apellidos = $_POST['apellidos'] >= 1 &&
    $correo = $_POST['correo'] >= 1 &&
    $mensaje = $_POST['mensaje'] >= 1
    ) {
        $nombres = trim($_POST['nombres']);
        $apellidos = trim($_POST['apellidos']);
        $correo = trim($_POST['correo']);
        $mensaje = trim($_POST['mensaje']);
        $consulta = "INSERT INTO visitante(nombres, apellidos, correo, mensaje) VALUES ('$nombres', '$apellidos', '$correo', '$mensaje')";

        $verificarCorreo = mysqli_query($conexion, "SELECT * FROM visitante WHERE correo='$correo'");

        if(mysqli_num_rows($verificarCorreo) > 0){
        echo "
        <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
        <script>
            Swal.fire({
                icon: 'warning',
                title: 'Correo ya registrado',
                text: 'El correo ya está registrado, por favor ingrese otro.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location = \"contacto.php\";
            });
        </script>
        ";
        exit();
        }
            $resultado = mysqli_query($conexion, $consulta);
            if($resultado){
                echo "
                <script src=\"https://cdn.jsdelivr.net/npm/sweetalert2@11\"></script>
                <script>
                    Swal.fire({
                        icon: 'success',
                        title: '¡Mensaje enviado correctamente!',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        window.location = \"contacto.php\";
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
                        title: 'Error al enviar el mensaje',
                        text: 'Por favor intente nuevamente.',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        window.location = \"contacto.php\";
                    });
                </script>
                ";
                exit();
            }
    } else {
        echo "
        <script>
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor complete todos los campos.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location = \"contacto.php\";
            });
        </script>
        ";
    }
    
}
?>