let display = document.getElementById("calc-preview");
let num = document.querySelectorAll("#calc-numbers button");
let op = document.querySelectorAll("#operators button");

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", value);
}

for (let i = 0; i < op.length - 3; i++) {
    op[i].addEventListener("click", value);
}

op[4].addEventListener("click", percentage);
op[5].addEventListener("click", outcome);
op[6].addEventListener("click", reset);

function value() {
    display.innerHTML += this.innerHTML;
    let inputArray = [];
    inputArray.push(display.innerHTML);
}

function percentage() {
    display.innerHTML += " / 100 *";
}

function outcome() {
    countMe = display.innerHTML;
    display.innerHTML = eval(countMe);
}

function reset() {
    display.innerHTML = "";
}