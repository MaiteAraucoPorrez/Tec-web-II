import React from 'react';
import { useState } from 'react';

export default function App(): React.JSX.Element {

  const [numero, setNumero] = useState<string>("");
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);


  function agregarNumero(): void {
    const num = parseInt(numero);

  // validacion 0 a 100
    if (isNaN(num) || num < 0 || num > 100) {
      alert("Ingresa un num válido entre 0 y 100");
      return;
    }
    //validar duplicados en ambas listas 
    if (pares.includes(num) || impares.includes(num)) {
      alert("No se pueden agregar repetidos");
      return;
    }


    if (num % 2 === 0) {
      setPares([...pares, num]);
    } else {
      setImpares([...impares, num]);
    }
    setNumero("");
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Clasificador de números</h2>

      {/*input controlado*/}
      <input
        type="number"
        placeholder="Escribe un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <button onClick={agregarNumero}>
        Agregar
      </button>

      <div style={{ display: 'flex', gap: '50px', marginTop: '20px' }}>
        
        {/* lista de pares */}
        <div>
          <h3>Numeros pares:</h3>
          {pares.length === 0 ? (
            <p>No hay números pares</p>
          ) : (
            <ul>
              {pares.map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          )}
        </div>

        {/* lista de impares */}
        <div>
          <h3>Numeros impares:</h3>
          {impares.length === 0 ? (
            <p>No hay números impares</p>
          ) : (
            <ul>
              {impares.map((n, index) => (
                <li key={index}>{n}</li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}