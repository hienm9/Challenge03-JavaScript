let allAnswers = "";
// create a string/array for the each characters type: lowercase, uppercase, numeric, special
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let numCharacters = "1234567890";
let specialCharacters = "!@#$%^&*()_+";
let passwordLenght = 0;

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    passwordOptions();
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ1234567890!@#$%^&*()_+

// create a function to generate password
function generatePassword() {
  debugger;
  // create a for loop 
  // Then the password is generated, use the getRandom function to get arandom element from an array as an example below:
  for (let i =0; i < passwordLenght; i++) {
    let randomPass = allAnswers[Math.floor(Math.random() * passwordLenght.length)];
    console.log(randomPass);
    let randElement = randElement + randomPass;
    console.log(randElement);
    }
    return randElement;
  
//Close the for loop
}

// create an emptry to store the "yes" values

// create a function to prompt user for password options
function passwordOptions() {
// prompt for lenght of the password
  passwordLenght = window.prompt("Enter a number for your password lenght?");
  // prompt for character types to include lowercase
// use window prompt and window confirm such as do you want to use upper case.
// conditional statement to if e.g uppcase is yes, then "add to an empty string (need to create empty string to store the value"
// if no then exit out the if statement
let charLowercase = window.confirm("Do you want to include lowercase?");
if (charLowercase) {
   allAnswers = allAnswers.concat(lowerCharacters);
}
let charUppercase = window.confirm("Do you want to include uppercase?");
if (charUppercase) {
   allAnswers = allAnswers.concat(upperCharacters);
}
let charNum = window.confirm("Do you want to include numbers?");
if (charNum) {
   allAnswers = allAnswers.concat(numCharacters);
}
let charSpecial = window.confirm("Do you want to include special characters?");
if (charSpecial) {
   allAnswers = allAnswers.concat(specialCharacters);
}
console.log(allAnswers);
}

   



//prompt for character types to include upppercase
// similar conditional statement, if yes concat the value to the empty string"
// no exit

//prompt for character types numeric

//prompt for character types special characters

// When all prompts are answered, validate at least one character type should be selected 



// The password is displayed in the password box
