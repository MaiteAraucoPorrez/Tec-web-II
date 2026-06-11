const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const modal = document.getElementById("modal");

btnAbrir.addEventListener("click", function(){
    modal.style.display = "flex";
});

btnCerrar.addEventListener("click", function(){
    modal.style.display = "none";
});