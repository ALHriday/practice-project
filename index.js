let btn = document.querySelector(".content button");
let heading = document.querySelector(".content h2");
let startbtn = document.querySelector(".startbtn");
let resetbtn = document.querySelector(".resetbtn");

let array = [" This is a very beautiful banner."];

let arrayL = 0;
let interval;

heading.innerHTML = " This is a very beautiful banner.";

function start() {
    array.forEach(function (e) {

        heading.innerHTML = "";

        interval = setInterval(function () {
            if (arrayL === 32) {
                arrayL = 0;
                heading.innerHTML = "";
            } else {
                arrayL++;
                heading.innerHTML += e[arrayL];
            };
        }, 200);
    });
};

startbtn.addEventListener("click", function () {
    start();
    startbtn.disabled = true;
    console.log(startbtn.disabled);
});

resetbtn.addEventListener("click", reset());

function reset() {
    clearInterval(interval);
    arrayL = 0;
    heading.innerHTML = "This is a very beautiful banner.";
    startbtn.disabled = false;
    console.log(startbtn.disabled);
};

