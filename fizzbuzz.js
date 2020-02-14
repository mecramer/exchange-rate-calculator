function fizzBuzz(number) {
  for (let n = 0; n < number; n++) {
    console.log('number is ' + n);
    if (n % 3 === 0) {
      if (n % 5 === 0) {
        console.log('FizzBuzz');
      } 
      else {
        console.log('Fizz')
      }     
    } else if (n % 5 === 0) {
      console.log('Buzz');
    }   
    else {
      console.log(n);
    }    
  }
}

fizzBuzz(820);