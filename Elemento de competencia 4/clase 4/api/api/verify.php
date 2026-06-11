<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

session_start();

if (isset($_SESSION['usuario'])) {

    echo json_encode([
        "logged" => true,
        "usuario" => $_SESSION['usuario']
    ]);

} else {

    echo json_encode([
        "logged" => false
    ]);
}