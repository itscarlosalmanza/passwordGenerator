// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variable Declaration
var uppercase = [
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
  "Z",
];
var lowercase = [
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
  "z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "#",
  "$",
  "%",
  "(",
  ")",
  "*",
  ";",
  "@",
  "[",
  "]",
  "{",
  "}",
  "&",
  "?",
];
var passwordLength = " ";
var charTypeLower = null;
var charTypeUpper = null;
var charTypeNumeric = null;
var charTypeSpecial = null;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Prompts user, sets variable for the password criteria of lenghth
  alert("Select the criteria you would like for your password.");
  passwordLength = prompt(
    "What is the desired length of you password? Must be between 8-128 characters."
  );

  // Makes sure user is inputing a valid length for the password
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt(
      "Length is invalid, please enter a value between 8-128 characters."
    );
  }
  //Next 4 questions the user will confirm character criteria. YES = OK or NO = Cancel
  charTypeLower = confirm("should the password include lowercase characters?");

  charTypeUpper = confirm("SHOULD THE PASSWORD INCLUDE UPPERCASE CHARACTERS?");

  charTypeNumeric = confirm("W0uld y0u l1ke t0 1nclude numer1c characters?");

  charTypeSpecial = confirm("Would you like to include special characters?");

  // Makes sure user selects atleast one criteria
  while (
    charTypeLower === false &&
    charTypeUpper === false &&
    charTypeNumeric === false &&
    charTypeSpecial === false
  ) {
    alert("Please select at least one criteria for password.");
    charTypeLower = confirm(
      "should the password include lowercase characters?"
    );
    charTypeUpper = confirm(
      "SHOULD THE PASSWORD INCLUDE UPPERCASE CHARACTERS?"
    );
    charTypeNumeric = confirm("W0uld y0u l1ke t0 1nclude numer1c characters?");
    charTypeSpecial = confirm("Would you like to include special characters?");
  }
  //This will generate the password
  function generatePassword() {
    
    if (parseInt(passwordLength) > 8 && parseInt(passwordLength) < 128) {
      //Final password array
      var pwArray = new Array();
      //This array will used to select random values based on user input
      var critArray = new Array();
    }

    //This statement will run through password criteria selections if user gave a true answer to the alert, then randomize.

    if (charTypeLower === true) {
      pwArray.push(
        lowercase[Math.floor(Math.random() * lowercase.length)]
      );
      critArray = critArray.concat(lowercase);
    }

    if (charTypeUpper === true) {
      pwArray.push(
        uppercase[Math.floor(Math.random() * uppercase.length)]
      );
      critArray = critArray.concat(uppercase);
    }

    if (charTypeNumeric === true) {
      pwArray.push(numeric[Math.floor(Math.random() * numeric.length)]);
      critArray = critArray.concat(numeric);
    }

    if (charTypeSpecial === true) {
      pwArray.push(special[Math.floor(Math.random() * special.length)]);
      critArray = critArray.concat(special);
    }

    // Takes random value of criteria and adds it to pwArray until the desired length is reached
    for (var i = pwArray.length; i < parseInt(passwordLength); i++) {
      pwArray[i] =
        critArray[Math.floor(Math.random() * critArray.length)];
    }

    // returns value of pwArray with no spaces 
    return pwArray.join("");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
