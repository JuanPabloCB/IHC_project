<?php
include('conexion.php');

// Verifica si es una petición POST con datos JSON de fetch
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $nombresyApellidos = trim($data['nombresyApellidos']);
    $fechaNacimiento = trim($data['fechaNacimiento']);
    $correo = trim($data['correo']);
    $contraseña = trim($data['contraseña']);

    if ($nombresyApellidos == "" || $fechaNacimiento == "" || $correo == "" || $contraseña == "") {
        echo json_encode(["status" => "error", "message" => "Por favor complete todos los campos."]);
        exit();
    }

    $verificarCorreo = mysqli_query($conexion, "SELECT * FROM usuario WHERE correo='$correo'");

    if (mysqli_num_rows($verificarCorreo) > 0) {
        echo json_encode(["status" => "warning", "message" => "El correo ya está registrado, por favor ingrese otro."]);
        exit();
    }

    $consulta = "INSERT INTO usuario(nombresyApellidos, fechaNacimiento, correo, contraseña) VALUES ('$nombresyApellidos', '$fechaNacimiento', '$correo', '$contraseña')";
    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado) {
        echo json_encode(["status" => "success", "message" => "¡Usuario registrado correctamente!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al registrar el usuario."]);
    }
    exit();
}
?>