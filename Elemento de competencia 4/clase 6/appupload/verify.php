<?php

require 'config/cors.php';

header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods: GET');

require 'middleware/authMiddleware.php';

$user = verificarJWT();

echo json_encode([

    'success' => true,

    'user' => $user->user
]);