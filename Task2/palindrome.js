function checkPalindrome(word) {
    if (typeof word !== 'string') {
      console.log('Error: Input must be a string.');
      return false;
    }
  
    const wordBackwards = word.split('').reverse().join('');
  
    if (word === wordBackwards) {
      console.log(`${word} reads the same from both sides.`);
      return true;
    } else {
      console.log(`${word} does not read the same from both sides.`);
      console.log(`Backwards ${word} reads ${wordBackwards}.`);
      return false;
    }
  }
  
  checkPalindrome("kayak");
  checkPalindrome("hyper");
  checkPalindrome("ala");
  checkPalindrome(123);