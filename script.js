// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var lowerCase = ['a', 'z', 'b', 'n', 's', 'k', 't', 'p', 'f', 'r', 'q', 'e', 'y', 'i', 'o', 'u', 'd', 'g', 'h', 'j', 'l', 'x', 'c', 'v', 'b', 'm'];
var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8,', '9', '10'];
var specialChar = ['!', '$', '^', '@', '*', '+', '=', '?', '>', '<'];
function generatePassword() {
  var password = ''

  var lengthOfPassword = parseInt(prompt("How long would you like your password? Must be between 8 and 128 characters"))
  var pickedCharacterArr = []

  if (confirm('Would you like lowercase characters?')) {
    pickedCharacterArr.push(lowerCase)
  }
  if (confirm('Would you like uppercase characters?')) {
    pickedCharacterArr.push(upperCase)
  } if (confirm('Would you like numeric characters?')) {
    pickedCharacterArr.push(numChar)
  } if (confirm('Would you like special characters?')) {
    pickedCharacterArr.push(specialChar)
  } 
  if(lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Password needs to be between 8 and 128 characters")
    return ''
  }

  if(pickedCharacterArr < 1 ) {
    alert("Must choose at least one character")
  }

  // checking to make sure it works in the console
  console.log(lengthOfPassword, pickedCharacterArr)

  for (var i = 0; i < lengthOfPassword; i++) {
    var randomCharacter = Math.floor(Math.random() * pickedCharacterArr.length);
    var randomSpecificCharacter = Math.floor(Math.random() * pickedCharacterArr[randomCharacter].length);
    var CharacterVariety = pickedCharacterArr[randomCharacter][randomSpecificCharacter]

    password += CharacterVariety
    console.log(randomCharacter, randomSpecificCharacter, CharacterVariety)
  }
    return password
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
