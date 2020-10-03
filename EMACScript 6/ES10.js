/* Ayyar flat */

let array = [1,2,3, [1,2,3, [1,2,3]]]

//Profundidad 1
console.log(array.flat());
//Profundidad total
console.log(array.flat(2));
console.log(array.flat());

let array2 = [1,2,3]
console.log(array2.flatMap(value => [value, value*2]));


/* trimStart y trimEnd */
let hello = "  hello world   "
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());


/* try - catch */

//Antes
try{
    
} catch(error){

}

//Ahora
try{
    
} catch{

}


/* fromEntries */
//Convierte un arreglo con clave valor en un objeto
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))


/* description in Symbol Object*/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);