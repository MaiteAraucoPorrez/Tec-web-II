export type Rol = "admin" | "docente" | "estudiante";
//Rol solo podrá ser de una de estas opciones

export interface Usuario {
  id: number;
  nombre: string;
  edad: number;
  activo: boolean;
  rol: Rol;
}