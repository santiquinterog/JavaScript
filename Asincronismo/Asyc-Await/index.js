const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Do something Async"), 3000)
            : reject(new Error("Test error"))
    })
}

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something);
    } catch {
        console.error(error);
    }
}

console.log("Before2");
anotherFunction();
console.log("After2");

/* ------------ */

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest()
        xhttp.open("GET", url_api, true)
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {

                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error ", url_api))
            }
        })
        xhttp.send()
    })
}

const API = "https://rickandmortyapi.com/api/character/"

const challengeFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const character = await fetchData(`${url_api}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
}

console.log("Before");
challengeFunction(API);
console.log("After");