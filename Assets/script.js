//Created multiple array for the options that can make up password
var number = ["0","1","2","3","4","5","6","7","8","9"];
var lower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special=["!","@","#","$","%","^","&","*","(",")"];
var upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//set variable for at least 8 characters, created empty array to store users choices
var length =8;
var randomPassword =[];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var UserChoice =  Prompts(); // added prompt functions to be able to check if variable is true or false later
  var passwordText = document.querySelector("#password");
//
  if (UserChoice) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
  
}

//created for loop to go through as many characters "length" user wants password to be. Using function based on prompts selected to create new password. 
function generatePassword (){
  var password = ""; 
  for (var i = 0; i < length; i++){
    var randomLetter = Math.floor(Math.random() * randomPassword.length);
    password = password + randomPassword[randomLetter];
  }
  return password;
}

//created function for window prompts that user will use to select what options they want for their password. Selecting OK or Cancel when prompted. 
function Prompts(){
  randomPassword = [];

  length =(prompt("How many characters would you like your password to contain?"));
  
  if (isNaN(length) || length <8 || length > 128) {
    return false;
  }
  if (confirm("Click Ok to confirm including special characters")) {
    randomPassword = randomPassword.concat(special);
  }
  
  if (confirm("Click OK to confirm including numeric characters")){
    randomPassword = randomPassword.concat(number);
  }
  if (confirm("Click OK to confirm including lowercase characters")){
    randomPassword = randomPassword.concat(lower);
  }
  if (confirm("Click Ok to confirm including uppercase characters")){
    randomPassword = randomPassword.concat(upper);
  }
  return true;
}


///Used code examples from lesson 3 for Math Random and Math Floor
//MDN for confirm option vs. window.prompt and use of .concat and NaN






















