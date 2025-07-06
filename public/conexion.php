<?php

$conexion = mysqli_connect("localhost", "root", "", "dbmindecho");
if (!$conexion) {
    die("Error al conectar con la base de datos: " . mysqli_connect_error());
}

?>