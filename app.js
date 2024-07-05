let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    //rock,paper,scissor

    let options=["rock", "paper", "ssissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}


//Draw Game Function
const drawGame = () =>{
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin, userChoice, compChoice)=>{
   if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Win Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genComputerChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        userChoice= choice.getAttribute("id");
        playGame(userChoice)
    });
});