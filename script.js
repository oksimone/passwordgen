// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var lowerCase = ['a', 'z', 'b', 'n', 's', 'k', 't', 'p', 'f', 'r', 'q','e', 'y', 'i', 'o','u', 'd', 'g', 'h', 'j', 'l', 'x', 'c', 'v', 'b', 'm'];
var upperCase = ['Q','W', 'E', 'R','T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C','V', 'B', 'N', 'M' ];
var num = ['0','1', '2', '3', '4', '5', '6', '7', '8,', '9', '10'];
var specialChar = ['!', '$', '^', '@', '*', '+', '=', '?', '>', '<'];
// var passWordLength = 1

var pickedChararr = []
// var pickedUpperarr = []
// var pickedNumarr = []
// var special



// checking to make sure it works in the console
console.log(lengthOfPass, pickedLowerarr)



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var lengthOfPass = parseInt(prompt("How long would you like your password? ***Must be between 8 and 128."));
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  if(confirm("Do you want lowercase letters?")){
    pickedChararr.push(lowerCase)
    
  }
  if(confirm("Do you want uppercase letters?")){
    pickedChararr.push(lowerCase)
  }
  if(confirm("Do you want numeric characters?")){
    pickedChararr.push(num)
  }
  if(confirm("Do you want symbols?")){
    pickedChararr.push(specialChar)
  }
  
}

for(var i = 0; i < passWordLength; i++){
  var randomLowerCase = Math.floor(Math.random() * pickedChararr.length);
  var randomUpperCase = Math.floor(Math.random()* pickedChararr[randomLowerCase].length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
