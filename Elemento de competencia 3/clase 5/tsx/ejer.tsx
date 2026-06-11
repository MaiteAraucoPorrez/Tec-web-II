import React from "react";
import { useState } from "react"; // hook de estado

export default function App(): React.JSX.Element {

  // Estado de productos
  const [productos, setProductos] = useState<string[]>([]);

  // Estado del input
  const [nuevoProducto, setNuevoProducto] = useState<string>("");

  function eliminarProducto(indexEliminar: number): void {
    const nuevaLista = [
    ...productos.slice(0, indexEliminar),
    ...productos.slice(indexEliminar + 1)
    ];
    //Crea una nueva lista -cortando- el elemento

    // Actualizamos el estado
    setProductos(nuevaLista);
  }

  // Función para agregar producto
  function agregarProducto(): void {

    // Validar vacío
    if (nuevoProducto.trim() === "") return;

    // Evitar duplicados
    if (productos.includes(nuevoProducto)) {
    alert("El producto ya existe");
    return;
    }

    // Agregar producto
    setProductos([...productos, nuevoProducto]);

    // Limpiar input
    setNuevoProducto("");
  }

  return (
    <div>
      <h2>Lista de Compras</h2>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ej: Leche"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />

      {/* BOTÓN */}
      <button onClick={agregarProducto}>
        Agregar
      </button>

      {/* RENDERIZADO CONDICIONAL */}
      {
        productos.length === 0
        ? <p>No hay productos</p>
        : (
          <ul>
            {
              productos.map((prod, index) => (
                <li key={index}>
                  {index + 1}. {prod}

                  {/* BOTÓN ELIMINAR */}
                    <button onClick={() => eliminarProducto(index)}>
                    X
                    </button>
                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}