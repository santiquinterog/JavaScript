/* Parámetros por defecto */

//Antes
function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
}

//Ahora
function newFunction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2()
newFunction2("Santiago", 21, "CO")


/* Templates literal */

let hello = "Hello"
let world = "world"

//Antes
let epicPhrase = hello + " " + world
console.log(epicPhrase);

//Ahora
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);


/* Multilinea en los strings */

//Antes
let lorem = "Esto es una \nfrase épica"
console.log(lorem);

//Ahora
let lorem2 = `Es otra
frase épica`
console.log(lorem2);


/* Destructuración de elementos */
let person = {
    "name": "oscar",
    'age': '32',
    'country': 'MX'
}

//Antes
console.log(person.name, person.age, person.country);

//Ahora
let { name, age, country } = person
console.log(name, age, country);


/* Operador de propagación */

let team1 = ["Oscar", "Julian", "Ricardo"]
let team2 = ["Valeria", "Yesica", "Camila"]

//Ahora
let education = ["David", ...team1, ...team2]
console.log(education);


/* Var y Let */
//const es como un let, pero no se puede reasignar valor

{
    var globalvar = "GV"
}

{
    let blocklet = "BL"
}

console.log(globalvar);
console.log(blocklet);


/* Obejtos */
let name = "Santiago"
let age = 32

//Antes
obj = { name: name, age: age }
console.log(obj);

//Ahora
obj2 = { name, age }
console.log(obj2);


/* Arrow functions */
const name = [{ name: "oscar", age: "32" }, { name: "santiago", age: "21" }]

//Antes
let items = name.map(function(item) {
    console.log(item.name);
})

//Ahora
let items2 = name.map((item2)=>{
    console.log(item2.name);
})


/* Promesas */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve("OK")
        }
        else {
            reject("No")
        }
    })
}

helloPromise()
.then(response => console.log(response))
.then(()=>console.log("Hola"))
.catch(error => console.log(error))


/* Clases */

class calculator {
    constructor(){
        this.valueA = 0,
        this.valueB = 0
    }

    sumar(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sumar(2,2));


/* Módulos */
import hello2 from "./module"
hello2()


/* Generatos */
function* helloworld(){
    if(true){
        yield "Hello ";
    }
    if (true){
        yield "world";
    }
}

const generatorHello = helloworld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)