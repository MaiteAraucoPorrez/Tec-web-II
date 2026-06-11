// menu hamburguesa
var btnHamburguesa = document.getElementById("btn-hamburguesa");
var nav = document.getElementById("nav");

btnHamburguesa.addEventListener("click", function() {
    nav.classList.toggle("activo");
});

var enlacesNav = document.querySelectorAll(".nav a");

enlacesNav.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        nav.classList.remove("activo");
    });
});

// modo claro/oscuro
var btnTema = document.getElementById("btn-tema");
var logoOscuro = document.getElementById("logo-oscuro");
var logoClaro = document.getElementById("logo-claro");

var temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "claro") {
    document.body.classList.add("claro");
    btnTema.textContent = "Oscuro";
}

btnTema.addEventListener("click", function() {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        btnTema.textContent = "Oscuro";
        localStorage.setItem("tema", "claro");
        logoOscuro.style.display = "none";
        logoClaro.style.display = "block";
    } else {
        btnTema.textContent = "Claro";
        localStorage.setItem("tema", "oscuro");
        logoOscuro.style.display = "block";
        logoClaro.style.display = "none";
    }
});

// validacion en tiempo real — formulario de contacto
var inputNombre = document.getElementById("campo-nombre");
var inputEmail = document.getElementById("campo-email");
var inputMensaje = document.getElementById("campo-mensaje");
var msgNombre = document.getElementById("msg-nombre");
var msgEmail = document.getElementById("msg-email");
var msgMensaje = document.getElementById("msg-mensaje");

inputNombre.addEventListener("input", function() {
    if (inputNombre.value.length === 0) {
        inputNombre.style.borderColor = "";
        msgNombre.textContent = "";
        msgNombre.style.color = "";
    } else if (inputNombre.value.length < 3) {
        inputNombre.style.borderColor = "red";
        msgNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        msgNombre.style.color = "red";
    } else {
        inputNombre.style.borderColor = "green";
        msgNombre.textContent = "Nombre valido";
        msgNombre.style.color = "green";
    }
});

inputEmail.addEventListener("input", function() {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputEmail.value.length === 0) {
        inputEmail.style.borderColor = "";
        msgEmail.textContent = "";
        msgEmail.style.color = "";
    } else if (!regexEmail.test(inputEmail.value)) {
        inputEmail.style.borderColor = "red";
        msgEmail.textContent = "Ingresa un email valido (ej: usuario@correo.com)";
        msgEmail.style.color = "red";
    } else {
        inputEmail.style.borderColor = "green";
        msgEmail.textContent = "Email valido";
        msgEmail.style.color = "green";
    }
});

inputMensaje.addEventListener("input", function() {
    if (inputMensaje.value.length === 0) {
        inputMensaje.style.borderColor = "";
        msgMensaje.textContent = "";
        msgMensaje.style.color = "";
    } else if (inputMensaje.value.length < 10) {
        inputMensaje.style.borderColor = "red";
        msgMensaje.textContent = "El mensaje debe tener al menos 10 caracteres";
        msgMensaje.style.color = "red";
    } else {
        inputMensaje.style.borderColor = "green";
        msgMensaje.textContent = "Mensaje valido";
        msgMensaje.style.color = "green";
    }
});

var formulario       = document.getElementById("formulario-contacto");
var estadoFormulario = document.getElementById("estado-formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nombreValido = inputNombre.value.length >= 3;
    var emailValido = regexEmail.test(inputEmail.value);
    var mensajeValido = inputMensaje.value.length >= 10;

    if (!nombreValido || !emailValido || !mensajeValido) {
        estadoFormulario.textContent = "Por favor, corrige los errores antes de enviar.";
        estadoFormulario.className = "estado-formulario error";
    } else {
        estadoFormulario.textContent = "Mensaje enviado! Me pondre en contacto pronto.";
        estadoFormulario.className = "estado-formulario exito";
        formulario.reset();

        [inputNombre, inputEmail, inputMensaje].forEach(function(campo) {
            campo.style.borderColor = "";
        });
        [msgNombre, msgEmail, msgMensaje].forEach(function(msg) {
            msg.textContent = "";
        });
    }
});

// boton scroll arriba
var btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }

    marcarEnlaceActivo();
});

btnArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// filtro de proyectos
var botonesFilter    = document.querySelectorAll(".btn-filtro");
var tarjetasProyecto = document.querySelectorAll(".tarjeta-proyecto");

botonesFilter.forEach(function(boton) {
    boton.addEventListener("click", function() {

        botonesFilter.forEach(function(b) {
            b.classList.remove("activo");
        });

        boton.classList.add("activo");

        var categoria = boton.dataset.categoria;

        tarjetasProyecto.forEach(function(tarjeta) {
            if (categoria === "todos") {
                tarjeta.classList.remove("oculta");
            } else if (tarjeta.dataset.categoria === categoria) {
                tarjeta.classList.remove("oculta");
            } else {
                tarjeta.classList.add("oculta");
            }
        });

    });
});

