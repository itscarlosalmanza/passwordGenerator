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

function userPrompts() {
  var passwordLength = parseInt(
    prompt(
      "What is the desired length of you password? Must be between 8-128 characters."
    )
  );
  // console.log(passwordLength);
  if (isNaN(passwordLength) === true) {
    alert("PW length must be a number");
    return;
  }

  if (passwordLength < 8) {
    alert("PW length mut be at least 8 characters");
    return;
  }

  if (passwordLength > 128) {
    alert("PW must be less than 128 chracters");
    return;
  }

  
    alert("Please select at least one criteria for password.");

    var charTypeLower = confirm(
      "should the password include lowercase characters?"
    );
    // console.log(charTypeLower);

    var charTypeUpper = confirm(
      "SHOULD THE PASSWORD INCLUDE UPPERCASE CHARACTERS?"
    );
    // console.log(charTypeUpper);

    var charTypeNumeric = confirm(
      "W0uld y0u l1ke t0 1nclude numer1c characters?"
    );
    // console.log(charTypeNumeric);

    var charTypeSpecial = confirm(
      "Would you like to include special characters?"
    );
    // console.log(charTypeSpecial);
    if (
      charTypeLower === false &&
      charTypeUpper === false &&
      charTypeNumeric === false &&
      charTypeSpecial === false
    ) {
    alert("Must choose at least one type of character");
    return;
  }

  
  var critArray = {
    passwordLength: passwordLength,
    charTypeLower: charTypeLower,
    charTypeUpper: charTypeUpper,
    charTypeNumeric: charTypeNumeric,
    charTypeSpecial: charTypeSpecial
  };
  console.log(critArray);
  return critArray;
}
  

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}
function generatePassword() {
  var options = userPrompts();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.charTypeLower) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }
  if (options.charTypeUpper) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }
  if (options.charTypeNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
    guaranteedCharacters.push(getRandom(numeric));
  }
  if (options.charTypeSpecial) {
    possibleCharacters = possibleCharacters.concat(special);
    guaranteedCharacters.push(getRandom(special));
  }
  for (var i = 0; i < options.passwordLength; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join("");
}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
