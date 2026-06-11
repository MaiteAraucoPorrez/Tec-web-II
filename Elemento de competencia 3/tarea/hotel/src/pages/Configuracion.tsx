import type { JSX } from "react";

export default function Configuracion(): JSX.Element {
  return (
    <>
      <h2 className="page-title">Configuración</h2>

      <div className="config-section">
        <h3>Información del Hotel</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre del Hotel</label>
            <input type="text" defaultValue="Hotel Grand Palace" />
          </div>
          <div className="form-group">
            <label>Ciudad</label>
            <input type="text" defaultValue="Cochabamba, Bolivia" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" defaultValue="+591 33 000000" />
          </div>
          <div className="form-group">
            <label>Email de contacto</label>
            <input type="email" defaultValue="reservas@grandpalace.bo" />
          </div>
        </div>
      </div>

      <div className="config-section">
        <h3>Tarifas</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Moneda</label>
            <select defaultValue="USD">
              <option value="USD">USD - Dólar</option>
              <option value="BOB">BOB - Boliviano</option>
            </select>
          </div>
          <div className="form-group">
            <label>Hora de Check-in</label>
            <input type="time" defaultValue="14:00" />
          </div>
          <div className="form-group">
            <label>Hora de Check-out</label>
            <input type="time" defaultValue="12:00" />
          </div>
        </div>
      </div>

      <div className="config-section">
        <h3>Notificaciones</h3>
        <div className="form-group">
          <label>Email para alertas</label>
          <input type="email" defaultValue="admin@grandpalace.bo" />
        </div>
        <div className="form-group">
          <label>Idioma del sistema</label>
          <select defaultValue="es">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </>
  );
}
