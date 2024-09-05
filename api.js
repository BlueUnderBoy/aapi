const dfighter = document.getElementById('dfighter');
const cfighter = document.getElementById('cfighter');
const dog = document.getElementById('dog');
const cat = document.getElementById('cat');

dog.addEventListener("click", gnd);
cat.addEventListener("click", gnc);

const body = document.getElementById("cont");

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
