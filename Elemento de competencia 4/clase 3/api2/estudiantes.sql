# Host: localhost  (Version 5.5.5-10.4.32-MariaDB)
# Date: 2026-05-15 01:21:51
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "estudiantes"
#

CREATE TABLE `estudiantes` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) DEFAULT NULL,
  `carrera` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

#
# Data for table "estudiantes"
#

INSERT INTO `estudiantes` VALUES (1,'CARLOS','ADMINISTRACION','carlos@mail.com',22),(2,'ANA','SECRETARIADO','ana@mail.com',19),(3,'MARIA','MERCADOTECNIA','maria@mail.com',25);
