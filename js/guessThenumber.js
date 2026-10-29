//Guess the number 
var min = 1;
var max = 50;
var ans = Math.floor(Math.random() * (max-min+1))+min;
function guessTheNumber(){
var guess = document.getElementById("guess").value;
guess = parseInt(guess);
    if(guess < ans) console.log("higher");
    else if (guess>ans) console.log("lower");
    else console.log("Correct Guess");
}
