import type { JSX } from "react";

function Productos(): JSX.Element {
  return (
    <section className="container">
      <h2>Productos</h2>

      <p>
        Ofrecemos una amplia gama de productos y servicios digitales.
      </p>

      <div className="products">
        <div className="product-card">
          <h3>Producto 1</h3>
          <p>Descripción del producto</p>
        </div>
        <div className="product-card">
          <h3>Producto 2</h3>
          <p>Descripción del producto</p>
        </div>
        <div className="product-card">
          <h3>Producto 3</h3>
          <p>Descripción del producto</p>
        </div>
      </div>
    </section>
  );
}

export default Productos;