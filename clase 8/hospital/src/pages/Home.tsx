export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">
          <th>Pacientes Hoy:</th>
          <p>35</p>
        </div>
        <div className="card">
          <th>Médicos Activos:</th>
          <p>12</p>
        </div>
        <div className="card">
          <th>Emergencias:</th>
          <p>4</p>
        </div>
      </div>
    </>
  );
}