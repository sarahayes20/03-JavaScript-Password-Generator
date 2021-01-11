// lowercase characters that could be included in password
var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';

// uppercase characters that could be included in password
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// numeric characters that could be included in password
var numericChar = '123456789';

// special characters that could be included in password
var specialChar = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";

var passwordLength

// prompt user for password criteria
function determinePassword() {
var passwordLength = parseInt(
  prompt('How many characters would you like your password to contain? Choose a length of at least 8 characters and no more than 128 characters.')
  );
  
  // number check on password length
  if (isNaN(passwordLength) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // password length less than 8
  if (passwordLength < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // password length greater than 128
  if (passwordLength > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  // confirm if the user wants special charaters in their password
  var confirmSpecialChar = confirm(
    'Click OK to include special characters.'
  );

  // confirm if the user wants number charaters in their password
  var confirmNumericChar = confirm(
    'Click OK to include numeric characters.'
  );

  // confirm if the user wants lower case charaters in their password
  var confirmLowercaseChar = confirm(
    'Click OK to includ lowercase characters.'
  );

  // confirm if the user wants upper case charaters in their password
  var confirmUppercaseChar = confirm(
    'Click OK to include uppercase characters.'
  );
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);