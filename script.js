// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var lowerCase = ['a', 'z', 'b', 'n', 's', 'k', 't', 'p', 'f', 'r', 'q','e', 'y', 'i', 'o','u', 'd', 'g', 'h', 'j', 'l', 'x', 'c', 'v', 'b', 'm'];
var upperCase = ['Q','W', 'E', 'R','T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C','V', 'B', 'N', 'M' ];
var num = ['0','1', '2', '3', '4', '5', '6', '7', '8,', '9', '10'];
var specialChar = ['!', '$', '^', '@', '*', '+', '=', '?', '>', '<'];


var pickedChararr = []



// checking to make sure it works in the console




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
