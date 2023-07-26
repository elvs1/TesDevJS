const readline = require('readline');
const capitalizeFirstLetter = require('./capitalizeSentence');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence starting with a lowercase letter: ", (inputSentence) => {
  const result = capitalizeFirstLetter(inputSentence);
  if (result) {
    console.log("Modified sentence: ", result);
  }
  rl.close();
});