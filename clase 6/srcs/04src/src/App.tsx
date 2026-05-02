import "./App.css";
import UsuarioCard from "./components/UsuarioCard";

function App(): JSX.Element {

  const usuario1 = {
    id: 1,
    nombre: "Ana",
    edad: 21,
    activo: true,
    rol: "admin"
  };

  const usuario2 = {
    id: 2,
    nombre: "Luis",
    edad: 24,
    activo: false,
    rol: "estudiante"
  };

  const usuario3 = {
    id: 3,
    nombre: "Carla",
    edad: 28,
    activo: true,
    rol: "docente"
  };

  return (
    <div className="contenedor">
      <h1>Sistema Usuarios</h1>

      <UsuarioCard usuario={usuario1} />
      <UsuarioCard usuario={usuario2} />
      <UsuarioCard usuario={usuario3} />

    </div>
  );
}

export default App;