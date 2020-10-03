/* Operador de reposo */

const obj = {
    name: "oscar",
    age: 32,
    country: "MX"
}

let { name, ...all } = obj
console.log(name, all);


/* Propagation properties */
const obj2 = {
    name: "oscar",
    age: 32
}

const obj3 = {
    ...obj2,
    country: "MX"
}

console.log(obj3);


/* Promise Finally */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => {
                resolve('Hello World!');
            }, 3000)
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));


/* Regex */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20")
const year = match[1]
const month = match[2]
const day = match[3]

console.log(match);
console.log(year);
console.log(month);
console.log(day);