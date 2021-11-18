//Contenido de los Div del html
var contenidoCaja = '';
var contenidoInfo = '';

//Cronometro
window.onload = init;

function init() {
    document.querySelector(".start").addEventListener("click", cronometrar);
    document.querySelector(".stop").addEventListener("click", parar);
    document.querySelector(".reiniciar").addEventListener("click", reiniciar);
    var h = 0;
    var m = 0;
    var s = 0;
    document.getElementById("hms").innerHTML = "00:00:00";
}

function cronometrar() {
    escribir();
    var id = setInterval(escribir, 1000);
    document.querySelector(".start").removeEventListener("click", cronometrar);
}

function escribir() {
    var hAux, mAux, sAux;
    s++;
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    if (h > 24) { h = 0; }

    if (s < 10) { sAux = "0" + s; } else { sAux = s; }
    if (m < 10) { mAux = "0" + m; } else { mAux = m; }
    if (h < 10) { hAux = "0" + h; } else { hAux = h; }

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux;
}

function parar() {
    clearInterval(id);
    document.querySelector(".start").addEventListener("click", cronometrar);

}

function reiniciar() {
    clearInterval(id);
    document.getElementById("hms").innerHTML = "00:00:00";
    h = 0;
    m = 0;
    s = 0;
    document.querySelector(".start").addEventListener("click", cronometrar);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//RPG
var numRandom = 0;

const interfaz = {
    imprimirInfo: function() {
        document.getElementById("info").innerHTML = contenidoInfo;
    }
}

const character = {
    Name: "Oterok",
    suerte: 0,
    positionX: 15,
    positionY: 15,
    Orientacion: 0 //0 up, 1 rigth, 2 Down, 3 Left
};

function escogerEvento() {
    switch (numRandom) {
        case 0:
        case 1:
        case 2:
            //malos
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            //neutros
            break;
        case 7:
        case 8:
        case 9:
            //positivos
            break;
    }
}