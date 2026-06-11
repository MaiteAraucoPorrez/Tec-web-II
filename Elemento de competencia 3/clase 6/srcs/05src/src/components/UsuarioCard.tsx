import type { Usuario } from "../types/Usuario";

interface Props {
  usuario: Usuario;
}

function UsuarioCard({
  usuario
}: Props): JSX.Element {

  return (
    <div className="card">
      <h3>{usuario.nombre}</h3>
      <p>ID: {usuario.id}</p>
      <p>Edad: {usuario.edad}</p>
      <p>Activo: {usuario.activo ? "Sí" : "No"}</p>
      <p>Rol: {usuario.rol}</p>
    </div>
  );
}

export default UsuarioCard;