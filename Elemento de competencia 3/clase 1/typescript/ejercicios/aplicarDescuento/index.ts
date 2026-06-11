//5. Crea una función aplicarDescuento que reciba:
//precio: number
//descuento: number (porcentaje entre 0 y 100)
//Debe devolver el precio final luego del descuento.
//Ejemplo: precio 100, descuento 20 va a retornar 80.

function aplicarDescuento(precio: number, descuento: number): number {
    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;
    return precioFinal;
}

console.log(aplicarDescuento(100, 20)); // 80
export { aplicarDescuento };