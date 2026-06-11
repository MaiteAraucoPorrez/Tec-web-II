const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

// validacion del nombre
nombre.addEventListener("input", () => {
  if (nombre.value.trim() === "") {
    nombre.style.border = "2px solid red";
  } else if (nombre.value.trim().length <= 3) {
    nombre.style.border = "2px solid orange";
  } else {
    nombre.style.border = "2px solid green";
  }
});

// validacion de email
correo.addEventListener("input", () => {
  if (!correo.value.includes("@")) {
    correo.style.border = "2px solid red";
  } else {
    correo.style.border = "2px solid green";
  }
});

// Enviando el form
formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  // Validación final
  if (nombre.value.trim() === "") {
    mensaje.textContent = "El nombre es obligatorio";
    mensaje.style.color = "red";
    nombre.focus();
    return;
  }

  if (nombre.value.trim().length <= 3) {
    mensaje.textContent = "El nombre debe tener más de 3 letras";
    mensaje.style.color = "red";
    nombre.focus();
    return;
  }

  if (correo.value.trim() === "") {
    mensaje.textContent = "El correo es obligatorio";
    mensaje.style.color = "red";
    correo.focus();
    return;
  }

  if (!correo.value.includes("@")) {
    mensaje.textContent = "El correo no es válido";
    mensaje.style.color = "red";
    correo.focus();
    return;
  }

  // Feedback
  mensaje.textContent = "Enviando...";
  mensaje.style.color = "black";

  setTimeout(() => {
    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.style.color = "green";
  }, 2000);
});
