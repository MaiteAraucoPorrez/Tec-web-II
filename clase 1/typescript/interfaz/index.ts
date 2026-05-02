interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;
}
const item: Producto = {
    id: 1,
    nombre: "Audífonos Bluetooth",
    precio: 150,
};
console.log(`Producto agregado: ${item.nombre} - Bs ${item.precio}`);
