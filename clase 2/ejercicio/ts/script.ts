let valor: number = 0;

// Manipulacion del DOM
const texto = document.getElementById("valor") as HTMLParagraphElement;
const btnSumar = document.getElementById("sumar") as HTMLButtonElement;
const btnRestar = document.getElementById("restar") as HTMLButtonElement;
const btnResetear = document.getElementById("resetear") as HTMLButtonElement;
const btnAprobar = document.getElementById("aprobar") as HTMLButtonElement;
const mensaje = document.getElementById("mensaje") as HTMLParagraphElement;

// Función para "renderizar"
// Actualizar la interfaz de usuario (UI) cada vez que cambia el estado.
function render(): void {
  texto.textContent = valor.toString();
  //Muestra el valor actualizado

  // Reset clases: Elimina estilos anteriores
  texto.classList.remove("alto", "bajo", "regular");
  
  // Reglas visuales (UX)
  if (valor >= 80) {
    texto.classList.add("alto");
  } else if (valor <80 && valor >= 51) {
    texto.classList.add("regular");
  } else {
    texto.classList.add("bajo");
  }
}

//el puntaje no puede ser mayor a 100 ni menor a 0, se puede agregar validaciones para eso
function validarValor(): void {
  if (valor > 100) {
    valor = 100;
  } else if (valor < 0) {
    valor = 51;
  }

    if (valor > 80 ) {
      mensaje.textContent = "Aprobado";
  } else if (valor >= 51 && valor < 80) {
      mensaje.textContent = "Regular";
  } else {
      mensaje.textContent = "Reprobado";
  }
}




// Eventos
btnSumar.addEventListener("click", () => {
  valor+=5; //cambia el estado
  validarValor(); //valida el valor
  render(); //actualiza la UI
});

btnRestar.addEventListener("click", () => {
  valor-=5; //cambia el estado 
  validarValor(); //valida el valor
  render(); //actualiza la UI
});

btnResetear.addEventListener("click", () => {
  valor = 0; //cambia el estado
  validarValor(); //valida el valor
  render(); //actualiza la UI
});

btnAprobar.addEventListener("click", () => {
  valor = 51; //cambia el estado
  validarValor(); //valida el valor
  render(); //actualiza la UI
}
);

// Inicializar
render();

//Caracteristicas de un componente:
//valor, eventos y renderizado