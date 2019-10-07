        let play = document.getElementById("play");
        play.addEventListener("click", playGame);
        let players = document.getElementById("players");
        players.addEventListener("change", changeGame);
        let p1choice = document.getElementById("p1choice");
        let p2choice = document.getElementById("p2choice");
        let choices = ["rock", "paper", "scissors", "lizard", "spock"];
        for (choice of choices) {
            let element = document.createElement("option");
            element.value = choice;
            element.innerHTML = choice;
            p1choice.append(element);
        }
        for (choice of choices) {
            let element = document.createElement("option");
            element.value = choice;
            element.innerHTML = choice;
            p2choice.append(element);
        }
        function playGame(event){
            let p1value = p1choice.value;
            let p2value;

            if (p2choice.disabled === false) {
                p2value = p2choice.value;
            }else {
                p2value = choices[Math.floor(Math.random()*choices.length)];
            }
            if (p1value === 'rock' && p2value === 'paper'){
              result = "P2 wins!";
            }
            if (p1value === 'rock' && p2value === 'spock'){
              result = "P2 wins!";
            }
            if (p1value === 'rock' && p2value === 'scissors'){
              result = "P1 wins!";
            }
            if (p1value === 'rock' && p2value === 'lizard'){
              result = "P1 wins!";
            }
            if (p1value === 'paper' && p2value === 'rock'){
              result = "P1 wins!";
            }
            if (p1value === 'paper' && p2value === 'spock'){
              result = "P1 wins!";
            }
            if (p1value === 'paper' && p2value === 'scissors'){
              result = "P2 wins!";
            }
            if (p1value === 'paper' && p2value === 'lizard'){
              result = "P2 wins!";
            }
            if (p1value === 'scissors' && p2value === 'paper'){
              result = "P1 wins!";
            }
            if (p1value === 'scissors' && p2value === 'lizard'){
              result = "P1 wins!";
            }
            if (p1value === 'scissors' && p2value === 'rock'){
              result = "P2 wins!";
            }
            if (p1value === 'scissors' && p2value === 'spock'){
              result = "P2 wins!";
            }
            if (p1value === 'lizard' && p2value === 'rock'){
              result = "P2 wins!";
            }
            if (p1value === 'lizard' && p2value === 'scissors'){
              result = "P2 wins!";
            }
            if (p1value === 'lizard' && p2value === 'paper'){
              result = "P1 wins!";
            }
            if (p1value === 'lizard' && p2value === 'spock'){
              result = "P1 wins!";
            }
            if (p1value === 'spock' && p2value === 'rock'){
              result = "P1 wins!";
            }
            if (p1value === 'spock' && p2value === 'scissors'){
              result = "P1 wins!";
            }
            if (p1value === 'spock' && p2value === 'paper'){
              result = "P2 wins!";
            }
            if (p1value === 'spock' && p2value === 'lizard'){
              result = "P2 wins!";
            }
            if (p1value === p2value) {
              result = "Tie!";
            }
            document.getElementById("result").innerHTML = result
            console.log(result);
        }
        function changeGame(event){
            if (players.value === "1") {
                p2choice.disabled = true;
            }else {
                p2choice.disabled = false;
            }
        }