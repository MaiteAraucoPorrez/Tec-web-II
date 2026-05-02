import { type JSX } from "react";
import type { Producto } from "../types/Producto.ts";

interface Props {
  producto: Producto;
}

function ProductoCard({
  producto
}: Props): JSX.Element {

  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <p>ID: {producto.id}</p>
      <p>Nombre: {producto.nombre}</p>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
      <p>Disponible: {producto.disponible ? "Sí" : "No"}</p>
      <p>Categoria: {producto.categoria}</p>
    </div>
  );
}

export default ProductoCard;