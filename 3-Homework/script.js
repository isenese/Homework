// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var length;

  function promptLength () {

    length = prompt("How long do you need your password to be, between 8 and 128 characters");

    if ( length <= 8  || length > 128 ) {
      alert("the number chosen is not a valid option")
    } else {
        return 
    }
  }
  promptLength()

  var upperCase;

  function promptUppercase () {

    upperCase = prompt("Do you want uppercase characters, please answer 'yes' or 'no' ");

    if ( upperCase === 'yes'  || uppperCase === 'YES' ) {
        return
    } else if ( upperCase === 'no' || uppperCase === 'NO' ) {
        return
    } else {
             alert('your option is not valid, check your spelling')
    }
    }
  
    promptUppercase()

    var lowerCase;

    function promptLowercase () {
    
        lowerCase = prompt("Do you want lowercase characters, please answer 'yes' or 'no' ");

    if ( lowerCase === 'yes'  || lowerCase === 'YES' ) {
        return
    } else if ( lowerCase === 'no' || lowerCase === 'NO' ) {
        return
    } else {
             alert('your option is not valid, check your spelling')
    }
    }
  
    promptLowercase()

    var symbol;

    function promptSymbol () {
    
        symbol = prompt("Do you want symbol characters, please answer 'yes' or 'no' ");

        if ( symbol === 'yes'  || symbol === 'YES' ) {
            return
        } else if ( symbol === 'no' || symbol === 'NO' ) {
            return
        } else {
                alert('your option is not valid, check your spelling')
        }
    }
  
    promptSymbol()
    

  console.log(length)
  console.log(upperCase)
  console.log(lowerCase)
  console.log(symbol)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
}



// Fuctions
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
   
}


