
var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var started=false;

$(document).keypress(function(){
  if(!started){
  $("h1").text("Level "+level);
  nextSequence();
started=true;
}
});



$(".btn").click(function(){
var userChosenColour=$(this).attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
  console.log("success");
if(userClickedPattern.length==gamePattern.length){
  setTimeout(function () {
    nextSequence();
  }, 500);
}
}
else{
  console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
            $("body").removeClass("game-over");
            //....and whatever else you need to do
    }, 300);
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
}
}



function nextSequence() {
  userClickedPattern=[];
  level++;
    $("h1").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);

   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

// animatePress(randomChosenColour);
}


function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}


function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
            $("#"+currentColour).removeClass("pressed");
            //....and whatever else you need to do
    }, 300);
}
