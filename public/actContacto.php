<?php

include('conexion.php');

if (isset($_POST['enviar'])) {
    if(
    $nombre = $_POST['nombre'] >= 1 &&
    $apellidos = $_POST['apellidos'] >= 1 &&
    $correo = $_POST['correo'] >= 1 &&
    $mensaje = $_POST['mensaje'] >= 1
    ) {
        $nombre = trim($_POST['nombre']);
        $apellidos = trim($_POST['apellidos']);
        $correo = trim($_POST['correo']);
        $mensaje = trim($_POST['mensaje']);
        $consulta = "INSERT INTO visitante(nombre, apellidos, correo, mensaje)
                VALUES ('$nombre', '$apellidos', '$correo', '$mensaje')";

        $verificarCorreo = mysqli_query($conexion, "SELECT * FROM visitante WHERE correo='$correo'");

        if(mysqli_num_rows($verificarCorreo) > 0){
            echo '
            <script>
                alert("El correo ya está registrado, por favor ingrese otro.");
                window.location = "contacto.php";
            </script>';
            exit();
        }
            $resultado = mysqli_query($conexion, $consulta);
            if($resultado){
                echo '
                <script>
                    alert("¡Mensaje enviado correctamente!");
                    window.location = "contacto.php";
                </script>';
            } else {
                echo '
                <script>
                    alert("Error al enviar el mensaje, por favor intente nuevamente.");
                    window.location = "contacto.php";
                </script>';
            }
    } else {
        echo '
        <script>
            alert("Por favor complete todos los campos.");
            window.location = "contacto.php";
        </script>';
    }
    
}
?>