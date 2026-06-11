// BOTÓN CAMBIAR COLOR
const btnColor = document.getElementById("btnColor");
btnColor.addEventListener("click", function(){
    btnColor.classList.toggle("activo");
    //asignamos clase activo al btn btnColor
});


// MOSTRAR / OCULTAR CONTENIDO

const btnToggle = document.getElementById("btnToggle");
const info = document.getElementById("info");
// = asignación, == comparación de valor, === comparación de valor y tipo de dato
info.style.display = "none"; //redundancia a pesar de estar en scss

btnToggle.addEventListener("click", function(){
    // triple igual (===) compara valor y tipo de dato, doble igual (==) solo compara valor
    if(info.style.display === "none") //si está oculto
    {
        info.style.display = "block"; //lo mostramos
        btnToggle.textContent = "Ocultar información";
        //cambiamos el texto del boton
    }
    else //sino
    {
        info.style.display = "none"; //ocultamos
        btnToggle.textContent = "Mostrar información";
        //cambiamos el texto del botón
    }
});


// VALIDACIÓN SIMPLE DE FORMULARIO

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
//const mensaje = document.getElementById("mensaje");
const ValidarFormulario = document.getElementById("ValidarFormulario");
const validacion = document.getElementById("validacion");
const mensajeValidacion = document.getElementById("mensaje");

//Usar e (event) si: necesitas datos del evento, si necesitas preventDefault()
// No usar e (event) si solo ejecutas una acción
ValidarFormulario.addEventListener("submit", function(e){
    e.preventDefault();
    // evita que el formulario se envíe y recargue la página
    if(validacion.value === formulario.nombre.value)
    {
        mensajeValidacion.textContent = "Formulario enviado correctamente";
        mensajeValidacion.style.color = "green";
    }
    else
    {
        mensajeValidacion.textContent = "Los campos no coinciden, por favor verifique";
        //formulario.submit();
    }
});

