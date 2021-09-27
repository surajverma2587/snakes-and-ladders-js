const createPlayerObject = function () {
  // prompt question and store value
  const playerName = prompt("Enter player name:");

  return {
    name: playerName,
    position: 0,
  };
};

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const getNewPosition = function (currentPlayerIndex, diceNumber) {
  const newPosition = players[currentPlayerIndex].position + diceNumber;
  return newPosition;
};

// create player 1
const player1 = createPlayerObject();

// create player 2
const player2 = createPlayerObject();

// create array of players
const players = [player1, player2];

let inProgress = true;
let playerTurn = 0;

while (inProgress) {
  // get current player
  const currentPlayerIndex = playerTurn % 2; // 1
  const currentPlayer = players[currentPlayerIndex]; // Alice

  // roll dice
  const diceNumber = rollDice(); // 6

  // update score
  const newPosition = getNewPosition(currentPlayerIndex, diceNumber); // 6

  currentPlayer.position = newPosition;

  console.log(
    currentPlayer.name +
      " rolled " +
      diceNumber +
      " and moves to " +
      newPosition
  );

  // check for winner
  if (newPosition >= 100) {
    console.log(currentPlayer.name + " is the winner!!");
    inProgress = false;
  } else {
    playerTurn = playerTurn + 1;
  }
}
