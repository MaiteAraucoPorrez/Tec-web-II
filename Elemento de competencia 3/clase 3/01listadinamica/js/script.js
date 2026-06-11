"use strict";
let productos = [];
let cantidades = [];
let precios = [];
// DOM
const input = document.getElementById("inputProducto");
const inputCantidad = document.getElementById("inputCantidad");
const inputPrecio = document.getElementById("inputPrecio");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const totalVenta = document.getElementById("totalVenta");
// Render: actualiza la interfaz con el estado actual de los productos
function render() {
    lista.innerHTML = "";
    const totalUnidades = cantidades.reduce((acum, cant) => acum + cant, 0);
    contador.textContent = `Total: ${productos.length} producto${productos.length !== 1 ? "s" : ""} - ${totalUnidades} unidades`;
    const total = precios.reduce((acum, precio, i) => acum + precio * cantidades[i], 0);
    totalVenta.textContent = `Total venta: ${total.toFixed(2)} Bs`;
    if (productos.length === 0) {
        mensaje.textContent = "No hay productos";
        return;
    }
    mensaje.textContent = "";
    productos.forEach((prod, index) => {
        let li = document.createElement("li");
        const subtotal = (precios[index] * cantidades[index]).toFixed(2);
        li.innerHTML = `${prod} - x${cantidades[index]} - ${precios[index].toFixed(2)} Bs/u - Subtotal: ${subtotal} Bs <button class='btnEliminar'></button>`;
        let btnEliminar = li.querySelector(".btnEliminar");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
        });
        lista.appendChild(li);
    });
}
// Evento: Agregar producto
btnAgregar.addEventListener("click", () => {
    const valor = input.value.trim();
    if (valor === "") {
        alert("Ingrese el nombre del producto");
        return;
    }
    const cantidad = parseInt(inputCantidad.value);
    const precio = parseFloat(inputPrecio.value);
    // Controlar negativos o cero
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser un número mayor a 0");
        return;
    }
    if (isNaN(precio) || precio <= 0) {
        alert("El precio debe ser un número mayor a 0");
        return;
    }
    // Límites máximos
    if (cantidad > 10) {
        alert("La cantidad no puede superar las 10 unidades");
        return;
    }
    if (precio > 100) {
        alert("El precio no puede superar los 100 Bs");
        return;
    }
    productos.push(valor);
    cantidades.push(cantidad);
    precios.push(precio);
    input.value = "";
    inputCantidad.value = "";
    inputPrecio.value = "";
    render();
});
// Eliminar producto
function eliminarProducto(indice) {
    productos.splice(indice, 1);
    cantidades.splice(indice, 1);
    precios.splice(indice, 1); // los tres arrays se eliminan en el mismo índice
    render();
}
// Init
render();
//# sourceMappingURL=script.js.map