const edadInput = document.getElementById("edad");
const boton = document.getElementById("validar");
const mensaje = document.getElementById("mensaje");

boton.disabled = true;

edadInput.addEventListener("input", function () {
  const edad = Number(edadInput.value);

  if (edadInput.value === "" || edad < 0) {
    mensaje.textContent = "Por favor, ingrese una edad válida";
    mensaje.style.color = "orange";
    mensaje.style.display = "block";
    boton.disabled = true;
  } else if (edad >= 18) {
    mensaje.textContent = "Eres mayor de edad";
    mensaje.style.color = "green";
    mensaje.style.display = "block";
    boton.disabled = false;
  } else {
    mensaje.textContent = "Eres menor de edad";
    mensaje.style.color = "red";
    mensaje.style.display = "block";
    boton.disabled = true;
  }
});

boton.addEventListener("click", function () {
  const edad = Number(edadInput.value);

  if (edad >= 18) {
    mensaje.textContent = "Tu edad es válida";
    mensaje.style.color = "green";
    mensaje.style.display = "block";
  }
});