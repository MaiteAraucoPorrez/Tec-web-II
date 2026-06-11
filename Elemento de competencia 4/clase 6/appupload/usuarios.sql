CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
 );

 INSERT INTO usuarios(usuario, password, rol)
 VALUES
 ('admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Administrador'),
 ('juan', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Invitado');