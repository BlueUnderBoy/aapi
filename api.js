const body = document.getElementById("cont");
const dc = document.getElementById("d");
const cc = document.getElementById("c");
const dt = document.getElementById("dt");
const ct = document.getElementById("ct");
const db = document.getElementById("db");
const cb = document.getElementById("cb");
const vis = document.getElementById("vis");

const dfighter = document.getElementById('dfighter');
const cfighter = document.getElementById('cfighter');
const vs = document.getElementById("vs")
const dog = document.getElementById('dog');
const cat = document.getElementById('cat');

vis.style.setProperty("text-align", "center")
vis.style.setProperty("margin-right", "40px")

db.style.setProperty("display", "flex")
db.style.setProperty("justify-content", "center")

cb.style.setProperty("display", "flex")
cb.style.setProperty("justify-content", "center")


dt.style.setProperty("display", "flex")
dt.style.setProperty("justify-content", "center")

ct.style.setProperty("display", "flex")
ct.style.setProperty("justify-content", "center")

vs.style.setProperty("margin-left", "50px")
vs.style.setProperty("margin-right", "100px")
dog.addEventListener("click", gnd);
cat.addEventListener("click", gnc);


body.style.setProperty("height", "1000px")
body.style.setProperty("width", "fill")
body.style.setProperty("display", "flex")
body.style.setProperty("justify-content", "center")
body.style.setProperty("align-items", "center")
body.style.setProperty("border-style", "solid")

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dfighter.src = url;
    dog.style.cursor = 'pointer';
}

async function getNewCat() {
    cat.style.cursor = 'wait';
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
    const jsonData = await response.json();
    const url = jsonData.message;

    cfighter.src = jsonData[0]["url"];
    console.log(jsonData)
    cat.style.cursor = 'pointer';
}

function gnd() {
    getNewDog();
}

function gnc() {
    getNewCat();
}

document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

async function testRequest() {
    let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });

    logResponse(response);
}

async function logResponse(response) {
    if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
    } else {
        console.log("The request returned a status other than 200 OK: " + response.status);
    }
}