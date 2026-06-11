const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function() {
    nav.classList.toggle("active");
});
// toggle significa alternar.
// Si no la tiene, la agrega.
// Si ya la tiene, la elimina.