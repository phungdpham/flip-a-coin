///variables needed for game
var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flipACoin(userGuess) {
    var computerGuess = Math.floor(Math.random() * 2);

    //Render image that represents computerGuess
    if (computerGuess === 0) {
        $('#coin-img').html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />")
    } else {
        $('#coin-img').html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />")
    }

    //Check if userGuess matches with computerGuess
    if (userGuess === computerGuess) {
        wins++;
        $("#result").html("<h2>Winer</h2>");
        $("#wins").html("<h3>" + wins + "</h3>");
    } else {
        losses++;
        $("#result").html("<h2>Loser</h2>");
        $("#losses").html("<h3>" + losses + "</h3>");
    }
}

    //User decides to guess to start the game
    $("#heads").on("click", function() {
        headsCount++;
        $("#heads-count").text(headsCount);
        $("#userGuess").html("<b>Heads</b>");
        flipACoin(0);
    });

    $("#tails").on("click", function() {
        tailsCount++;
        $("#tails-count").text(tailsCount);
        $("#userGuess").html("<b>Tails</b>");
        flipACoin(1);
    })
