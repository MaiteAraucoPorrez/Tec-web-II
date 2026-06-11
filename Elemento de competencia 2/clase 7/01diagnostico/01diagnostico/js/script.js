document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
});

// Validacion en tiempo real - nombre
document.getElementById("nombre").addEventListener("input", function() {
  var nombre = this.value;
  var mensajeNombre = document.getElementById("mensaje");
  if (nombre.length === 0) {
    this.style.borderColor = "";
    mensajeNombre.textContent = "";
    mensajeNombre.style.color = "";
  } else if (nombre.length < 3) {
    this.style.borderColor = "red";
    mensajeNombre.textContent = "El nombre debe tener al menos 3 caracteres";
    mensajeNombre.style.color = "red";
  } else {
    this.style.borderColor = "green";
    mensajeNombre.textContent = "Nombre valido";
    mensajeNombre.style.color = "green";
  }
});

// Validacion en tiempo real - correo
document.getElementById("correo").addEventListener("input", function() {
  var correo = this.value;
  var mensajeCorreo = document.getElementById("mensaje");
  var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.length === 0) {
    this.style.borderColor = "";
    mensajeCorreo.textContent = "";
    mensajeCorreo.style.color = "";
  } else if (!regexCorreo.test(correo)) {
    this.style.borderColor = "red";
    mensajeCorreo.textContent = "Ingresa un correo valido (ejemplo@correo.com)";
    mensajeCorreo.style.color = "red";
  } else {
    this.style.borderColor = "green";
    mensajeCorreo.textContent = "Correo valido";
    mensajeCorreo.style.color = "green";
  }
});

document.getElementById("boton").addEventListener("click", function() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var nombreValido = nombre.length >= 3;
  var correoValido = regexCorreo.test(correo);

  if (!nombreValido || !correoValido) {
    if (!nombreValido) {
      document.getElementById("nombre").style.borderColor = "red";
      document.getElementById("mensaje").textContent = nombre.length === 0
        ? "Por favor, ingresa tu nombre"
        : "El nombre debe tener al menos 3 caracteres";
      document.getElementById("mensaje").style.color = "red";
    }
    if (!correoValido) {
      document.getElementById("correo").style.borderColor = "red";
      document.getElementById("mensaje").textContent = correo.length === 0
        ? "Por favor, ingresa tu correo"
        : "Ingresa un correo valido (ejemplo@correo.com)";
      document.getElementById("mensaje").style.color = "red";
    }
  } else {
    document.getElementById("mensaje").textContent = "Enviando...";
    document.getElementById("mensaje").style.color = "black";
    setTimeout(function() {
      document.getElementById("mensaje").textContent = "Formulario enviado correctamente";
      document.getElementById("mensaje").style.color = "green";
    }, 2000);
  }
});

document.getElementById("boton2").addEventListener("click", function() {
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("nombre").style.borderColor = "";
  document.getElementById("correo").style.borderColor = "";
  document.getElementById("mensaje").textContent = "Formulario reiniciado";
  document.getElementById("mensaje").style.color = "black";
  document.getElementById("mensaje").textContent = "";
});

