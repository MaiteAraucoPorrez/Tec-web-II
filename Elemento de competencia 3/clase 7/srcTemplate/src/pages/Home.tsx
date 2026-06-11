import Hero from "../components/Hero";

function Home(): JSX.Element {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="cards">

          <div className="card">
            <h3>Diseño Web</h3>
            <p>Páginas modernas y responsivas.</p>
          </div>

          <div className="card">
            <h3>Sistemas</h3>
            <p>Software personalizado para empresas.</p>
          </div>

          <div className="card">
            <h3>Soporte Técnico</h3>
            <p>Redes, hardware y mantenimiento.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;