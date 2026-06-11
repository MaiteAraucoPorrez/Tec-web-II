const botones = document.querySelectorAll(".filtros button");
const items = document.querySelectorAll(".item");

// Recorre cada botón encontrado
botones.forEach(function(boton){

    // Agrega un evento click a cada botón
    boton.addEventListener("click", function(){

        const categoria = boton.dataset.categoria;
        // Obtiene la categoría almacenada en el atributo data-categoria del botón

         // Recorre todos los elementos que se pueden mostrar u ocultar
        items.forEach(function(item){

             // Si la categoría seleccionada es "todos"
            if(categoria === "todos"){
                // Se muestran todos los elementos eliminando la clase que los oculta
                item.classList.remove("oculto");
            }
            else if(item.classList.contains(categoria)){
                // Si el elemento tiene la clase de la categoría seleccionada
                item.classList.remove("oculto");
                // Se muestra el elemento
            }
            else{
                 // Si el elemento no pertenece a la categoría seleccionada
                item.classList.add("oculto");
                // Se oculta agregando la clase "oculto"
            }

        });

    });

});