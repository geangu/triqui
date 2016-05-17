var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }

};

var turno = 'X';

function logicGame ( id ){
    console.log("click en: " + id + " turno: " + turno);
    cambiarValor( id );

    // validar linea
    // Validar linea 0
    validarLinea(0);
    validarLinea(1);
    validarLinea(2);

    validarColumna(0);
    validarColumna(1);
    validarColumna(2);

    cambioTurno();
}

function validarLinea( linea ) {
    var a = document.getElementById( linea + '_0').value;
    var b = document.getElementById( linea + '_1').value;
    var c = document.getElementById( linea + '_2').value;
    if(a == b && a == c && a != "  "){
        // Termina el juego
        alert("El juego termino, ganador " + turno);
    }
}

function validarColumna( columna ) {
    var a = document.getElementById( '0_' + columna).value;
    var b = document.getElementById( '1_' + columna).value;
    var c = document.getElementById( '2_' + columna).value;
    if(a == b && a == c && a != "  "){
        // Termina el juego
        alert("El juego termino, ganador " + turno);
    }
}

function cambiarValor( id ){
    document.getElementById(id).value = turno;
    document.getElementById(id).disabled = true;
}

function cambioTurno(){
    if(turno==='X'){
        turno='0';
    } else {
        turno='X';
    }
}
