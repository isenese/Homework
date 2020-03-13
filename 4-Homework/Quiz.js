// LocalStorage: localStorage.setItem(key Or name , content)
//SET
//GET


// const name = "Alvaro";
// localStorage.setItem("nombreUsuario", name);  // name inventar , value almacenado en la variable


// const nameLocalStorage =localStorage.getItem("nombreUsuario"); // indicar la Key
// console.log(nameLocalStorage);








//Warp fuction Jquery

$(document).ready(function () {         

$("#idQ").addClass('text-danger');


const startB = $("#starBtm").click(function () { 
    alert("bottom clicked.");
localStorage.setItem("startBottom", startB.text());

});






});

