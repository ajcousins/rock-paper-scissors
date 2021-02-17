// Returns rock, paper or scissors at random.
function computerPlay() {
    var i;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            i = "rock";
            circle = document.getElementById("BScreen");
            break;
        case 1:
            i = "paper";
            circle = document.getElementById("BScreen");
            break;
        case 2:
            i = "scissors";
            circle = document.getElementById("BScreen");
            break;
    }
    circle.classList.add("computerColor");
    circle.children[0].src = `RPS-02_${i}.png`
    return i;
}

// Returns win, lose or tie.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            document.getElementById("textDisplay").innerHTML = "Rock cancels out rock."
            return "tie";
        }
        else if (computerSelection == "paper") {
            document.getElementById("textDisplay").innerHTML = "Paper covers rock!"
            return "lose";
        }
        else if (computerSelection == "scissors") {
            document.getElementById("textDisplay").innerHTML = "Rock crushes scissors!"
            return "win";
        }
        else {
            return "lose";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            document.getElementById("textDisplay").innerHTML = "Paper covers rock!"
            return "win";
        }
        else if (computerSelection == "paper") {
            document.getElementById("textDisplay").innerHTML = "Paper cancels out paper."
            return "tie";
        }
        else if (computerSelection == "scissors") {
            document.getElementById("textDisplay").innerHTML = "Scissors cuts paper!"
            return "lose";
        }
        else {
            return "lose";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            document.getElementById("textDisplay").innerHTML = "Rock crushes scissors!"
            return "lose";
        }
        else if (computerSelection == "paper") {
            document.getElementById("textDisplay").innerHTML = "Scissors cuts paper!"
            return "win";
        }
        else if (computerSelection == "scissors") {
            document.getElementById("textDisplay").innerHTML = "Scissors cancels out scissors."
            return "tie";
        }
        else {
            return "lose";
        }
    }
}

var round = 1;
function roundCounter() {
    round++;
    roundDisplay = document.getElementById("round");
    roundDisplay.textContent = `ROUND ${round}`;
}

const buttonRock = document.querySelector(`div[data-button="rock"]`);
const buttonPaper = document.querySelector(`div[data-button="paper"]`);
const buttonScissors = document.querySelector(`div[data-button="scissors"]`);

buttonRock.addEventListener("click", () => {
    if (humanLives > 0 && computerLives > 0) {
        a = document.getElementById("AScreen");
        a.classList.add("humanColor");
        a.children[0].src = "RPS-01_rock.png"
        result = playRound("rock", computerPlay());
        roundCounter();
        lives(result);
    }
})

buttonPaper.addEventListener("click", () => {
    if (humanLives > 0 && computerLives > 0) {
        a = document.getElementById("AScreen");
        a.classList.add("humanColor");
        a.children[0].src = "RPS-01_paper.png"
        result = playRound("paper", computerPlay());
        roundCounter();
        lives(result);
    }
})

buttonScissors.addEventListener("click", () => {
    if (humanLives > 0 && computerLives > 0) {
        a = document.getElementById("AScreen");
        a.classList.add("humanColor");
        a.children[0].src = "RPS-01_scissors.png"
        result = playRound("scissors", computerPlay());
        roundCounter();
        lives(result);
    }
})

function removeTransition() {
    this.classList.remove('damage');
}

var humanLives = 5;
var computerLives = 5;
function lives(result) {
    if (result == "win") {
        computerLives--;
        Bscreen = document.getElementById("BScreen")
        Bscreen.classList.add("damage");
        Bscreen.addEventListener('transitionend', removeTransition);
    } else if (result == "lose") {
        humanLives--;
        Ascreen = document.getElementById("AScreen")
        Ascreen.classList.add("damage");
        Ascreen.addEventListener('transitionend', removeTransition);
    }

    if (humanLives < 5) {
        a = document.getElementsByClassName("barH")[humanLives];
        a.classList.add("lifeBarOut");
        console.log(a);
    }

    if (computerLives < 5) {
        b = document.getElementsByClassName("barC")[4 - computerLives];
        b.classList.add("lifeBarOut");
        console.log(b);
    }

    if (humanLives == 0) {
        document.getElementById("textDisplay").innerHTML = `You lose!<br><br><a href=".">Play again?</a>`
    }

    if (computerLives == 0) {
        document.getElementById("textDisplay").innerHTML = `You win!<br><br><a href=".">Play again?</a>`
    }
}