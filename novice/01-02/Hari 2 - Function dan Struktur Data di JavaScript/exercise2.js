// make a loop that goes from 1 to 100
for ( var num = 1; num < 101; num ++ ) {
  
  // check if the number is divisible by 3 or 5
  var checkForThree = num % 3;
  var checkForFive = num % 5;
  
  // if the number is divisible by both 3 and 5, then print FizzBuzz
  if ( (checkForThree == 0) && (checkForFive == 0) ) 
  	console.log( "FizzBuzz");
  
  // if the number is divisible by 3, then print Fizz
  else if (checkForThree == 0)
    console.log( "Fizz");
  
  // if the number is divisible by 5, then print Buzz
  else if (checkForFive == 0)
    console.log( "Buzz");
  
  // otherwise just print the number
  else
    console.log( num );
} 
