//Guess the number game

const readline = require('readline');                  //provides an interface for reading input

function guessTheNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1; //generates random number and after calculation rounds it down to integer
  let attempts = 0;                                   //tracks how many attempts to guess the number 

  const rl = readline.createInterface({               // provides an interface for reading data from a Readable stream
    input: process.stdin,                             //standard input
    output: process.stdout                            //standard output
  });

  const askUserGuess = () => {
    rl.question('Guess the number between 1 and 100: ', (input) => {
      // Validate if the input contains only digits
      if (/^\d+$/.test(input)) {                     //regular expression to test input 0-9(only digits)
        const userGuess = parseInt(input);           //converts input to integer 

        if (userGuess >= 1 && userGuess <= 100) {    //check if number is valid and executes
          attempts++;

          if (userGuess === secretNumber) {          // checks if user guessed it correctly and executes
            console.log(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`);
            rl.close();                              //closes the readline interface, effectively ending the game
          } else if (userGuess < secretNumber) {     //checks if number is lower or higher
            console.log('Too low! Try again.');
            askUserGuess();
          } else {
            console.log('Too high! Try again.');
            askUserGuess();
          }
        } else {
          console.log('Please enter a valid whole number between 1 and 100.');
          askUserGuess();
        }
      } else {
        console.log('Please enter a valid whole number between 1 and 100.');
        askUserGuess();
      }
    });
  };

  askUserGuess();
}

guessTheNumber();