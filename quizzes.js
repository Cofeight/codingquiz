//TESTING A NEW JS FOR QUIZ - entitled "quizzes.js"


//VARIABLES
//This section defines the varibles that will be called upon from the index.html
var header = document.querySelector(".header");
var landing = document.querySelector("#landing");
var scoreAdd = document.querySelector("#score-add");
var scoreAdding = document.querySelector("#score-adding");
var main = document.querySelector(".main");
var startButton = document.querySelector("#start-button");
var choices = document.querySelector("#choices");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var scoreAddYes = document.querySelector("#score-add-yes");
var scoreAddNo = document.querySelector("#score-add-no");
var scoreAdding = document.querySelector("#score-adding");
var playerName = document.querySelector("#player-name");
var timers = document.querySelector("#timers");

//ATTRIBUTES
//This section hides the follow variables from the landing page
choices.setAttribute("style", "display:none;");
scoreAdd.setAttribute("style", "display:none;");
scoreAdding.setAttribute("style", "display:none;");

var questionSelect = -1;
var clockStopped = true;
var secondsLeft;
var score;
var timer;
var scoreArr;


