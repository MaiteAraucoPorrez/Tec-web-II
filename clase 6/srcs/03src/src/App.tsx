import "./App.css";
import UsuarioCard from "./components/UsuarioCard";

function App(): JSX.Element {
  return (
    <div className="contenedor">
      <h1>Sistema Usuarios</h1>

      <UsuarioCard
        id={1}
        nombre="Ana"
        edad={21}
        activo={true}
        rol="admin"
      />

      <UsuarioCard
        id={2}
        nombre="Luis"
        edad={24}
        activo={false}
        rol="estudiante"
      />

      <UsuarioCard
        id={3}
        nombre="Carla"
        edad={28}
        activo={true}
        rol="docente"
      />

    </div>
  );
}

export default App;