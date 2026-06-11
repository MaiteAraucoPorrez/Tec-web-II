const paralelos = [
  { id: 1, paralelo: "Inicial A", edad: "3 años", docente: "Lic. Ana" },
  { id: 2, paralelo: "Inicial B", edad: "4 años", docente: "Lic. Carla"},
  { id: 3, paralelo: "Pre Kinder", edad: "5 años", docente: "Lic. Luis" }
];

export default function Paralelos() {
  return (
    <>
      <h2>Paralelos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Paralelo</th>
            <th>Edad</th>
            <th>Docente</th>
          </tr>
        </thead>

        <tbody>
          {paralelos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.paralelo}</td>
              <td>{p.edad}</td>
              <td>{p.docente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}