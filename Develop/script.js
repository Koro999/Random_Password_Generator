var passwordLengthChoice, passwordLowercaseChoice, passwordUppercaseChoice, 
    passwordNumberChoice, passwordSpecialChoice; //all the prompts required from the user to check for true or false 

var passwordLengthChoiceNumber; //the number entered by user converted to a number variable
var finalPassword = ""; //final password container
var passwordCharacterPool = ""; //the total character pool to choose from, depending on prompt answers 

//object containing string values for lowercase,uppercase,numbers and special characters 
const characterStrings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
}

function generatePassword() {    //main function encapsulating all the code to generate random PW

function userPrompts () { //Prompts user for all needed variables
  passwordLengthChoice = prompt("How many characters do you want the password to be?");
  passwordLengthChoiceNumber = Number(passwordLengthChoice); //convert password length from a string to a number 
  var passwordLengthCheck = isNaN(passwordLengthChoiceNumber); //check if conversion worked, returns true if valid conversion
  
  var valid = false;
  while (valid ==false){ //checks the entry of the box to make sure the entry is valid, if not re-prompt until entry is correct
      if (passwordLengthChoiceNumber > 128 || passwordLengthChoiceNumber < 8  || passwordLengthCheck === true) {
        passwordLengthChoice = prompt("Please enter a numeric value between 8 and 128!");
        passwordLengthChoiceNumber = Number(passwordLengthChoice);
        passwordLengthCheck = isNaN(passwordLengthChoiceNumber);
      }
      else{
        valid=true;
      }        
    }
  
    //prompts for what characters to include in the generated password
  passwordLowercaseChoice = confirm("Do you want to include lower-case letters?");
  passwordUppercaseChoice = confirm("Do you want to include upper-case letters?");
  passwordNumberChoice = confirm("Do you want to include numbers?");
  passwordSpecialChoice = confirm("Do you want to include special characters?");

  valid = false;
  while (valid == false){ //checks to make sure ATLEAST ONE character type was approved 
      if (passwordLowercaseChoice === false && passwordUppercaseChoice === false && passwordNumberChoice === false  && passwordSpecialChoice === false) {
        window.alert("Please choose to include at least one option, please try again!");
        passwordLowercaseChoice = confirm("Do you want to include lower-case letters?");
        passwordUppercaseChoice = confirm("Do you want to include upper-case letters?");
        passwordNumberChoice = confirm("Do you want to include numbers?");
        passwordSpecialChoice = confirm("Do you want to include special characters?");
      }
      else{
        valid=true;
      }        
    }
  return;
}

function characterPoolCombined() { //Combines all approved character types into one combined string
    if (passwordLowercaseChoice == true){
      passwordCharacterPool += characterStrings.lowercase; 
    }

    if(passwordUppercaseChoice == true){
      passwordCharacterPool += characterStrings.uppercase;
    }
    if(passwordNumberChoice == true){
      passwordCharacterPool += characterStrings.number; 
    }
    if (passwordSpecialChoice == true){
      passwordCharacterPool += characterStrings.special;  
    }
    return;
}

function generate () { //select a random character from the character pool, the same number of times as the number of characters entered by the user 
  for (let index = 0; index < passwordLengthChoiceNumber; index++) {
    finalPassword += passwordCharacterPool[Math.floor(Math.random() * passwordCharacterPool.length)]
  }
  return ;
}

userPrompts();
characterPoolCombined();
generate();

return finalPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  var password = generatePassword(); //create a password variable that calls on generatePassword() function (this is what we code)
  var passwordText = document.querySelector("#password"); //checking document for the first id with the name password

  passwordText.value = password; //set the password value == our pw generator function

}

// Add event listener to generate button, when the button is clicked do this?
generateBtn.addEventListener("click", writePassword);


//Original method used primarily arrays, it was to cumbersome by the end with all the index checking, still got the same results though.
//Arrays to store number and special characters. All array.lengths include 0
/*
// Assignment code here
var passwordLengthChoice, passwordLowercaseChoice, passwordUppercaseChoice, 
    passwordNumberChoice, passwordSpecialChoice; //all the prompts required from the user

var passwordLengthChoiceNumber;


var finalPassword =;

var passwordCharacterPool = [];
var passwordCharacterPoolEmpty = [];

const passwordNumbers = ["0","1","2","3","4","5","6","7","8","9",];//array.length == 10 

const passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                         "k","l", "m", "n", "o", "p", "q", "r", "s", "t",
                         "u", "v", "w", "x","y","z",];//array.length == 26 

const passwordUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                         "K","L", "M", "N", "O", "P", "Q", "R", "S", "T",
                         "U", "V", "W", "X","Y","Z",];//array.length == 26 

const passwordSpecial = ["!", " \" " , ",", "#", "$", "%", "&","\'", "(" ,")",
                         "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">",
                         "?", "@", "[", " \ ", "]", "^", "_", "\`", "{" , "|", "}", "~"]; //array.length == 33 

//Combines all arrays into one mega array to choose characters from
function megaArray() {  
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

function arrayRandom() {
  passwordLengthFinal = Array.apply(null, Array(passwordLengthChoiceNumber)); //create an empty array with the wanted character value

    for (let index = 0; index < passwordLengthChoiceNumber; index++) {
      //console.log (index)
      var random = Math.floor(Math.random() * passwordCharacterPool.length); //generate a number between 0 and the number of characters wanted
      passwordLengthFinal.splice( index , 1, passwordCharacterPool[random]);
      console.log(passwordLengthFinal)
    }
  return;
}

//userPrompts();
//megaArray();
//arrayRandom();
//passwordLengthFinal = Array.apply(null, Array(passwordLengthChoiceNumber));
//console.log(passwordLengthFinal);
*/