<?php

// ==========================================
// HEADERS
// ==========================================

header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");

header(
    "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"
);

header(
    "Access-Control-Allow-Headers: Content-Type"
);


// ==========================================
// OPTIONS
// ==========================================

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    http_response_code(200);
    exit();
}


// ==========================================
// CONEXIÓN
// ==========================================

require_once "conexion.php";


// ==========================================
// MÉTODO HTTP
// ==========================================

$method = $_SERVER['REQUEST_METHOD'];


// ==========================================
// GET
// ==========================================

if ($method == "GET") {

    // obtener estudiante por código
    if (isset($_GET['codigo'])) {

        $codigo = $_GET['codigo'];

        $sql = "
            SELECT
                codigo,
                nombres,
                carrera,
                correo,
                edad
            FROM estudiantes
            WHERE codigo = ?
        ";

        $stmt = $conexion->prepare($sql);

        $stmt->bind_param("i", $codigo);

        $stmt->execute();

        $resultado = $stmt->get_result();

        $estudiante = $resultado->fetch_assoc();

        echo json_encode($estudiante);

    } else {

        // listar estudiantes
        $sql = "
            SELECT
                codigo,
                nombres,
                carrera,
                correo,
                edad
            FROM estudiantes
            ORDER BY codigo DESC
        ";

        $resultado = $conexion->query($sql);

        $estudiantes = [];

        while ($fila = $resultado->fetch_assoc()) {

            $estudiantes[] = $fila;
        }

        echo json_encode($estudiantes);
    }
}


// ==========================================
// POST
// ==========================================

if ($method == "POST") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $nombres = $data['nombres'];
    $carrera = $data['carrera'];
    $correo = $data['correo'];
    $edad = $data['edad'];

    $sql = "
        INSERT INTO estudiantes
        (
            nombres,
            carrera,
            correo,
            edad
        )
        VALUES (?, ?, ?, ?)
    ";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "sssi",
        $nombres,
        $carrera,
        $correo,
        $edad
    );

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Estudiante registrado"
    ]);
}


// ==========================================
// PUT
// ==========================================

if ($method == "PUT") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $codigo = $data['codigo'];

    $nombres = $data['nombres'];

    $carrera = $data['carrera'];

    $correo = $data['correo'];

    $edad = $data['edad'];

    $sql = "
        UPDATE estudiantes
        SET
            nombres = ?,
            carrera = ?,
            correo = ?,
            edad = ?
        WHERE codigo = ?
    ";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "sssii",
        $nombres,
        $carrera,
        $correo,
        $edad,
        $codigo
    );

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Estudiante actualizado"
    ]);
}


// ==========================================
// DELETE
// ==========================================

if ($method == "DELETE") {

    parse_str(
        $_SERVER['QUERY_STRING'],
        $params
    );

    $codigo = $params['codigo'];

    $sql = "
        DELETE FROM estudiantes
        WHERE codigo = ?
    ";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "i",
        $codigo
    );

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Estudiante eliminado"
    ]);
}