let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetButton = document.querySelector("#reset");

const genComputerChoice = () => {
    //rock, paper, scissors
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Draw Game Function
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! Your ${userChoice} Loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }

    // Check if either player has reached a score of 10
    if (userScore === 10 || compScore === 10) {
        choices.forEach(choice => choice.removeEventListener("click", handleChoiceClick));
        resetButton.style.display = "block";

        if (userScore === 10) {
            msg.innerText = "You Win the Game!";
            msg.style.backgroundColor = "green";
        } else {
            msg.innerText = "You Lose the Game!";
            msg.style.backgroundColor = "red";
        }
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genComputerChoice();

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const handleChoiceClick = (event) => {
    const userChoice = event.target.getAttribute("id");
    playGame(userChoice);
}

choices.forEach(choice => {
    choice.addEventListener("click", handleChoiceClick);
});

resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game Reset. Play Again!";
    msg.style.backgroundColor = "#081b31";
    resetButton.style.display = "none";
    choices.forEach(choice => choice.addEventListener("click", handleChoiceClick));
});
