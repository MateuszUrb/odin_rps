const CHOICES = ["rock", "paper", "scissors"];
const CONTAINER = document.querySelector("#container");
const STORE = {
  humanScore: 0,
  computerScore: 0,
};
let playerSelection = "";

const roundResult = document.createElement("div");
const scoreBoard = document.createElement("p");
const choicesDisplay = document.createElement("div");

const rules = {
  rock: { beats: "scissors", message: "Rock beats scissors" },
  paper: { beats: "rock", message: "Paper beats rock" },
  scissors: { beats: "paper", message: "Scissors beat paper" },
};

function getComputerChoice() {
  let randomizeHand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomizeHand];
}

function getHumanChoice() {
  return playerSelection.toLowerCase();
}

function createButton(text, choice) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    playerSelection = choice;
    playGame();
  });
  return button;
}

function updateUI() {
  scoreBoard.textContent = `COMPUTER: ${STORE.computerScore} | PLAYER: ${STORE.humanScore}`;
}

function resetGame() {
  STORE.computerScore = 0;
  STORE.humanScore = 0;
  updateUI();
  choicesDisplay.textContent = "";
}

function checkWinCondition() {
  if (STORE.humanScore === 5) {
    roundResult.textContent = "Congratulations! You won the game!";
    resetGame();
  } else if (STORE.computerScore === 5) {
    roundResult.textContent = "Computer wins the game! Better luck next time!";
    resetGame();
  }
}
function initializeGame() {
  CONTAINER.innerHTML = "";
  CHOICES.forEach((choice) => {
    const button = createButton(
      choice.charAt(0).toUpperCase() + choice.slice(1),
      choice,
    );
    CONTAINER.appendChild(button);
  });
  CONTAINER.append(scoreBoard, choicesDisplay, roundResult);
  updateUI();
}

function playRound(humanChoice, computerChoice) {
  choicesDisplay.textContent = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
  if (humanChoice === computerChoice) {
    roundResult.textContent = "TIE!";
    return;
  }
  if (rules[humanChoice].beats === computerChoice) {
    roundResult.textContent = `YOU WIN! ${rules[humanChoice].message}`;
    STORE.humanScore++;
  } else {
    roundResult.textContent = `YOU LOSE! ${rules[computerChoice].message}`;
    STORE.computerScore++;
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  updateUI();
  checkWinCondition();
}
initializeGame();
