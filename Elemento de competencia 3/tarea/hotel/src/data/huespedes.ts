export type Huesped = {
  id: number;
  nombre: string;
  email: string;
  habitacion: number;
  checkin: string;
  checkout: string;
  estado: "Activo" | "Pendiente" | "Salida";
};

export const huespedes: Huesped[] = [
  { id: 1, nombre: "Carlos Mendoza", email: "carlos@mail.com", habitacion: 101, checkin: "2026-04-28", checkout: "2026-05-03", estado: "Activo"},
  { id: 2, nombre: "Sofía Vargas", email: "sofia@mail.com", habitacion: 205, checkin: "2026-04-30", checkout: "2026-05-02", estado: "Salida"},
  { id: 3, nombre: "Andrés Quispe", email: "andres@mail.com", habitacion: 310, checkin: "2026-05-01", checkout: "2026-05-06", estado: "Activo"},
  { id: 4, nombre: "Lucía Fernández", email: "lucia@mail.com", habitacion: 402, checkin: "2026-05-02", checkout: "2026-05-05", estado: "Pendiente"},
  { id: 5, nombre: "Roberto Salinas", email: "roberto@mail.com", habitacion: 118, checkin: "2026-05-02", checkout: "2026-05-04", estado: "Activo"},
];
