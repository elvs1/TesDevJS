function capitalizeFirstLetter(sentence) {
  if (typeof sentence !== 'string') {
    console.log('Error: Input must be a string.');
    return;
  }

  if (sentence.match(/^[A-Z]/)) {
    console.log('Error: Sentence must start with a lowercase letter.');
    return;
  }

  if (!isNaN(sentence)) {
    console.log('Error: Sentence cannot be a number.');
    return;
  }

  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

module.exports = capitalizeFirstLetter;