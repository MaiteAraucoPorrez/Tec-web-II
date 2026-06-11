interface Props {
  id: number;
  nombre: string;
  edad: number;
  activo: boolean;
  rol: string;
}

function UsuarioCard({
  id,
  nombre,
  edad,
  activo,
  rol
}: Props): JSX.Element {

  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>ID: {id}</p>
      <p>Edad: {edad}</p>
      <p>Activo: {activo ? "Sí" : "No"}</p>
      <p>Rol: {rol}</p>
    </div>
  );
}

export default UsuarioCard;