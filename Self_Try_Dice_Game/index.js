// Generating random values between 1 and 6 for two players 
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

// Creating relative path's location 
var diceImage1Source = "./images/" + "dice" + randomNumber1 + ".png";
var diceImage2Source = "./images/" + "dice" + randomNumber2 + ".png";

// setting attributes for person 1 and 2
document.querySelector(".dice .img1").setAttribute("src", diceImage1Source);
document.querySelector(".dice .img2").setAttribute("src", diceImage2Source);

// Setting titles
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}
else{
    document.querySelector("h1").textContent = "Player 2 wins! 🚩 ";
}