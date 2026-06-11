import type { JSX } from "react";
import { habitaciones } from "../data/habitaciones";

export default function Habitaciones(): JSX.Element {
  return (
    <>
      <h2 className="page-title">Habitaciones</h2>

      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Tipo</th>
            <th>Piso</th>
            <th>Precio / noche</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((hab) => (
            <tr key={hab.id}>
              <td>#{hab.numero}</td>
              <td>{hab.tipo}</td>
              <td>{hab.piso}°</td>
              <td>${hab.precio}</td>
              <td>
                <span className={
                  hab.estado === "Disponible" ? "badge badge-green" :
                    hab.estado === "Ocupada" ? "badge badge-yellow" :
                      "badge badge-red"
                }>
                  {hab.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
