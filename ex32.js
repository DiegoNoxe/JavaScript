//Factorial of a Number: Calculate the factorial of a number.

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log(`Passo ${i}: ${result}`); 
    }
    return result;
  }
  
  factorial(5);
