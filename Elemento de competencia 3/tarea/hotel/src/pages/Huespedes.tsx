import type { JSX } from "react";
import { huespedes } from "../data/huespedes";

export default function Huespedes(): JSX.Element {
  return (
    <>
      <div className="section-header">
        <h2 className="page-title" style={{ marginBottom: 0 }}>Huéspedes</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Habitación</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {huespedes.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.nombre}</td>
              <td>{h.email}</td>
              <td>#{h.habitacion}</td>
              <td>{h.checkin}</td>
              <td>{h.checkout}</td>
              <td>
                <span className={
                  h.estado === "Activo"    ? "badge badge-green"  :
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
