//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password


var specialCharacters = ["!", "#", "$", "%", "&", "*"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function generatePassword(characterLength) {

  //YOUR CODE HERE

  //how log of a password between 8 and 128 characters?
  var characterLength = prompt(
    "How long of a password do you want between 8 and 128 characters?"
  );
  if (characterLength <= 7) {
    alert("Please enter a number between 8 and 128");
  }

  if (characterLength > 128) {
    alert("Please enter a number between 8 and 128");
  } else if (characterLength > 7 && characterLength <= 128) {
    console.log("password length: " + characterLength);

    //do you want special characters?
    var askSpecial = confirm("Do you want special characters?");

    //do you want numeric characters?
    var askNumeric = confirm("Do you want numeric characters?");

    //do you want lowercase characters?
    var askLowercase = confirm("Do you want lowercase characters?");
    
    //do you want uppercase characters?
    var askUppercase = confirm("Do you want uppercase characters?");

    //makes sure at least one character is selected to generate password
    if (askSpecial && askNumeric && askLowercase && askUppercase === null) {
      alert("Please try again and say yes to at least one character");
    }
  }
  //generate password
  password = "";

//   for (let index = 0; index <characterLength; index++) {
while( password.length < characterLength){
    if (askSpecial === true) {
      password +=
        specialCharacters[
          Math.floor(specialCharacters.length * Math.random())
        ];
    }
    if (askNumeric === true) {
      password +=
        numericCharacters[
          Math.floor(numericCharacters.length * Math.random())
        ];
    }
    if (askLowercase === true) {
      password +=
        lowercaseCharacters[
          Math.floor(lowercaseCharacters.length * Math.random())
        ];
    }
    if (askUppercase === true) {
      password +=
        uppercaseCharacters[
          Math.floor(uppercaseCharacters.length * Math.random())
        ];
    }

}
//display password
console.log("password: " + password);
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
