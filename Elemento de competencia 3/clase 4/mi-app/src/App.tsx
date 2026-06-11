import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

export default function App(): React.JSX.Element {
    const [nota, setNota] = useState<number>(0);
//se ejecuta cuando el usuario escribe
//guarda el valor en nota
//React.ChangeEvent: evento de cambio
//HTMLInputElement: proviene de un <input>
function manejarCambio(e: 
React.ChangeEvent<HTMLInputElement>): void {
setNota(Number(e.target.value));
}
function obtenerResultado(): string {
    if (nota === 0) return "";

    if (nota > 50) {
        return "Aprobado"; 
    } else {
        return "Reprobado";
    }
    }
    

    return (
        <div>
            <input
                type="number"
                placeholder="Ej: 75"
                onChange={manejarCambio}
            />
            <h3>Nota: {nota}</h3>
            <h2>{obtenerResultado()}</h2>
        </div>
    );
}
