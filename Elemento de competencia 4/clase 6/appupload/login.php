<?php

require 'config/cors.php';

header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods: POST');

require 'vendor/autoload.php';

require 'config/database.php';

require 'config/jwt.php';

use Firebase\JWT\JWT;

$data = json_decode(
    file_get_contents("php://input")
);

$usuario = $data->usuario ?? '';

$password = $data->password ?? '';

$passwordSHA1 = sha1($password);

$db = new Database();

$conn = $db->connect();

$query = "
SELECT *
FROM usuarios
WHERE usuario = :usuario
LIMIT 1
";

$stmt = $conn->prepare($query);

$stmt->bindParam(':usuario', $usuario);

$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {

    http_response_code(401);

    echo json_encode([
        'success' => false,
        'message' => 'Usuario no encontrado'
    ]);

    exit;
}

if ($passwordSHA1 !== $user['password']) {

    http_response_code(401);

    echo json_encode([
        'success' => false,
        'message' => 'Password incorrecto'
    ]);

    exit;
}

$payload = [

    'iss' => JWT_ISSUER,

    'iat' => time(),

    'exp' => time() + JWT_EXPIRE,

    'user' => [

        'id' => $user['id'],

        'usuario' => $user['usuario'],

        'rol' => $user['rol']
    ]
];

$token = JWT::encode(
    $payload,
    JWT_SECRET,
    'HS256'
);

echo json_encode([

    'success' => true,

    'token' => $token,

    'user' => [

        'id' => $user['id'],

        'usuario' => $user['usuario'],

        'rol' => $user['rol']
    ]
]);