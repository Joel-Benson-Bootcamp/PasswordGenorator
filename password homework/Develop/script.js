
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



// Write password to the #password input
function writePassword() {
  // conditionals for alerts
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