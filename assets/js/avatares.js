/* Recogemos en una constante (array) todos los elementos del html que tenga como clase imgObjetivo */
const objetivos = document.getElementsByClassName("imgObjetivo");

/* Hacemos una iteración para recorrer cada item de la constante, y escuchamos si se hace evento mouseover o mouseout sobre alguno de ellos */

for(const objetivo of objetivos){
    /* Código que se ejecuta en cada vuelta */
    objetivo.addEventListener("mouseover", function(){
        objetivo.style.transform="rotate(20deg)";
    })
    objetivo.addEventListener("mouseout", function(){
        objetivo.style.transform="rotate(0deg)";
    })
}
