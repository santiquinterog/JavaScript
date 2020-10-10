const { error } = require("console");

function sum(num1, num2) {
    return num1 + num2
}

function calc(num1, num2, cb) {
    return cb(num1, num2)
}

console.log(calc(2, 2, sum));

/* ------ */

function date(cb) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date
        cb(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate)

/* ---------- */

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/"

function  fetchData(url_api, cb){
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", url_api, true)
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                cb(null, JSON.parse(xhttp.responseText))
            }
            else{
                const error = new Error("Error " + url_api)
                return cb(error, null)
            }
        }
    }
    xhttp.send()
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url,  function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})