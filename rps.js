




function computerPlay() {
    var i;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            i = "rock";
            break;
        case 1:
            i = "paper";
            break;
        case 2:
            i = "scissors";
            break;
    }
    return i;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            return "tie";
        }
        else if (computerSelection == "paper") {
            return "lose";
        }
        else {
            return "win";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            return "win";
        }
        else if (computerSelection == "paper") {
            return "tie";
        }
        else {
            return "lose";
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            return "lose";
        }
        else if (computerSelection == "paper") {
            return "win";
        }
        else {
            return "tie";
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();


//console.log(playRound(playerSelection, computerSelection));

function prompt() {
    var prompt = require('prompt');
    var humanSelection;
    prompt.start();
        prompt.get('selection', function (err, result) {
            //console.log('Human: ' + result.selection);
            humanSelection = result.selection;
        });
        return humanSelection;
}

function game() {
    var rounds = 3;
    var playerSelection;

    var humanSelection = prompt();
    console.log("Human selects", humanSelection);

}

game()