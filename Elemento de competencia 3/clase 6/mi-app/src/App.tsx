import { type JSX } from "react";
import "./App.css";
import ProductoCard from "./components/ProductoCard";
import type { Producto } from "./types/Producto";

function App(): JSX.Element {

  const usuarios: Producto[] = [
    {
      id: 1,
      nombre: "Leche",
      precio: 15.99,
      disponible: true,
      categoria: "alimentos"
    },
    {
      id: 2,
      nombre: "Pan",
      precio: 15.99,
      disponible: false,
      categoria: "alimentos"
    },
    {
      id: 3,
      nombre: "Jugo de naranja  ",
      precio: 25.50,
      disponible: true,
      categoria: "lacteos"
    }
  ];

  return (
    <div className="contenedor">
      <h1 className="titulo-sistema">Sistema Productos</h1>

      {usuarios.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}

    </div>
  );
}

export default App;