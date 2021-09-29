//TESTING A NEW JS FOR QUIZ - entitled "quizzes.js"


//VARIABLES
//This section defines the varibles that will be called upon from the index.html
var header = document.querySelector(".header");
var landing = document.querySelector("#landing");
var scoreAdd = document.querySelector("#score-add");
var scoreAdding = document.querySelector("#score-adding");
var main = document.querySelector(".main");
var startButton = document.querySelector("#startButton");
var choices = document.querySelector("#choices");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var scoreAddYes = document.querySelector("#score-add-yes");
var scoreAddNo = document.querySelector("#score-add-no");
var scoreAdding = document.querySelector("#score-adding");
var playerName = document.querySelector("#player-name");
var timerEl = document.querySelector("#timer");
var answerStatus = document.getElementById("answerStatus")
var callQuestion = 0;
var questionText = document.querySelector("#questionText");

//ATTRIBUTES
//This section hides the follow variables from the landing page
choices.setAttribute("style", "display:none;");
scoreAdd.setAttribute("style", "display:none;");
scoreAdding.setAttribute("style", "display:none;");

var questionSelect = -1;
var clockStopped = true;
var timeLeft = 60;
var score;
var timer;
var scoreArr;
var userScore = 0;
var timeInterval;
var timeLeft;
//timer FUNCTION
//This section defines the timer parameters; start time, countdown speed, 
function countdown() {
    timeLeft = 60;

    // var downloadTimer = setInterval(function function1() {
    document.querySelector("#timer").innerHTML = timeLeft + "&nbsp" + "seconds remaining";
    //})
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

//QUIZ QUESTIONS
//This section introduces the questions, choices, and correct answer as objects within an array called 'question'
var question = [
    {
        q: "What city does the MLB team Athletics play for?",
        choice1: "Los Angeles",
        choice2: "Oakland",
        choice3: "Detroit",
        choice4: "Denver",
        correct: "choice2"
    },
    {
        q: "What city does the NFL Team Bengals play for?",
        choice1: "San Francisco",
        choice2: "Atlanta",
        choice3: "Cincinatti",
        choice4: "Baltimore",
        correct: "choice3"
    },
    {
        q: "Which NHL team has won the most championships?",
        choice1: "San Jose Sharks",
        choice2: "Toronto Maple Leafs",
        choice3: "Seattle Kraken",
        choice4: "Montreal Canadiens",
        correct: "choice4"
    },
    {
        q: "How many teams make up the NBA?",
        choice1: "36",
        choice2: "32",
        choice3: "28",
        choice4: "30",
        correct: "choice2"
    },
    {
        q: "Where is the MLB Hall of Fame located?",
        choice1: "Cooperstown",
        choice2: "Miami",
        choice3: "Detroit",
        choice4: "Denver",
        correct: "choice1"
    }
]


//startButton.addEventListener FUNCTION
//this function logs that the start button was click, changes the landing display to none, and introduces to choices display.
startButton.addEventListener("click", function () {
    console.log('start button clicked')
    countdown();

    landing.setAttribute("style", "display:none;");
    choices.setAttribute("style", "display:inline;");

    let quizLength = 60;
    // startTimer(quizLength);
    nextQuestion();

    //addButton(choice1, 1);
    //addButton(choice2, 2);
    //addButton(choice3, 3);
    //addButton(choice4, 4);
});



//nextQuestion FUNCTION
//This function is established to call the next question in the array

function nextQuestion() {
    console.log(question[callQuestion].q)
    questionText.textContent = question[callQuestion].q;
    choice1.textContent = question[callQuestion].choice1;
    choice2.textContent = question[callQuestion].choice2;
    choice3.textContent = question[callQuestion].choice3;
    choice4.textContent = question[callQuestion].choice4;
}

function response() {
    console.log(this.id);
    if (this.id === question[callQuestion].correct) {
        answerStatus.textContent = "Correct"
    } else {
        answerStatus.textContent = "Incorrect"
        timeLeft -= 10;
    };
    callQuestion += 1;
    // evaluate whether or not you're out of questions
    if (question[callQuestion]) {
        nextQuestion();
    } else {
        //alert("Quiz is done!");
        endGame();
    }
}

//endGame FUNCTION
//This function 
function endGame() {
    choices.setAttribute("style", "display:none;");
    scoreAdd.setAttribute("style", "display:block;");
    scoreAdding.setAttribute("style", "display:block;");
    questionText.setAttribute("style", "display:none;");
    clearInterval(timeInterval);
    console.log(timeLeft);
    document.querySelector("#score-adding").textContent = "Your final score is: " + timeLeft + " seconds";
}



scoreAddYes.addEventListener("click", function () {
    console.log('yes button clicked')

    if (playerName.value != "") {
        header.textContent = "High Scores: ";
        scoreAdd.setAttribute("style", "display:none;");
        scoreEl.setAttribute("style", "display:inline");

        if (localStorage.getItem("score-adding")!==null){
            scoreAdding = JSON.parse(localStorage.getItem("scoreAdding"));
            scoreAdding.push(playerName.value, score);
            localStorage.setItem("scoreAdding", JSON.stringify(scoreAdding));
        } else {
            scoreAdding = [playerName.value, score];
            localStorage.setItem("scoreArr", JSON.stringify(scoreArr));

        }
    }
});

scoreAddNo.addEventListener("click", function () {
    console.log('no button clicked');
    landing.setAttribute("style", "display:inline;");
    choices.setAttribute("style", "display:none;");
    scoreAdd.setAttribute("style", "display:none;");
    scoreAdding.setAttribute("style", "display:none;");

})

choice1.addEventListener("click", response)
choice2.addEventListener("click", response)
choice3.addEventListener("click", response)
choice4.addEventListener("click", response)


