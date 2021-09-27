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
var secondsLeft = 60;
var score;
var timer;
var scoreArr;


var question = [
{
    q: "What city does the MLB team Athletics play for?",
    choice1: "Los Angeles",
    choice2: "Oakland",
    choice3: "Detroit", 
    choice4: "Denver",
    correct: 2
},
{
    q: "What city does the NFL Team 'Bengals' play for?",
    choice1: "San Francisco",
    choice2: "Atlanta",
    choice3: "Cincinatti",
    choice4: "Baltimore",
    correct: 3
},
{
    q: "Which NHL team has won the most championships?",
    choice1: "San Jose Sharks",
    choice2: "Toronto Maple Leafs",
    choice3: "Seattle Kraken",
    choice4: "Montreal Canadiens",
    correct: 4
},
{
    q:  "How many teams make up the NBA?",
    choice1: "36",
    choice2: "32",
    choice3: "28",
    choice4: "30",
    correct: 2
},
{
    q: "Where is the MLB Hall of Fame located?",
    choice1: "Cooperstown",
    choice2: "Miami",
    choice3: "Detroit",
    choice4: "Denver",
    correct: 1
}
]

startButton.addEventListener("click", function() {

    let quizLength = 60;
    startTimer(quizLength);

    landing.setAttribute("style", "display:none;");
    choices.setAttribute("style", "display:inline;");

    nextQuestion();

    addButton(choice1, 1);
    addButton(choice2, 2);
    addButton(choice3, 3);
    addButton(choice4, 4);
});

scoreAddYes.addEventListener("click", function() {
    if(playerName.value != null) {
        header.textContent = "High Scores: ";
        scoreAdd.setAttribute("style", "display:none;");
    }
});