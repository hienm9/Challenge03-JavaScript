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


//  Function for getting a random element from an array
// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.length);
//   var randElement = arr[randIndex];

//   return randElement;
// }



// prompt for lenght of the password
let passwordLenght = window.prompt("Please enter a lenght for the password")

// prompt for character types to include lowercase
let charLowercase = window.prompt("Do you want to include lowercase?")

//prompt for character types to include upppercase

//prompt for character types numeric

//prompt for character types special characters

// When all prompts are answered, validate at least one character type should be selected 

// Then the password is generated, use the getRandom function to get arandom element from an array as an example below:
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
  }

// The password is displayed in the password box
   document.getElementById("password").value = password;