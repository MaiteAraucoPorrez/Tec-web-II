import type { JSX } from "react";

type CardProps = {
  titulo: string;
  valor: string | number;
  subtitulo?: string;
};

export default function Card({ titulo, valor, subtitulo }: CardProps): JSX.Element {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p className="card-value">{valor}</p>
      {subtitulo && <p className="card-sub">{subtitulo}</p>}
    </div>
  );
}
