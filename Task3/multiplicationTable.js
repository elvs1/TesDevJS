function multiplicationTable(number) {                  //declares a function named multiplicationTable that takes one parameter called number.
    if (typeof number !== 'number') {                   //checks if parameter is not number
      console.log('Error: Input must be a number.');    //logs an error message
      return;
    }
  
    for (let i = 1; i <= 10; i++) {                     // for loop
      const result = number * i;                        //calculation
      console.log(`${number} * ${i} = ${result}`);
    }
  }
  
  // examples:
  multiplicationTable(2);
  multiplicationTable('test');
  