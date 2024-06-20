userScore=0;
compScore=0
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");





const comChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const comSelect = Math.floor(Math.random() * 3);
  return option[comSelect];
};

const drawGame = () => {
  console.log("Draw Game");
  msg.innerText="Draw Game, Play Again";
  msg.style.backgroundColor="orange";


};

const showWinner = (userWin,userChoice,computerchoice) => {
  if (userWin) {
    console.log("You Won!");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win!, Your ${userChoice} beats ${computerchoice}`;
    msg.style.backgroundColor="Green";
  
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You loss");
    msg.innerText=`You Lose , ${computerchoice} beats Your ${userChoice}`;
    msg.style.backgroundColor="darkred";

  }
};

const playGames = (userChoice) => {
  console.log("user choice = ", userChoice);
  const computerchoice = comChoice();
  console.log("computer choice = ", computerchoice);

  if (userChoice === computerchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, scissors
      userWin = computerchoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = computerchoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = computerchoice === "paper" ? true : false;
    }
    showWinner(userWin,userChoice,computerchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGames(userChoice);
  });
});
