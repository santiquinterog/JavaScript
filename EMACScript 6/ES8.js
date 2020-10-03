/* Object entries */

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);


/* Object values */

const data2 = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const values = Object.values(data2)
console.log(values);
console.log(values.length);


/* Padding */
const string = "Hello"

//El primer parámetro es el número de carácteres con que al final quedará el string (teniendo en cuenta los que ya tiene)
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(13, "1234"));


/* Tariling comas */

//SIgnifica que pueden haber más elementos o no
const data3 = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}


/* Async-Await */

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve("Hello world")
            }, 2000)
            : reject(new Error("Error"))
    })
}

const HelloAsync = async () => {
    const hello = await helloworld()
    console.log(hello);
    console.log("hello2");
}

HelloAsync()


//Otra forma sería
const anotherFunction = async () => {
    try {
        const hello = await helloworld()
        console.log(hello);
        console.log("hello2");
    } catch (error) {
        console.log(error);
    }
}

anotherFunction()