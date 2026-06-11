import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
        <h2>Dashboard</h2>

        <div className="cards">
          <div className="card">
            <h3>Niños Inscritos</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Paralelos Activos</h3>
            <p>6</p>
          </div>

          <div className="card">
            <h3>Docentes</h3>
            <p>10</p>
          </div>
        </div>
    </>
  );
}