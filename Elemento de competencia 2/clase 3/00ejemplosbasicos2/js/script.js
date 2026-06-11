const contenedor = document.getElementById("contenedor");

const btnAzul = document.getElementById("btnAzul");
const btnVerde = document.getElementById("btnVerde");
const btnRojo = document.getElementById("btnRojo");
const btnRosado = document.getElementById("btnRosado");
const btnAmarillo = document.getElementById("btnAmarillo");

btnAzul.addEventListener("click", function(){
    contenedor.className = "azul";
});

btnVerde.addEventListener("click", function(){
    contenedor.className = "verde";
});

btnRojo.addEventListener("click", function(){
    contenedor.className = "rojo";
});

btnRosado.addEventListener("click", function(){
    contenedor.className = "rosado";
});

btnAmarillo.addEventListener("click", function(){
    contenedor.className = "amarillo";
});