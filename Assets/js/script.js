
// Welcome message
    //welcome to the quiz
    //Start button

const welcomeEl = document.querySelector('#welcomeCard')
const startButtonEl = document.querySelector('#start-btn')

//Quiz question card
    //timer
    //question
    //answers
    //next button

const timerEl = document.querySelector('#my-timer')
var interval;
var timeGiven = 120;
var secondsElapsed = 0;
const quizCardEl = document.querySelector('#question-container')
const questionEl = document.querySelector('#question')
var currentQuestion = 0;
var score = 0;
const answersEl = document.querySelector('#answer-buttons')
const nextButtonEl = document.querySelector('#next-btn')
var msgDiv = document.querySelector("#msg")

//Quiz complete - view your score
    //View your score
    //Enter your initials
    //submit button

const inputScoreEl = document.querySelector('#inputScore')
const initialsEl = document.querySelector('#initials')
const submitInitialsBtnEl = document.querySelector('#submitInitials')
const userScoreEl = document.querySelector('#user-score')

//View all of the high scores

const highScoresEl = document.querySelector('#highScores')
const scoresEl = document.querySelector('#view-scores')
const clearScoresBtnEl = document.querySelector('#clearScores')
var highScores = []

//define the questions to be rendered

var questions = [
    {
        title: "What is an array?",
        choices: ["Specific actions that can be performed on objects","A block of code designed to perform a task","A way to store more than one value in a single variable","A container for named values called properties"],
        answer: "A way to store more than one value in a single variable"
    },
    {
        title: "What is a JavaScript function?",
        choices: ["A block of code designed to perform a task","A way to store more than one value in a single variable","Specific actions that can be performed on objects","A container for named values called properties"],
        answer: "A block of code designed to perform a task"
    },
    {
        title: "What does DOM stand for?",
        choices: ["Document Order Management","Dynamic Object Management","Distribution Output Management","Document Object Model"],
        answer: "Document Object Model"
    },
    {
        title: "Which of the following is NOT a primitive?",
        choices: ["Boolean","String","Array","Number"],
        answer: "Array"
    },
    {
        title: "True or False: '==' is considered a strict comparison operator.",
        choices: ["True","False"],
        answer: "False"
    },
    {
        title: "True or False: A for loop is used to run the same code over and over again with a different value.",
        choices: ["True","False"],
        answer: "True"
    },
    {
        title: "What does JSON stand for?",
        choices: ["JavaScript Object Notation","JavaScript Orientation Nodes","JS Operator Notation","JavaScript Output Nodes"],
        answer: "JavaScript Object Notation"
    },
    {
        title: "Which of the following is an example of a built-in method?",
        choices: [".toUpperCase()",".length()",".push()","All of the above"],
        answer: "All of the above"
    },
    {
        title: "What does the sort() method do?",
        choices: ["Arranges an array in random order","Arranges an object alphabetically","Arranges an array alphabetically","Nothing, it is not a method"],
        answer: "Arranges an array alphabetically"
    },
    {
        title: "What is event bubbling?",
        choices: ["When events burst and no longer work","When an event is propogated from child element to its parent elements","When an event is propogated from parent element to its children elements","When an event is activated many times"],
        answer: "When an event is propogated from child element to its parent elements"
    },
]

//hides element
function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";
}

//run the timer

function runTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function() {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQuestion = questions.length;
            nextQuestion();
        }
    }, 1000);
}

//stop the timer

function stopTimer() {
    clearInterval(interval);
}

function renderQuestion() {
    questionEl.textContent = questions[currentQuestion].title;
    for (i = 0; i < answersEl.children.length; i++) {
        answersEl.children[i].textContent = questions[currentQuestion].choices[i];
    }
}

//start the quiz
startButtonEl.addEventListener('click', function () {
    hide(welcomeEl);
    hide(startButtonEl);
    show(timerEl);
    runTimer();
    renderQuestion();
    show(quizCardEl);
})

//user selects an answer -- what happens next
    //if answer is correct, add points, display correct message, and next question
    //if answer is wrong, subtract time, display wrong message, and next question

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function checkAnswer(answer) {
    if (questions[currentQuestion].answer == questions[currentQuestion].choices[answer.id]) {
        score += 1;
        displayMessage("success", "Great job!");
        setTimeout(function () {
            msgDiv.textContent = '';
        }, 1000);
    } else {
        secondsElapsed += 10;
        displayMessage("error", "Oops, that's not quite right");
        setTimeout(function () {
            msgDiv.textContent = '';
        }, 1000);
    }
}

answersEl.addEventListener('click', function(e) {
    if (e.target.matches('button')) {
        checkAnswer(e.target);
        nextQuestion();
    }
});

function nextQuestion () {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
        score += (timeGiven - secondsElapsed);
        userScoreEl.textContent = score;
        hide(quizCardEl);
        show(inputScoreEl);
        timerEl.textContent = 0;
    }
}

//quiz is completed
    //view score
    //submit initials
    //view highscores

submitInitialsBtnEl.addEventListener('click', function() {
  if (submitInitialsBtnEl !== null) {
    renderHighScores()
    hide(inputScoreEl)
  } else {
    alert ("Please enter your initials")
  }
    });

function renderHighScores() {
    show(highScoresEl);
    show(clearScoresBtnEl);
    }


//Clears saved scores from local storage
clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});

function reset() {
    score = 0;
    currentQ = 0;
    secondsElapsed = 0;
    timerEl.textContent = 0;
}