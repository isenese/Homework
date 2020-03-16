// LocalStorage: localStorage.setItem(key Or name , content or value)
//SET
//GET

const newLocal = "submit";

// const name = "Alvaro";
// localStorage.setItem("nombreUsuario", name);  // name inventar , value almacenado en la variable


// const nameLocalStorage =localStorage.getItem("nombreUsuario"); // indicar la Key
// console.log(nameLocalStorage);



//localStorage.setItem("opD", optionD3.text()); example


//Warp fuction Jquery



$(document).ready(function () {         
   
   var score =0;      

//Star Button
const startB = $("#starBtm").on("click",function () { 
   $("#question1").show();
   $("question2").hide();
   $("question3").hide();
 
  


});


// Option Buttoms Question1

const optionA1 = $("#A1").on("click",function () {
      
      $("#answer1").append("Correct");
      $("#question1").hide();
      $("#question2").show();
      score +=1;
      $("#score").append();  
      $("#score").hide(score);
      
})




const optionB1 =$("#B1").on("click",function () {
    $("#answer1").append("Incorrect");
    $("#question1").hide();
    $("#question2").show();
    $("#score").append();
    $("#score").hide();

})

const optionC1 = $("#C1").on("click",function () {
   $("#answer1").append("Incorrect");
   $("#question1").hide();
   $("#question2").show();
   $("#score").append();
    $("#score").hide(); 
})

const optionD1 = $("#D1").on("click",function () {
    $("#answer1").append("Incorrect");
    $("#question1").hide();
    $("#question2").show();
    $("#score").append();
    $("#score").hide(); 
    
})


// Option Buttoms Question2
const optionA2 = $("#A2").on("click",function () { 
    $("#answer2").append("Incorrect"); 
    $("#question2").hide();
    $("#question3").show();
    $("#score").append();
    $("#score").hide(); 
   
 })
 
 const optionB2 =$("#B2").on("click",function () {  
    $("#answer2").append("Incorrect"); 
    $("#question2").hide();
    $("#question3").show();
    $("#score").append();
    $("#score").hide();  
    
 
 })
 
 
 const optionC2 = $("#C2").on("click",function () {
    $("#answer2").append("Correct");
    $("#question2").hide();
    $("#question3").show();
      score +=1;
    $("#score").append();  
    $("#score").hide(score);
 })
 
 const optionD2 = $("#D2").on("click",function () {
   $("#answer2").append("Incorrect");
   $("#question2").hide();
   $("#question3").show();
   $("#score").append();
   $("#score").hide(score);   
  
 })
 


// Option Buttoms Question3
const optionA3 = $("#A3").on("click",function () { 
   $("#answer3").append("Incorrect"); 
   $("#question3").hide();
   $("#score").append(score);
    $("#score").show(score); 
 

 })
 
 const optionB3 =$("#B3").on("click",function () {  
    $("#answer3").append("Correct"); 
    $("#question3").hide();
    score +=1; 
    $("#score").append(score);  
    $("#score").show(score);
 
 
 })
 
 
 const optionC3 = $("#C3").on("click",function () {
    $("#answer3").append("Incorrect");
    $("#question3").hide();
    $("#score").append(score);
    $("#score").show(score);

 
 })
 
 const optionD3 = $("#D3").on("click",function () {
    $("#answer3").append("Incorrect");
    $("#question3").hide();
    $("#score").append(score);
    $("#score").show(score);


 })


//Submit button

 $("#submit").on("click", function(){
   localStorage.setItem("scoreValue", "score"); 
   localStorage.setItem("emailValue", "email")
   localStorage.setItem("submitBtm", "submit"); 


 })



});



