//Pseudocode is commented out

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //list of letters to choose from

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in the user guess and making sure it is a lower case value
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)] //computer selects random letter from the array computerChoices
    guessesSoFar.push(" " + userGuess); //this will push the user guess into the empty array guessesSoFar and " " adds a space
    console.log(computerGuess); //Showing the computer guess in the console to watch as the game is played

    if (userGuess === computerGuess) {  //if the user guess is the same as the computer guess do the following:
        wins++;  //add a win 
        alert("WINNER WINNER CHICKEN DINNER!");  //alert the win
        guessesLeft = 9; //reset the guesses back to 9 so that the user can play again
        guessesSoFar.length = null; //remove everything from the guessesSoFar array, so that the guesses from the previous round don't show anymore
    }

    else if (userGuess !== computerGuess) {  //or if this is true do something
        guessesLeft--; //decrease the guesses left
    }
    
    else if (guessesLeft === 0){  //or if this is true something
        losses++;  //add a loss
        alert("You lost! Try again!"); //alert the loss
        guessesLeft = 9;  //reset the guesses back to 9 so that the user can play again
        guessesSoFar.length = null; //remove everything from the guessesSoFar array, so that the guesses from the previous round don't show anymore
    }

    // Need to rewrite the html on the page so var HTML will hold my new html elements and concatenate with the variables holding the wins, losses, etc
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I am thinking of!</p>" +
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " + losses + "</p>" +
    "<p>Guesses Remaining: " + guessesLeft + "</p>" +
    "<p>Letters Guessed: " + guessesSoFar + "</p>";

    // Placing the html into the div ID game from the index.html file
    document.querySelector("#game").innerHTML = html;  
};