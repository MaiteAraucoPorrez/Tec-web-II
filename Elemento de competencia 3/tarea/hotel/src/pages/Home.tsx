import type { JSX } from "react";
import Card from "../components/Card";
import { huespedes } from "../data/huespedes";
import { habitaciones } from "../data/habitaciones";

export default function Home(): JSX.Element {
  const activos = huespedes.filter((h) => h.estado === "Activo").length;
  const disponibles = habitaciones.filter((h) => h.estado === "Disponible").length;
  const ocupadas = habitaciones.filter((h) => h.estado === "Ocupada").length;
  const ingresoHoy = huespedes
    .filter((h) => h.estado === "Activo")
    .reduce((acc, h) => {
      const hab = habitaciones.find((r) => r.numero === h.habitacion);
      return acc + (hab?.precio ?? 0);
    }, 0);

  return (
    <>
      <h2 className="page-title">Dashboard</h2>

      <div className="cards">
        <Card titulo="Huéspedes Activos" valor={activos} subtitulo="En el hotel ahora" />
        <Card titulo="Habitaciones Ocupadas" valor={ocupadas} subtitulo={`de ${habitaciones.length} en total`} />
        <Card titulo="Disponibles" valor={disponibles} subtitulo="Listas para check-in" />
        <Card titulo="Ingreso Estimado" valor={`$${ingresoHoy}`} subtitulo="Huéspedes activos hoy" />
      </div>

      <h3 style={{ marginTop: "36px", marginBottom: "4px", fontFamily: "Playfair Display, serif", color: "var(--gold)" }}>
        Últimas llegadas
      </h3>

      <table>
        <thead>
          <tr>
            <th>Huésped</th>
            <th>Habitación</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {huespedes.slice(0, 4).map((h) => (
            <tr key={h.id}>
              <td>{h.nombre}</td>
              <td>#{h.habitacion}</td>
              <td>{h.checkin}</td>
              <td>{h.checkout}</td>
              <td>
                <span className={
                  h.estado === "Activo" ? "badge badge-green" :
                    h.estado === "Pendiente" ? "badge badge-yellow" :
                      "badge badge-blue"
                }>
                  {h.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
