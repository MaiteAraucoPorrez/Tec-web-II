export type Rol = "lacteos" | "alimentos" | "bebidas" | "higiene" | "otros";
//Rol solo podrá ser de una de estas opciones

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  categoria: string;
}