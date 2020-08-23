/* Con variables */
//Va a dar indefinido, debe ser declarada antes
console.log(nombre)
var nombre = "Santiago";

/* Con funciones de expresión */
//No va a correr, necesita ser declarada antes
hey();
var hey = function () {
    console.log("Hola");
}

/* Con funciones declarativas */
//Va a a correr, no necesita ser declarada antes
oe();
function oe() {
    console.log("Hola");
}