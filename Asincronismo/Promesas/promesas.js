const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Ok")
        } else {
            reject("No ok")
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))


/* --------- */

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Ok")
            }, 2000);
        } else {
            const error = new Error("No ok")
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))


/* --------- */
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log(response))
    .catch(error => console.error(error))


/* ---------------- */

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

fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
}).then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then(data => {console.log(data.dimension)})
.catch(error => console.error(error))