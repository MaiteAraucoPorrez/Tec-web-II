import "./App.css";

function App(): JSX.Element {

  function UsuarioCard(): JSX.Element {
    return (
      <div className="card">
        <h3>Ana</h3>
        <p>Edad: 21</p>
        <p>Activo: Sí</p>
        <p>Rol: admin</p>
      </div>
    );
  }

  return (
    <div className="contenedor">
      <h1>Sistema Usuarios</h1>

      <UsuarioCard />
    </div>
  );
}

export default App;