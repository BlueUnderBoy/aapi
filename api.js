const dfighter = document.getElementById('dfighter');
const cfighter = document.getElementById('cfighter');
const dog = document.getElementById('dog');
const cat = document.getElementById('cat');
dfighter.addEventListener("click", getNewDog);
cfighter.addEventListener("click", getNewCat)

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
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonData = await response.json();
    const url = jsonData.message;

    cfighter.src = url;
    cat.style.cursor = 'pointer';
}
