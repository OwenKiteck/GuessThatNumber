// GUESS THAT NUMBER

// pre-determined things
const enterNumText = `Please enter a number greater than zero`;
let restartGame = true;
let rangeNum; //for storing the range
let randomNum; //for storing the answer
let attempts; //for storing the attempts left
let guess; //for storing the users guess
let playAgain; //for storing the users response to play again (or not) 

// GAME STARTS HERE
alert(`Welcome to "Guess That Number"! press OK to start`)

let answer = prompt();
