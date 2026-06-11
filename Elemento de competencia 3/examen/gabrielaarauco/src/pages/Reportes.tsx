import type { JSX } from "react";

export default function Reportes(): JSX.Element {

  return (
    <>
    <main className="main">
      <h2>Reportes</h2>

      <div className="cards">
        <div className="card">
          <h3>Asistencia</h3>
          <p>Reporte mensual</p>
        </div>

        <div className="card">
          <h3>Rendimiento</h3>
          <p>Evaluación trimestral</p>
        </div>

        <div className="card">
          <h3>Comportamiento</h3>
          <p>Seguimiento semanal</p>
        </div>
      </div>
    </main>
    </>
  );
}
