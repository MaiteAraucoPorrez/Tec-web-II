<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "database.php";

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$usuario = $data["usuario"] ?? "";
$password = $data["password"] ?? "";

$password_sha1 = sha1($password);

$sql = "SELECT * FROM usuarios
WHERE usuario = ?
AND password = ?";

$stmt = $conexion->prepare($sql);

$stmt->bind_param(
    "ss",
    $usuario,
    $password_sha1
);

$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

    $user = $resultado->fetch_assoc();

    $_SESSION['usuario'] = $user["usuario"];

    echo json_encode([
        "success" => true,
        "message" => "Login correcto",
        "user" => [
            "id" => $user["id"],
            "usuario" => $user["usuario"],
            "rol" => $user["rol"]
        ]
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Usuario o password incorrectos"
    ]);
}