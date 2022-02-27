// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create an emptry to store the "yes" values
let allAnswers = "";
// create a string/array for the each characters type: lowercase, uppercase, numeric, special
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let numCharacters = "1234567890";
let specialCharacters = "!@#$%^&*()_+";


// prompt for lenght of the password
let passwordLenght = window.prompt("How many characters would you like for your password?");
   

// prompt for character types to include lowercase
// use window prompt and window confirm such as do you want to use upper case.
// conditional statement to if e.g uppcase is yes, then "add to an empty string (need to create empty string to store the value"
// if no then exit out the if statement
let charLowercase = window.prompt("Do you want to include lowercase?")

//prompt for character types to include upppercase
// similar conditional statement, if yes concat the value to the empty string"
// no exit

//prompt for character types numeric

//prompt for character types special characters

// When all prompts are answered, validate at least one character type should be selected 
// create a for loop 

  // Then the password is generated, use the getRandom function to get arandom element from an array as an example below:
    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];

      return randElement;
    }
//Close the for loop


// The password is displayed in the password box
