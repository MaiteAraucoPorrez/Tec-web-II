const inputBusqueda = document.getElementById("inputBusqueda");
//input donde el usuario escribe
const lista = document.getElementById("sugerencias");
//lista ul

// Array que contiene los datos que se usarán como sugerencias
const datos = [
"JavaScript",
"Java",
"Python",
"PHP",
"HTML",
"CSS",
"React",
"Angular",
"NodeJS"
];

// Detecta cuando el usuario escribe dentro del input
inputBusqueda.addEventListener("input", function(){

    //recuperamos los escrito y uniformamos a minusculas
    const texto = inputBusqueda.value.toLowerCase();

    // Limpia la lista de sugerencias anteriores
    lista.innerHTML = "";

    // Si el usuario no escribió nada, termina la función
    if(texto === ""){
        return;
    }

    // Recorre todos los datos del array
    datos.forEach(function(item){

        // Verifica si el elemento contiene el texto escrito
        if(item.toLowerCase().includes(texto)){

            // Crea un nuevo elemento <li> para mostrar la sugerencia
            const li = document.createElement("li");

            // Coloca el texto de la sugerencia dentro del <li>
            li.textContent = item;

            // Agrega la sugerencia a la lista del HTML
            lista.appendChild(li);

            // Si el usuario hace click en una sugerencia
            li.addEventListener("click", function(){

                // Coloca esa sugerencia en el input
                inputBusqueda.value = item;
                // Limpia la lista de sugerencias
                lista.innerHTML = "";

            });

        }

    });

});

// Validacion del campo de nombre
const inputNombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

inputNombre.addEventListener("input", validarCampo);

function validarCampo(){
    //.trim() elimina los espacios al inicio y al final del texto
    if(inputNombre.value.trim().length < 3){
        mensaje.textContent = "El nombre debe tener al menos 3 caracteres";
        mensaje.style.color = "red";

        inputNombre.classList.add("error");
        inputNombre.classList.remove("correcto");

    }else{
        mensaje.textContent = "Nombre válido";
        mensaje.style.color = "green";

        inputNombre.classList.add("correcto");
        inputNombre.classList.remove("error");
    }
}

// Botón para subir al inicio de la página
const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){
        btnArriba.style.display = "block";
    }else{
        btnArriba.style.display = "none";
    }

});

btnArriba.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Modal para mostrar información adicional
const modal = document.getElementById("modal");
const btnAbrir = document.getElementById("abrirModal");
const btnCerrar = document.getElementById("cerrarModal");

btnAbrir.addEventListener("click", function(){
    modal.style.display = "flex";
});

btnCerrar.addEventListener("click", function(){
    modal.style.display = "none";
});

// Cierra el modal si el usuario hace click fuera del contenido
modal.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
});


// Menú hamburguesa para dispositivos móviles
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function() {
    nav.classList.toggle("active");
});

// Botón para cambiar entre modo claro y oscuro
const btnTema = document.getElementById("modoOscuro");

btnTema.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

// si cambia a modo oscuro, cambia el modal
const modalContenido = document.querySelector(".modal-contenido");
const observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
        if(document.body.classList.contains("dark")){
            modalContenido.style.background = "#333";
            modalContenido.style.color = "white";
        }else{
            modalContenido.style.background = "white";
            modalContenido.style.color = "black";
        }
    });
});

observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });


// Función para manejar el filtrado de elementos
const botones = document.querySelectorAll(".filtros button");
const items = document.querySelectorAll(".item");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        const categoria = boton.dataset.categoria;
        items.forEach(function(item){
            if(categoria === "todos"){
                item.classList.remove("oculto");
            }
            else if(item.classList.contains(categoria)){
                item.classList.remove("oculto");
            }
            else{
                item.classList.add("oculto");
            }
        });
    });
});
