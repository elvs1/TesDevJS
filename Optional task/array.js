function reverseAndJoinArray(wordsArray) {
    if (!Array.isArray(wordsArray)) {
      console.log('Error: Input must be an array.');
      return;
    }
  
    const reversedWords = wordsArray.map(word => word.split('').reverse().join(''));
    const result = reversedWords.join(' ');
  
    console.log(result);
  }
  
  // Example:
  reverseAndJoinArray(['hello', 'world', 'javascript']);
  reverseAndJoinArray(123);
  reverseAndJoinArray('hello', 'world', 'javascript');