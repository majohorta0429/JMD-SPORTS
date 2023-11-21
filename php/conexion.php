<?php
// Definimos las credenciales de la base de datos
$servidor = "127.0.0.1";
$usuario = "jmdsports";
$contraseña = 'Vc)EjLPnfX44_vpo';
$base_de_datos = "jmdsports";
$puerto = 3307;

// Creamos la conexión a la base de datos utilizando la función mysqli_connect
$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_de_datos, $puerto);

// Verificamos si la conexión fue exitosa
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Cerramos la conexión a la base de datos utilizando la función mysqli_close
//mysqli_close($conexion);
?>
