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
    // create range
    rangeNum = parseInt(prompt(`What is the range you want?`));
    rangeNum = parseInt(rangeNum)
    // This is that if the number is negative, zero, or text, it will ask for it again 
    while (!rangeNum || rangeNum < 1) {
        rangeNum = parseInt(prompt(enterNumText));
    };
    topRangeNum = rangeNum;

    // generate random number
    // randomNum = Math.floor(Math.random() * rangeNum + 1);
    randomNum = Math.random();
    randomNum *= rangeNum;
    randomNum += 1;
    randomNum = Math.floor(randomNum)

    // Set the number of attempts
    attempts = parseInt(prompt(`Please enter a number of attempts:`));
    while (!attempts || attempts < 1 || attempts > randomNum) {
        attempts = parseInt(prompt(`Attempts must be a number between 0 and ${rangeNum}`));
    };

    


    // 
    // 
    alert(`hahaha`)

    guess = prompt(`Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`)
    while (true) {
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
            guess = prompt(`Too low. Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`)
        } else if (guess > randomNum) {
            guess = prompt(`Too high. Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`)

        }
    }
    // 
    // 

    break;
}

            // Entering guesses
                guess = undefined;
                while (guess !== randomNum) {

                    if (guess == undefined) {
                        guess = parseInt(prompt(`Pick a number from 0 to ${rangeNum}. You have ${attempts} attempt(s) left:`));
                    }

                    if (guess > randomNum) {
                        guess = parseInt(prompt(`Too high. Pick a number from ${lowRangeNum} to ${topRangeNum}. You have ${attempts} attempt(s) left:`));
                    } else if (guess < randomNum) {
                        guess = parseInt(prompt(`Too low. Pick a number from ${lowRangeNum} to ${topRangeNum}. You have ${attempts} attempt(s) left:`));
                    };
                    // Changing the seen range in the prompts (not the actual range)
                    if (guess < topRangeNum && guess > rangeNum) {
                        topRangeNum = guess;
                    } 
                    if (guess > lowRangeNum && guess < rangeNum) {
                        lowRangeNum = guess;
                    }
                }