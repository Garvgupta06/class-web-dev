const choices = ["rock","paper","scissor"]

function rps(){
    var choice = choices[Math.floor(Math.random()*choices.length)];
    var user = document.getElementById("user").value;

    if(choice === user) console.log("tie");
    else if(choice === "rock" && user==="paper") console.log("computer choice: "+choice+"\nplayer wins");
    else if(choice === "rock" && user ==="scissor") console.log("computer choice: "+choice+"\nComputer wins");
    else if(choice ==="paper" && user === "rock") console.log("computer choice: "+choice+"\nComputer Wins");
    else if(choice === "paper" && user ==="scissor") console.log("computer choice: "+choice+"\nplayer wins");
    else if(choice ==="scissor" && user === "rock") console.log("computer choice: "+choice+"\nplayer Wins");
    else if(choice === "scissor" && user ==="paper") console.log("computer choice: "+choice+"\nComputer wins");
}