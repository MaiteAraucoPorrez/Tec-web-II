<?php

require 'config/cors.php';

header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: *');

header('Access-Control-Allow-Methods: GET');

echo json_encode([

    'success' => true,

    'message' => 'Logout correcto'
]);