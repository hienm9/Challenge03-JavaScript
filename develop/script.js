// create an empty string that will hold the characters from answers
let allAnswers = "";
// create a string/array for the each characters type: lowercase, uppercase, numeric, special
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let numCharacters = "1234567890";
let specialCharacters = "!@#$%^&*()_+";
let passwordLenght = 0; //initialize the password lenght to 0

// make global variables for the generate password function
let charNum = false;
let charLowercase = false;
let charUppercase = false;
let charSpecial = false;

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
  let randomPass = "";

  let randElement = "";
  // create a for loop 
  // Use the getRandom function to get a random element from each answer that is yes
  // and then get randrom characters for the remainder lenght from the all yes answers string.
  if (charNum) {
    randElement = numCharacters[Math.floor(Math.random() * numCharacters.length)];
    passwordLenght=passwordLenght-1
  };
   if (charLowercase) {
      randElement = randElement  + lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];
      passwordLenght=passwordLenght-1
    };
   
    if (charUppercase) {
      randElement = randElement  + upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
      passwordLenght=passwordLenght-1
    };
    if (charSpecial) {
      randElement = randElement  + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      passwordLenght=passwordLenght-1
    };

  for (let i = 0; i < passwordLenght; i++) {
    randomPass = allAnswers[Math.floor(Math.random() * allAnswers.length)];
    randElement = randElement + randomPass;
  }
  return randElement;
}


// create a function to prompt user for password options
function passwordOptions() {
  // create an emptry to store the "yes" values
  let isValidInput = "YES";

   // prompt for lenght of the password
  // if the number entered is < 8 then alert "password lenght must be at least 8 characters"
  // if the number entere is > 128, then alert "Password leght must be lesss than 128 characters"
  // if the input is not a number, then alert Password lenght must be a number"
  do {
    passwordLenght = window.prompt("Enter a number for your password lenght. Number must be between 8 - 128");
    
    isValidInput = "YES";
    allAnswers ="";
    if (passwordLenght==null){
      break;
    }
    else if (passwordLenght < 5) {
      alert("password lenght must be at least 8 characters");
      isValidInput = "NO";
    }
    else if (passwordLenght > 30) {
      alert("password lenght must be less than 128 characters");
      isValidInput = "NO";
    }
    else if (isNaN(passwordLenght)) {
      alert("Password lenght must be a number");
      isValidInput = "NO";
    } else {
       validateChar();
          }
      
  }
  while (isValidInput == "NO");
}

//create a function to validate each character type input
     //that is: lowercase, uppercase, numeric, special characters
// similar conditional statement, if yes concat the value to the empty string"
// no exit
// When all prompts are answered, validate at least one character type should be selected 

function validateChar(){
  let isValidChar="YES";
  do{
        // confirm user to include lowercase in the password
        isValidChar="YES";    

            charLowercase = window.confirm("Do you want to include lowercase?");
            // conditional statement if answer is yes then add to the emptry string
            if (charLowercase ) {
              allAnswers = allAnswers.concat(lowerCharacters);
            }
            
            // conditional statement uppcase is yes, then concatinate the uppercase characters to an empty string 
           charUppercase = window.confirm("Do you want to include uppercase?");
            if (charUppercase ) {
              allAnswers = allAnswers.concat(upperCharacters);
            }
           charNum = window.confirm("Do you want to include numbers?");
            if (charNum ) {
              allAnswers = allAnswers.concat(numCharacters);
            }
           charSpecial = window.confirm("Do you want to include special characters?");
            if (charSpecial ) {
              allAnswers = allAnswers.concat(specialCharacters);
            }
            if ((!charLowercase) && (!charUppercase) && (!charNum) && (!charSpecial)) {
              alert("Please select at least one option: upperdase, lowecase, number or special character")
              isValidChar="NO";
            }
   }
while(isValidChar=="NO") 
  }
