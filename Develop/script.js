// Assignment code here
var passwordLengthChoice, passwordLowercaseChoice, passwordUppercaseChoice, 
    passwordNumberChoice, passwordSpecialChoice; //all the prompts required from the user

var passwordLengthChoiceNumber;
//Arrays to store number and special characters. All array.lengths include 0

var finalPassword = [];
var passwordLengthFinal= [];//Final password length

var passwordCharacterPool = [];
var passwordCharacterPoolEmpty = [];

const passwordNumbers = ["0","1","2","3","4","5","6","7","8","9",];//array.length == 10 

const passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                         "k","l", "m", "n", "o", "p", "q", "r", "s", "t",
                         "u", "v", "w", "x","y","z",];//array.length == 26 

const passwordUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                         "K","L", "M", "N", "O", "P", "Q", "R", "S", "T",
                         "U", "V", "W", "X","Y","Z",]

const passwordSpecial = ["!", " \" " , ",", "#", "$", "%", "&","\'", "(" ,")",
                         "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
                         "?", "@", "[", " \ ", "]", "^", "_", "\`", "{" , "|", "}", "~"]; //array.length == 33 


                         
function userPrompts () { //Prompts user for all needed variables
  passwordLengthChoice = prompt("How many characters do you want the password to be?");
  passwordLengthChoiceNumber = Number(passwordLengthChoice); //convert password length from a string to a number for later us
  var passwordLengthCheck = isNaN(passwordLengthChoiceNumber);
  
  var valid = false;
  while (valid ==false){ //checks the entry of the box to make sure the entry is valid
      if (passwordLengthChoiceNumber > 128 || passwordLengthChoiceNumber < 8  || passwordLengthCheck === true) {
        passwordLengthChoice = prompt("Please enter a numeric value between 8 and 128!");
        passwordLengthChoiceNumber = Number(passwordLengthChoice);
        passwordLengthCheck = isNaN(passwordLengthChoiceNumber);
      }
      else{
        valid=true;
      }        
    }
  
  passwordLowercaseChoice = confirm("Do you want to include lower-case letters?");
  passwordUppercaseChoice = confirm("Do you want to include upper-case letters?");
  passwordNumberChoice = confirm("Do you want to include numbers?");
  passwordSpecialChoice = confirm("Do you want to include special characters?");
  return;
}

function megaArray() { //Combines all arrays into one mega array to choose from 
  if (passwordLowercaseChoice == true){
    passwordCharacterPool = passwordCharacterPool.concat(passwordLowercase); 
  }

  if(passwordUppercaseChoice == true){
    passwordCharacterPool = passwordCharacterPool.concat(passwordUppercase); 
  }
  
  if(passwordNumberChoice == true){
    passwordCharacterPool = passwordCharacterPool.concat(passwordNumbers); 
  }

  if (passwordSpecialChoice == true){
    passwordCharacterPool = passwordCharacterPool.concat(passwordSpecial); 
  }

  //console.log(passwordCharacterPool);// check if arrays combine properly
  return;
}






userPrompts();
megaArray();
passwordLengthFinal = Array.apply(null, Array(passwordLengthChoiceNumber));
console.log( passwordLengthFinal);

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
