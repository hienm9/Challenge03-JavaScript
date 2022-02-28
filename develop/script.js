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
  debugger;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//  abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ1234567890!@#$%^&*()_+

// create a function to generate password
function generatePassword() {
  
  // create a for loop 
  // Then the password is generated, use the getRandom function to get arandom element from an array as an example below:
  let randomPass = "";
  let randElement = "";
  for (let i = 0; i < passwordLenght; i++) {
    randomPass = allAnswers[Math.floor(Math.random() * allAnswers.length)];
    console.log(randomPass);
    randElement = randElement + randomPass;
    console.log(randElement);
  }
  return randElement;

  //Close the for loop
}

// create an emptry to store the "yes" values

// create a function to prompt user for password options
function passwordOptions() {
  // prompt for lenght of the password
   // if the number entered is < 5 then alert "password lenght must be at least 5 characters"
  // if the number entere is > 30, then alert "Password leght must be lesss than 30 characters"
  // if the input is not a number, then alert Password lenght must be a number"

  let isValidInput = "YES";

  do {
    passwordLenght = window.prompt("Enter a number for your password lenght. Number must be between 5 - 30");
    
    isValidInput = "YES";
    allAnswers ="";
    if (passwordLenght==null){
      break;
    }
    else if (passwordLenght < 5) {
      alert("password lenght must be at least 5 characters");
      isValidInput = "NO";
    }
    else if (passwordLenght > 30) {
      alert("password lenght must be less thanb 30 characters");
      isValidInput = "NO";
    }
    else if (isNaN(passwordLenght)) {
      alert("Password lenght must be a number");
      isValidInput = "NO";
    } else {
       callValidateChar();
          }
      
  }
  while (isValidInput == "NO");
}

function callValidateChar(){
  let isValidChar="YES";
  do{
        // confirm user to include lowercase in the password
        isValidChar="YES";    
        debugger;
        let charLowercase = window.confirm("Do you want to include lowercase?");
            // conditional statement if answer is yes then add to the emptry string
            if (charLowercase ) {
              allAnswers = allAnswers.concat(lowerCharacters);
            }
            
            // conditional statement to if e.g uppcase is yes, then "add to an empty string (need to create empty string to store the value"
            // if no then exit out the if statement
            let charUppercase = window.confirm("Do you want to include uppercase?");
            if (charUppercase ) {
              allAnswers = allAnswers.concat(upperCharacters);
            }
            let charNum = window.confirm("Do you want to include numbers?");
            if (charNum ) {
              allAnswers = allAnswers.concat(numCharacters);
            }
            let charSpecial = window.confirm("Do you want to include special characters?");
            if (charSpecial ) {
              allAnswers = allAnswers.concat(specialCharacters);
            }
            if ((!charLowercase) && (!charUppercase) && (!charNum) && (!charSpecial)) {
              alert("please select at least on option: upperdase, lowecase, specail char")
              isValidChar="NO";
            }
   }
while(isValidChar=="NO") 
  }



//prompt for character types to include upppercase
// similar conditional statement, if yes concat the value to the empty string"
// no exit

//prompt for character types numeric

//prompt for character types special characters

// When all prompts are answered, validate at least one character type should be selected 



// The password is displayed in the password box
