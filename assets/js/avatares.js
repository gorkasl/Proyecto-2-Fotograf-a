/* Recogemos en una constante (array) todos los elementos del html que tenga como clase imgObjetivo */
const imgObjetivos = document.getElementsByClassName("imgObjetivo");

/* Hacemos una iteración para recorrer cada item de la constante, y escuchamos si se hace evento mouseover o mouseout sobre alguno de ellos */

for(const imgObjetivo of imgObjetivos){
    /* Código que se ejecuta en cada vuelta */
    imgObjetivo.addEventListener("mouseover", function(){
        imgObjetivo.style.transform="rotate(20deg)";/* rota 20 deg */
    })
    imgObjetivo.addEventListener("mouseout", function(){
        imgObjetivo.style.transform="rotate(0deg)";/* quita la rotación dejandolo en 0 deg */
    })
}
