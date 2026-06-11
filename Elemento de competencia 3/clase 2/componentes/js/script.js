"use strict";
let valor = 0;
// Manipulacion del DOM
const texto = document.getElementById("valor");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnResetear = document.getElementById("resetear");
// Función para "renderizar"
// Actualizar la interfaz de usuario (UI) cada vez que cambia el estado.
function render() {
    texto.textContent = valor.toString();
    //Muestra el valor actualizado
    // Reset clases: Elimina estilos anteriores
    texto.classList.remove("alto", "bajo");
    // Reglas visuales (UX)
    if (valor > 10) {
        texto.classList.add("alto");
    }
    else if (valor < 0) {
        texto.classList.add("bajo");
    }
}
// Eventos
btnSumar.addEventListener("click", () => {
    valor++; //cambia el estado
    render(); //actualiza la UI
});
btnRestar.addEventListener("click", () => {
    valor--; //cambia el estado 
    render(); //actualiza la UI
});
btnResetear.addEventListener("click", () => {
    valor = 0; //cambia el estado
    render(); //actualiza la UI
});
// Inicializar
render();
//Caracteristicas de un componente:
//valor, eventos y renderizado
//# sourceMappingURL=script.js.map