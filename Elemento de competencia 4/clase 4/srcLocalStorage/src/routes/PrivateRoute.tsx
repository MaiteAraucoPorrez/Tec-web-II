/*
Este componente llamado PrivateRoute protege rutas privadas.
Su función es:
verificar si el usuario inició sesión
permitir acceso si está autenticado
redireccionar al login si NO está autenticado
Es una de las bases de autenticación en React.
*/
import { Navigate } from "react-router-dom";

// children REPRESENTA EL COMPONENTE HIJO QUE SERA PROTEGIDO
interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  // OBTIENE EL ESTADO DE AUTENTICACION DESDE localStorage
  const isAuth = localStorage.getItem("isAuth");
  return isAuth === "true" ? children : <Navigate to="/" />;
}