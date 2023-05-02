// Assignment code here
var passwordLength, passwordLowercase, passwordUppercase ; 

//Arrays to store number and special characters. All array lengths include 0

const passwordNumbers = ["0","1","2","3","4","5","6","7","8","9",];//array.length == 10 

const passwordLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                         "k","l", "m", "n", "o", "p", "q", "r", "s", "t",
                         "u", "v", "w", "x","y","z",];//array.length == 26 

const passwordSpecial = ["!", " \" " , ",", "#", "$", "%", "&","\'", "(" ,")",
                         "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
                         "?", "@", "[", " \ ", "]", "^", "_", "\`", "{" , "|", "}", "~"]; //array.length == 33 


function userPrompts () {
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
