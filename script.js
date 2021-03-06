
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordPrompt = prompt("Choose a password length between 8-128 characters");
var passwordLength = parseInt(passwordPrompt, 10);

console.log(passwordLength, "password length"); 
console.log(passwordPrompt, "password prompt"); 

// Prompt asking for password length
function confirmLength() {
  if (passwordLength <= 128 && passwordLength >= 8) {
    alert("Thank you"); 
   } else {
     alert("Error, please choose a password length between 8-128 characters");
   } 
}

confirmLength (); 


// password gen function
function generatePassword(charset) { 
  charset = charset.toString(); 
  console.log(charset, "charset"); 
       var password = "";
      for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * charset.length);  
        password = password + charset[randomNumber]; 
        console.log(password); 
        console.log(randomNumber); 
    } 
    return password; 
}
// character variables are down here so they will load after an error message in the event of user inputing a value not between 8-128
var lowercase = prompt("Would you like lowercase letters? (Y/N)");  
    if (lowercase == "Y") {
      lowercase = true; 
    } else {
      lowercase = false; 
    }

var uppercase = prompt("Would you like uppercase letters? (Y/N)");  
    if (uppercase == "Y") {
      uppercase = true; 
    } else {
      uppercase = false; 
    }

var special = prompt("Would you like special characters? (Y/N)"); 
    if (special == "Y") {
      special = true; 
    } else {
      special = false; 
    }
    
var numeric = prompt("Would you like numbers? (Y/N)");
    if (numeric == "Y") {
      numeric = true; 
    } else {
      numeric = false; 
    }

console.log(lowercase, "uppercase");
console.log(uppercase, "uppercase");
console.log(special, "special");
console.log(numeric, "numeric");

// Write password to the #password input
function writePassword() {
  // alerts for password criteria/adding them to the array
  var charset = []; 
  if(lowercase == true) {
    var lowercaseChar="abcdefghijklmnopqrstuvwxyz"; 
    charset.push(lowercaseChar);  
  } 
  if (uppercase == true) {
    var uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    charset.push(uppercaseChar); 
  } 
  if (numeric == true) { 
    var numericChar="0123456789"; 
    charset.push(numericChar); 
  } 
  if (special == true) { 
    var specialChar="!@#$%^&*?"; 
    charset.push(specialChar); 
  }

  var password = generatePassword(charset); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);