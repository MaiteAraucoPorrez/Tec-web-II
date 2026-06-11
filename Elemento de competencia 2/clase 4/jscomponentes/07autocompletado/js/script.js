const input = document.getElementById("inputBusqueda");
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
input.addEventListener("input", function(){

    //recuperamos los escrito y uniformamos a minusculas
    const texto = input.value.toLowerCase();

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
                input.value = item;
                // Limpia la lista de sugerencias
                lista.innerHTML = "";

            });

        }

    });

});