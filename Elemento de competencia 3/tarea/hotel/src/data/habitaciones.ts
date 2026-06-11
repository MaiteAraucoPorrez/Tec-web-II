export type Habitacion = {
  id: number;
  numero: number;
  tipo: "Simple" | "Doble" | "Suite" | "Presidencial";
  piso: number;
  precio: number;
  estado: "Disponible" | "Ocupada" | "Mantenimiento";
};

export const habitaciones: Habitacion[] = [
  { id: 1, numero: 101, tipo: "Simple", piso: 1, precio: 80, estado: "Ocupada" },
  { id: 2, numero: 102, tipo: "Doble", piso: 1, precio: 120, estado: "Disponible" },
  { id: 3, numero: 205, tipo: "Suite", piso: 2, precio: 220, estado: "Ocupada" },
  { id: 4, numero: 206, tipo: "Doble", piso: 2, precio: 120, estado: "Mantenimiento" },
  { id: 5, numero: 310, tipo: "Suite", piso: 3, precio: 220, estado: "Ocupada" },
  { id: 6, numero: 402, tipo: "Presidencial", piso: 4, precio: 450, estado: "Ocupada" },
  { id: 7, numero: 403, tipo: "Presidencial", piso: 4, precio: 450, estado: "Disponible" },
  { id: 8, numero: 118, tipo: "Simple", piso: 1, precio: 80, estado: "Ocupada" },
];