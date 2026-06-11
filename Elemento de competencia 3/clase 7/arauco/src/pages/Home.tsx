import type { JSX } from "react";
import Hero from "../components/Banner";

function Home(): JSX.Element {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="cards">

          <div className="card">
            <h3>Desarrollo Web</h3>
            <p>
              Sitios rápidos, modernos y adaptables para empresas,
              profesionales y emprendimientos.
            </p>
          </div>

          <div className="card">
            <h3>Automatización</h3>
            <p>
              Sistemas administrativos y herramientas digitales
              para mejorar procesos internos.
            </p>
          </div>

          <div className="card">
            <h3>Asesoría Técnica</h3>
            <p>
              Soporte, mantenimiento y acompañamiento tecnológico
              para impulsar tu negocio.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;