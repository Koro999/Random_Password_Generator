// Assignment code here
var passwordLengthChoice, passwordLowercaseChoice, passwordUppercaseChoice, passwordNumberChoice, passwordSpecialChoice; 

//Arrays to store number and special characters. All array.lengths include 0

const passwordLength = [];

const passwordNumbers = ["0","1","2","3","4","5","6","7","8","9",];//array.length == 10 

const passwordLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                         "k","l", "m", "n", "o", "p", "q", "r", "s", "t",
                         "u", "v", "w", "x","y","z",];//array.length == 26 

const passwordSpecial = ["!", " \" " , ",", "#", "$", "%", "&","\'", "(" ,")",
                         "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
                         "?", "@", "[", " \ ", "]", "^", "_", "\`", "{" , "|", "}", "~"]; //array.length == 33 


function userPrompts () {
  passwordLengthChoice = prompt("How many characters do you want the password to be?");
  var passwordLengthChoiceConvert = Number(passwordLengthChoice); //convert password length from a string to a number for later us
  var passwordLengthCheck = isNaN(passwordLengthChoiceConvert);
  
  var valid = false;
  while (valid ==false){ //checks the entry of the box to make sure the entry is valid
      if (passwordLengthChoiceConvert > 128 || passwordLengthChoiceConvert < 8  || passwordLengthCheck === true) {
        passwordLengthChoice = prompt("Please enter a numeric value between 8 and 128!");
        passwordLengthChoiceConvert = Number(passwordLengthChoice);
        passwordLengthCheck = isNaN(passwordLengthChoiceConvert);
      }
      else{
        valid=true;
        return;
      }        
    }
  
  passwordLowercaseChoice = confirm("Do you want to include lower-case letters?");
  passwordUppercaseChoice = confirm("Do you want to include upper-case letters?");
  passwordNumberChoice = confirm("Do you want to include numbers?");
  passwordSpecialChoice = confirm("Do you want to include special characters?");
  return;
}

userPrompts ();

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
