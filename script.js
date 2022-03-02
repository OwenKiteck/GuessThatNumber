// GUESS THAT NUMBER

// variables
const enterNumText = `Please enter a number greater than zero`;
let restartGame = true;
let rangeNum; //for storing the range
let topRangeNum;
let lowRangeNum = 0
let randomNum; //for storing the answer
let attempts; //for storing the attempts left
let guess; //for storing the users guess
let playAgain; //for storing the users response to play again (or not) 

// GAME STARTS HERE
alert(`Welcome to "Guess That Number"! press OK to start`)


while (restartGame) {
    topRangeNum = undefined;
    lowRangeNum = 0;
    // Set range
    rangeNum = parseInt(prompt(`What is the range you want?`));
    rangeNum = parseInt(rangeNum)
    // This is that if the number is negative, zero, or text, it will ask for it again 
    while (!rangeNum || rangeNum < 1) {
        rangeNum = parseInt(prompt(enterNumText));
    };
    topRangeNum = rangeNum;

    // generate random number
    randomNum = Math.floor(Math.random() * rangeNum + 1);

    // Set the number of attempts
    attempts = parseInt(prompt(`Please enter a number of attempts:`));
    while (!attempts || attempts < 1 || attempts >= rangeNum) {
        attempts = parseInt(prompt(`Attempts must be a number between 0 and ${rangeNum}`));
    };

    // Actual game play
    guess = prompt(`Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`)
        while (true) {
            if (guess == `fries with that`) {
                alert(`The number is ${randomNum}`);
                guess = prompt(`Pick a number from ${lowRangeNum} to ${topRangeNum}. You have ${attempts} attempt(s) left:`)
            }
            guess = parseInt(guess)
            while (!guess || guess < 1 || guess > rangeNum) {
                guess = parseInt(prompt(`Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`))
            }
            attempts--;

            if (guess === randomNum) {
                alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`)
                break;
            } else if (attempts === 0) {
                alert(`Sorry, but tou ran out of attempts. The number was ${randomNum}`)
                break;
            } else if (guess < randomNum) {
                if (guess > lowRangeNum) {
                    lowRangeNum = parseInt(guess);
                };
                guess = prompt(`Too low. Pick a number from ${lowRangeNum} to ${topRangeNum}. You have ${attempts} attempt(s) left:`)
            } else if (guess > randomNum) {
                if (guess < topRangeNum) {
                    topRangeNum = parseInt(guess);
                };
                guess = prompt(`Too high. Pick a number from ${lowRangeNum} to ${topRangeNum}. You have ${attempts} attempt(s) left:`)
            };
        }

        playAgain = prompt(`Would you like to play again? Y for yes. N for no.`)
        while (true) {
        if (playAgain.toUpperCase() === `N`) {
            alert( `Thanks for playing!`)
            restartGame = false;
            break;
        } else if (playAgain.toUpperCase() === `Y`) {
            break;
        } else {
            playAgain = prompt(`Please enter Y or N.`)
        }
    }
}