/* DECLARACION DE VARIABLES */

var numFotos = 12; /* El slider tendrá 12 fotos */
var ordenPrincipal, ordenSiguiente;
var intervalo, temporizador;
var tiempoEspera = 5000; /* (milisegundos = 5 segundos) */


/* DECLARACION DE CONSTANTES */

const flechaIzd = document.getElementById("flechaIzd");
/* console.log(flechaIzd); */
const flechaDer = document.getElementById("flechaDer");
/* console.log(flechaDer); */
const fotoActiva = document.getElementById("fotoActiva");
/* console.log(fotoActiva) */

/* ACCION DE FLECHAS AL PULSAR, PASAR ADELANTE O ATRAS EN INFINITO */

/* ESCUCHAMOS CLICK EN ELEMENTO FLECHA IZD */
flechaIzd.addEventListener("click", function(){

    /* Recogemos el valor String del atributo orden del elemento img con la foto principal*/
    ordenPrincipal = fotoActiva.getAttribute("orden");
    ordenPrincipal = Number(ordenPrincipal);

    /*condición para controlar que no se salga del total de fotos  */
    if(ordenPrincipal === 1){
        ordenSiguiente = numFotos;
    }else{
        ordenSiguiente = ordenPrincipal - 1;
    }

    /* fotoActiva.src="./assets/img/slider1_2560.jpg" */
    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"; */
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden", ordenSiguiente);

    clearInterval(intervalo); /* para el intervalo que está cambiado la foto cada 5 segundos */
    crearIntervalo(); /* Para volver a crear el intervalo */
  
    })

/* ESCUCHAMOS CLICK EN ELEMENTO FLECHA DER / EVENTO DE ESCUCHA*/

flechaDer.addEventListener("click", function(){

    /* Recogemos el valor String del atributo orden del elemento img con la foto principal*/
    ordenPrincipal = fotoActiva.getAttribute("orden");
    ordenPrincipal = Number(ordenPrincipal);

    /*condición para controlar que no se salga del total de fotos  */
    if(ordenPrincipal === numFotos){
        ordenSiguiente = 1;
    }else{
        ordenSiguiente = ordenPrincipal + 1;
    }

    /* fotoActiva.src="./assets/img/slider1_2560.jpg" */
    /* fotoActiva.src="./assets/img/slider"+ordenSiguiente+"_2560.jpg"; */
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden", ordenSiguiente);

    clearInterval(intervalo); /* para el intervalo que está cambiado la foto cada 5 segundos */
    crearIntervalo(); /* Para volver a crear el intervalo */
    })

/* METER FOTO RANMDOM / ZONA DE IMAGEN RANDOM CADA VEZ QUE CARGA LA PÁGINA WEB  */
/* Lo metemos en la declaración de funciones abajo*/
 funcion_random(); /* Hace la llamada a la función de abajo */

/* CAMBIAR FOTO PRINCIPAL EN INTERVALOS DE TIEMPO */

/* crearIntervalo(tiempoEspera); */
crearIntervalo();/* Hace la llamada a la funcion de abajo */


/* DECLARACIÓN FUNCIONES */

/* Función para cambiar la foto de forma random */
function funcion_random(){
    let numAleatorio;
    numAleatorio = Number(numAleatorio);
    numAleatorio = Math.random()*numFotos; /* Nos da un número con decimales */
    numAleatorio = Math.ceil(numAleatorio); /* Convierte el número a entero */
    fotoActiva.src=`./assets/img/slider${numAleatorio}_2560.jpg`;/* cambiamos el src */
    fotoActiva.setAttribute("orden", numAleatorio); /* cambiamos el atributo orden de fotoActiva */
}

/* Función crear intervalo */
function crearIntervalo(valorRecibido){
    intervalo = window.setInterval(funcion_random, 5000); /* Cambia da 5 segundos */

}