// modal de detalles de proyecto
var modal = document.getElementById("modal");
var btnCerrarModal = document.getElementById("btn-cerrar-modal");
var modalCuerpo = document.getElementById("modal-cuerpo");

var botonesDetalles = document.querySelectorAll(".btn-detalles");

botonesDetalles.forEach(function(boton) {
    boton.addEventListener("click", function() {

        var indice = boton.dataset.index;
        var datos = document.getElementById("proyecto-" + indice);

        modalCuerpo.innerHTML = datos.innerHTML;

        modal.style.display = "flex";
    });
});


btnCerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

// cotizador de servicios
var selectServicio = document.getElementById("tipo-servicio");
var rangePageinas = document.getElementById("num-paginas");
var valorPageinas = document.getElementById("valor-paginas");
var checkboxExtras = document.querySelectorAll("input[name='extra']");
var inputCliente = document.getElementById("nombre-cliente");
var errorServicio = document.getElementById("error-servicio");
var errorNombre = document.getElementById("error-nombre");
var resultadoBase = document.getElementById("resultado-base");
var resultadoPaginas = document.getElementById("resultado-paginas");
var resultadoExtras = document.getElementById("resultado-extras");
var resultadoTotal = document.getElementById("resultado-total");
var btnSolicitar = document.getElementById("btn-solicitar");
var btnLimpiar = document.getElementById("btn-limpiar");
var feedbackCotizador = document.getElementById("feedback-cotizador");

function calcularTotal() {
    var precioBase = parseInt(selectServicio.value) || 0;
    var paginas = parseInt(rangePageinas.value);
    var extras = 0;

    checkboxExtras.forEach(function(cb) {
        if (cb.checked) {
            extras += parseInt(cb.value);
        }
    });

    var total = (precioBase * paginas) + extras;

    resultadoBase.textContent = "$" + precioBase;
    resultadoPaginas.textContent = "x " + paginas;
    resultadoExtras.textContent = "$" + extras;
    resultadoTotal.textContent = "$" + total;
    valorPageinas.textContent = paginas;
}

selectServicio.addEventListener("change", function() {
    calcularTotal();
    errorServicio.textContent = "";
    selectServicio.style.borderColor = selectServicio.value ? "green" : "";
});

rangePageinas.addEventListener("input", function() {
    calcularTotal();
});

checkboxExtras.forEach(function(cb) {
    cb.addEventListener("change", function() {
        calcularTotal();
    });
});

inputCliente.addEventListener("input", function() {
    if (inputCliente.value.length >= 3) {
        inputCliente.style.borderColor = "green";
        errorNombre.textContent = "";
    } else if (inputCliente.value.length > 0) {
        inputCliente.style.borderColor = "red";
        errorNombre.textContent = "Ingresa tu nombre completo";
        errorNombre.style.color = "red";
    } else {
        inputCliente.style.borderColor = "";
        errorNombre.textContent = "";
    }
});

btnSolicitar.addEventListener("click", function() {
    var hayError = false;

    if (!selectServicio.value) {
        selectServicio.style.borderColor = "red";
        errorServicio.textContent = "Selecciona un tipo de servicio";
        errorServicio.style.color = "red";
        hayError = true;
    }

    if (inputCliente.value.length < 3) {
        inputCliente.style.borderColor = "red";
        errorNombre.textContent = "Ingresa tu nombre completo";
        errorNombre.style.color = "red";
        hayError = true;
    }

    if (hayError) {
        feedbackCotizador.textContent = "Completa los campos requeridos.";
        feedbackCotizador.className = "feedback-cotizador error";
        return;
    }

    var nombre = inputCliente.value;
    var servicio = selectServicio.options[selectServicio.selectedIndex].text;
    var total = resultadoTotal.textContent;

    feedbackCotizador.textContent = "Gracias " + nombre + "! Tu cotizacion para " + servicio + " por " + total + " fue registrada. Me pondre en contacto pronto.";
    feedbackCotizador.className = "feedback-cotizador exito";
});

btnLimpiar.addEventListener("click", function() {
    selectServicio.value = "";
    rangePageinas.value = "1";
    inputCliente.value = "";

    checkboxExtras.forEach(function(cb) {
        cb.checked = false;
    });

    [selectServicio, inputCliente].forEach(function(campo) {
        campo.style.borderColor = "";
    });

    errorServicio.textContent = "";
    errorNombre.textContent = "";
    feedbackCotizador.className = "feedback-cotizador";
    feedbackCotizador.textContent = "";

    calcularTotal();
});

calcularTotal();


function marcarEnlaceActivo() {
    var secciones   = document.querySelectorAll("main section[id]");
    var enlacesMenu = document.querySelectorAll(".nav a");
    var seccionActual = "";

    secciones.forEach(function(seccion) {
        if (seccion.getBoundingClientRect().top <= 120) {
            seccionActual = seccion.getAttribute("id");
        }
    });

    enlacesMenu.forEach(function(enlace) {
        enlace.classList.remove("activo");
        if (enlace.getAttribute("href") === "#" + seccionActual) {
            enlace.classList.add("activo");
        }
    });
}
