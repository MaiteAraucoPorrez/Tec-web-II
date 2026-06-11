const caja = document.getElementById("caja");

function ponerStatic(){
    caja.style.position = "static";
    // La caja 1 se comporta de forma normal en el flujo del documento.
    // Se coloca arriba y la caja 2 aparece debajo.
}

function ponerRelative(){
    caja.style.position = "relative";
    caja.style.top = "20px";
    caja.style.left = "20px";
    // La caja 1 se mueve respecto a su posición original usando top o left.
    // Pero su espacio original sigue ocupado.
    // La caja 2 no cambia de posición.
}

function ponerAbsolute(){
    caja.style.position = "absolute";
    caja.style.top = "30px";
    caja.style.left = "30px";
    // La caja 1 sale del flujo del documento.
    // Se posiciona con coordenadas dentro del contenedor.
    // La caja 2 sube y ocupa el espacio que dejó la caja 1.
}

function ocultar(){
    caja.style.display = "none";
}

function mostrar(){
    caja.style.display = "block";
}