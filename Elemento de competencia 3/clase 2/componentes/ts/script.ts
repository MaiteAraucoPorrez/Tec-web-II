let valor: number = 0;

// Manipulacion del DOM
const texto = document.getElementById("valor") as HTMLParagraphElement;
const btnSumar = document.getElementById("sumar") as HTMLButtonElement;
const btnRestar = document.getElementById("restar") as HTMLButtonElement;
const btnResetear = document.getElementById("resetear") as HTMLButtonElement;

// Función para "renderizar"
// Actualizar la interfaz de usuario (UI) cada vez que cambia el estado.
function render(): void {
  texto.textContent = valor.toString();
  //Muestra el valor actualizado

  // Reset clases: Elimina estilos anteriores
  texto.classList.remove("alto", "bajo");
  
  // Reglas visuales (UX)
  if (valor > 10) {
    texto.classList.add("alto");
  } else if (valor < 0) {
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