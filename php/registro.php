<?php
// Se utiliza para llamar al archivo que contiene la conexión a la base de datos
require 'conexion.php';

// Validamos que el formulario y que el botón registro haya sido presionado
if(isset($_POST['registro'])) {
    // Obtener los valores enviados por el formulario
    $usuario = $_POST['nombre_user'];
    $contrasena = $_POST['contrasena_user'];
    $correo = $_POST['correo_user'];

    // Utilizamos una consulta preparada para evitar SQL injection
    $sql = "INSERT INTO usuarios (nombre_user, contrasena_user, correo_user) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($conexion, $sql);

    // Vinculamos los parámetros
    mysqli_stmt_bind_param($stmt, 'sss', $usuario, $contrasena, $correo);

    // Ejecutamos la consulta
$resultado = mysqli_stmt_execute($stmt);

if($resultado) {
    // Inserción correcta
    echo "¡Se insertaron los datos correctamente!";
} else {
    // Inserción fallida
    echo "¡No se puede insertar la información!"."<br>";
    echo "Error en la consulta preparada: " . mysqli_stmt_error($stmt);
}


    // Cerramos la declaración
    mysqli_stmt_close($stmt);
    
    // Cerramos la conexión a la base de datos
    mysqli_close($conexion);
}
?>
