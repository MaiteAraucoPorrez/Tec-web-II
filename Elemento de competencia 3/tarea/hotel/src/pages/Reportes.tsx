import type { JSX } from "react";
import Card from "../components/Card";
import { huespedes } from "../data/huespedes";
import { habitaciones } from "../data/habitaciones";

export default function Reportes(): JSX.Element {
  const totalHuespedes = huespedes.length;
  const totalHabitaciones = habitaciones.length;
  const ocupacion = habitaciones.filter((h) => h.estado === "Ocupada").length;
  const porcentaje = Math.round((ocupacion / totalHabitaciones) * 100);
  const ingresoTotal = habitaciones
    .filter((h) => h.estado === "Ocupada")
    .reduce((acc, h) => acc + h.precio, 0);

  const porTipo = ["Simple", "Doble", "Suite", "Presidencial"].map((tipo) => ({
    tipo,
    total: habitaciones.filter((h) => h.tipo === tipo).length,
    ocupadas: habitaciones.filter((h) => h.tipo === tipo && h.estado === "Ocupada").length,
  }));

  return (
    <>
      <h2 className="page-title">Reportes</h2>

      <div className="cards">
        <Card titulo="Total Huéspedes" valor={totalHuespedes} subtitulo="registrados" />
        <Card titulo="Ocupación" valor={`${porcentaje}%`} subtitulo={`${ocupacion} de ${totalHabitaciones}`} />
        <Card titulo="Ingreso Actual" valor={`$${ingresoTotal}`} subtitulo="habitaciones ocupadas" />
        <Card titulo="En Mantenimiento" valor={habitaciones.filter(h => h.estado === "Mantenimiento").length} subtitulo="habitaciones" />
      </div>

      <h3 style={{ marginTop: "36px", marginBottom: "4px", fontFamily: "Playfair Display, serif", color: "var(--gold)" }}>
        Ocupación por tipo de habitación
      </h3>

      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Total</th>
            <th>Ocupadas</th>
            <th>Disponibles</th>
            <th>% Ocupación</th>
          </tr>
        </thead>
        <tbody>
          {porTipo.map((row, i) => (
            <tr key={i}>
              <td>{row.tipo}</td>
              <td>{row.total}</td>
              <td>{row.ocupadas}</td>
              <td>{row.total - row.ocupadas}</td>
              <td>
                <span className={
                  row.total === 0 ? "badge badge-blue" :
                    (row.ocupadas / row.total) >= 0.8 ? "badge badge-red" :
                      (row.ocupadas / row.total) >= 0.5 ? "badge badge-yellow" :
                        "badge badge-green"
                }>
                  {row.total === 0 ? "N/A" : `${Math.round((row.ocupadas / row.total) * 100)}%`}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
