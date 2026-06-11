import type { JSX } from "react";

type FooterProps = {
  hotel: string;
  year: number;
};

export default function Footer({ hotel, year }: FooterProps): JSX.Element {
  return (
    <footer className="footer">
      © {year} {hotel} - Sistema de Gestión Hotelera
    </footer>
  );
}
