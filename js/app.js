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
    cambiarValor( id );
    cambioTurno();

    validarLinea(0);
    validarLinea(1);
    validarLinea(2);

    validarColumna(0);
    validarColumna(1);
    validarColumna(2);

    validarDiagonal(1);
    validarDiagonal(2);
}

function validarLinea( linea ) {
    var a = document.getElementById( linea + '_0').value;
    var b = document.getElementById( linea + '_1').value;
    var c = document.getElementById( linea + '_2').value;
    comprobarValores(a, b, c);
}

function validarColumna( columna ) {
    var a = document.getElementById( '0_' + columna).value;
    var b = document.getElementById( '1_' + columna).value;
    var c = document.getElementById( '2_' + columna).value;
    comprobarValores(a, b, c);
}

function validarDiagonal( diagonal ){
    var a = "  ";
    var b = "  ";
    var c = "  ";
    if(diagonal === 1){
        a = document.getElementById( '0_0').value;
        b = document.getElementById( '1_1').value;
        c = document.getElementById( '2_2').value;
    } else {
        a = document.getElementById( '0_2').value;
        b = document.getElementById( '1_1').value;
        c = document.getElementById( '2_0').value;
    }
    comprobarValores(a, b, c);
}

function comprobarValores(a, b, c){
    if(a == b && a == c && a != "  "){
        terminaJuego();
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
    document.getElementById("turno").value = turno;
}

function terminaJuego(){
    cambioTurno();
    alert("El juego termino, ganador " + turno);
    var elements = document.getElementsByName("button");
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }
    turno = 'X';
}

function nuevoJuego(){
    var elements = document.getElementsByName("button");
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
        elements[i].value = "  ";
    }
}
