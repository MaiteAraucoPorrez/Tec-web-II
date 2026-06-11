const btnArriba = document.getElementById("btnArriba");

/* detectar scroll */

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){
        btnArriba.style.display = "block";
    }else{
        btnArriba.style.display = "none";
    }

});

/* volver arriba */

btnArriba.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});