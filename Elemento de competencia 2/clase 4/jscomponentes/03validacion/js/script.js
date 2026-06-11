const input = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

input.addEventListener("input", validarCampo);

function validarCampo(){

    if(input.value.length < 3){

        mensaje.textContent = "El nombre debe tener al menos 3 caracteres";
        mensaje.style.color = "red";

        input.classList.add("error");
        input.classList.remove("correcto");

    }else{

        mensaje.textContent = "Nombre válido";
        mensaje.style.color = "green";

        input.classList.add("correcto");
        input.classList.remove("error");

    }

}