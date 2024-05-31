var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function (e) { 
    if(!started){
        nextSequence();    
        started = true;
    }
});

function nextSequence(){

    userCLickedPattern = [];

    level ++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function (e) { 
    var userChosenColour = e.target.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userCLickedPattern.push(userChosenColour);
    checkAnswer(userCLickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userCLickedPattern[currentLevel]){
        if(userCLickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

        
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}