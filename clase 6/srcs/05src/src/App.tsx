import "./App.css";
import UsuarioCard from "./components/UsuarioCard";
import type { Usuario } from "./types/Usuario";

function App(): JSX.Element {

  const usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "Ana",
      edad: 21,
      activo: true,
      rol: "admin"
    },
    {
      id: 2,
      nombre: "Luis",
      edad: 24,
      activo: false,
      rol: "estudiante"
    },
    {
      id: 3,
      nombre: "Carla",
      edad: 28,
      activo: true,
      rol: "docente"
    }
  ];

  return (
    <div className="contenedor">
      <h1>Sistema Usuarios</h1>

      {usuarios.map((usuario) => (
        <UsuarioCard
          key={usuario.id}
          usuario={usuario}
        />
      ))}

    </div>
  );
}

export default App;