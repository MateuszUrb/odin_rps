const HAND_OPT = ["rock", "paper", "scissors"];

const rules = {
  rock: { beats: "scissors", message: "Rock beats scissors" },
  paper: { beats: "rock", message: "Paper beats rock" },
  scissors: { beats: "paper", message: "Scissors beat paper" },
};

function getComputerChoice() {
  let randomizeHand = Math.floor(Math.random() * HAND_OPT.length);
  return HAND_OPT[randomizeHand];
}

function getHumanChoice() {
  const userInput = prompt("Enter: rock|paper|scissors: ");
  if (Number.isInteger(+userInput)) {
    console.warn("Enter only rock paper or scissors");
    return getHumanChoice();
  }
  return userInput.toLowerCase();
}

function playGame() {
  const store = {
    humanScore: 0,
    computerScore: 0,
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection, store);
  }

  console.log(
    `Final Score: Player ${store.humanScore} | Computer ${store.computerScore}`,
  );

  if (store.computerScore > store.humanScore) {
    console.log("YOU LOSE!");
  } else {
    console.log("YOU LOSE!");
  }
}

function playRound(humanChoice, computerChoice, store) {
  if (humanChoice === computerChoice) {
    console.log("TIE!");
    return;
  }
  if (rules[humanChoice].beats === computerChoice) {
    console.log(`YOU WIN! ${rules[humanChoice].message}`);
    store.humanScore++;
  } else {
    console.log(`YOU LOSE! ${rules[computerChoice].message}`);
    store.computerScore++;
  }
}
playGame();
