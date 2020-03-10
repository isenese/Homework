// Assignment Code
var generateBtn = document.querySelector("#generate");

// Fuctions for generate ramdom values

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


// Write password to the #password input
function writePassword() {

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

    if ( upperCase === 'yes'  || upperCase === 'YES' || upperCase === 'no' || upperCase === 'NO' ) {
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

    var symbols;

    function promptSymbolCase () {

        symbols = prompt("Do you want symbol characters, please answer 'yes' or 'no' ");

        if ( symbols === 'yes'  || symbols === 'YES' ) {
            return
        } else if ( symbols === 'no' || symbols === 'NO' ) {
            return
        } else {
                alert('your option is not valid, check your spelling')
        }
    }

    promptSymbolCase()

    var NumberCase;

    function promptNumberCase () {

        NumberCase = prompt("Do you want number characters, please answer 'yes' or 'no' ");

        if ( NumberCase === 'yes'  || NumberCase === 'YES' ) {
            return
        } else if ( NumberCase === 'no' || NumberCase === 'NO' ) {
            return
        } else {
                alert('your option is not valid, check your spelling')
        }
    }

    promptNumberCase()


// Password Generation
function generatePassword (){ 
    var myFunctions = []

    if (lowerCase === "yes" || lowerCase === "YES"  ){
        myFunctions.push(getRandomLower)
    }
    if (NumberCase === "yes" || NumberCase === "YES"  ){
        myFunctions.push(getRandomNumber)
    }
    if (upperCase === "yes" || upperCase === "YES"  ){
        myFunctions.push(getRandomUpper)
    }
    if (symbols === "yes" || symbols === "YES"  ){
        myFunctions.push(getRandomSymbol)
    }


function randomNumber () {
    return Math.floor(Math.random()* Math.floor (myFunctions.length));
}

    var result = [] 
    
    for (i=0; i < length-1; i++){
        result.push(myFunctions[randomNumber()]())
    }
return result.join('')
}
var password = generatePassword();

var passwordText = document.querySelector("#password");

   passwordText.value = password;
console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

