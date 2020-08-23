/* Funciones declarativas */
//Para usarla no es necesario declararla antes en el código
function miFuncion() {
    return 3;
}

miFuncion();


/* Funciones de expresión */
//Para usarla es necesario declararla antes en el código
var miFuncion = function (a, b) {
    return a + b;
}

miFuncion(1, 2);