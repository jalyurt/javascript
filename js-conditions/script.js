// select button id="play"
let play = document.getElementById("play");
// listen for button id="play" click, run function playGame()
play.addEventListener("click", playGame);

// select dropdown id="players"
let players = document.getElementById("players");
// listen for dropdown id="players" change, run function changeGame()
players.addEventListener("change", changeGame);

// select dropdown id="p1choice"
let p1choice = document.getElementById("p1choice");
// select dropdown id="p2choice"
let p2choice = document.getElementById("p2choice");
// create variable 'choices' to contain option "rock", option "paper", option "scissors"
let choices = ["rock", "paper", "scissors"];


for (choice of choices) { // choice is a variable created within this very line
    // create element "<option> </option>"
    let element = document.createElement("option");
    // define value of element as "choice"
    element.value = choice;
    // display element's choice on page
    element.innerHTML = choice;
    // add element "<option> </option>" to p1choice dropdown
    p1choice.append(element);
}

// same as above but for p2choice
for (choice of choices) {
    let element = document.createElement("option");
    element.value = choice;
    element.innerHTML = choice;
    p2choice.append(element);
}
        
function playGame(event){
    // assign the value of p1choice dropdown's options to let p1value
    let p1value = p1choice.value;
    // create variable (given content in if-else statement)
    let p2value;
    // when result is given, output into html div id="result"
    let result = document.getElementById("result");

    // if p2choice dropdown is NOT disabled
    if (p2choice.disabled === false) {
        // then assign it values
        p2value = p2choice.value;
    }else{
        // if p2choice IS disabled, allow randomized value
        p2value = choices[Math.floor(Math.random()*choices.length)];
    }
    
    // p1 rock
    if (p1value === "rock" && p2value === "paper"){
        result.innerHTML = "Player 2 wins!";
    }
    if (p1value === "rock" && p2value === "scissors"){
        result.innerHTML = "Player 1 wins!";
    }

    // p1 paper
    if (p1value === "paper" && p2value === "rock"){
        result.innerHTML = "Player 1 wins!";
    }
    if (p1value === "paper" && p2value === "scissors"){
        result.innerHTML = "Player 2 wins!";
    }

    // p1 scissors
    if (p1value === "scissors" && p2value === "rock"){
        result.innerHTML = "Player 2 wins!";
    }
    if (p1value === "scissors" && p2value === "paper"){
        result.innerHTML = "Player 1 wins!";
    }

    // tie
    if (p1value === p2value){
        result.innerHTML = "You tied!";
    }
}

function changeGame(event){
    // if amount of players is 1
    if (players.value === "1") {
        // p2 choices are disabled
        p2choice.disabled = true;
    }else{
        // else (if amount of players is 2) p2 choices are available
        p2choice.disabled = false;
    }
}