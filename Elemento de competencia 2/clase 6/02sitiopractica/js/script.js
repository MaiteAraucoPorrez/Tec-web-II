function agregarTarea() {
  var input = document.getElementById("tarea");
  var lista = document.getElementById("lista");

  if (input.value.trim() !== "") {
    lista.innerHTML += "<li>" + input.value + "</li>";
    input.value = "";
  } else {
    alert("Por favor, ingresa una tarea válida");
  }
}
