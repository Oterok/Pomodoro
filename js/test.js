//Contenido de los Div del html
var contenidoCaja = '';
var contenidoInfo = '';

//
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

escogerEventos(function() {
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
});