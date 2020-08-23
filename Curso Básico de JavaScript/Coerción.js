/* Coerción */
//Cambiar un tipo de valor a otro


/* De forma implícita */
//El lenguaje lo hace por nosotros
console.log(4 + "7") //Da 47 (string), porque convierte el 4 en string y lo concatena
console.log(4 * "7") //Da 28 (number), porque convierte el 7 en número y lo multiplica


/* De forma explícita */
var a = 20; //a es de tipo número
var c = String(a) //c es de tipo string
var b = Number(c) //b es de tipo número