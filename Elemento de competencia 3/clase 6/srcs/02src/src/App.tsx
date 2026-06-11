import "./App.css";
import UsuarioCard from "./components/UsuarioCard";

function App(): JSX.Element {
  return (
    <div className="contenedor">
      <h1>Sistema Usuarios</h1>

      <UsuarioCard />
    </div>
  );
}

export default App;