import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App(): React.JSX.Element {

  const [nota, setNota] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");

  function manejarCambio(e: React.ChangeEvent<HTMLInputElement>): void {
    setNota(Number(e.target.value));
  }

  function manejarCambioNombre(e: React.ChangeEvent<HTMLInputElement>): void {
    setNombre(e.target.value);
  }

  // Lógica con if fuera del JSX
let resultado: React.JSX.Element | null;
let mensaje: string = `${nombre}, nota = ${nota}`;

if (nota === 0) {
  resultado = null;
} else if (nota > 50) {
  resultado = <p>Aprobado</p>;
} else {
  resultado = <p>Reprobado</p>;
}

  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <br />
      <input id="nombre" type="text" placeholder="Ingrese el nombre" onChange={manejarCambioNombre} />
      <br />
      <label htmlFor="nota">Nota:</label>
      <br />
      <input id="nota" type="number" placeholder="Ingrese la calificación" onChange={manejarCambio} />
      <br /> <br />
      
      {/* <h3>Nota: {nota}</h3> */}

      {/* Renderizamos el resultado */}
      <p>{mensaje}</p>
      <p>Estado: {resultado}</p>
    </div>
  );
}