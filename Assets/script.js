//on page load
    //user welcomed to quiz - done
    //user sees start quiz button - done

//questions:



//when user presses start:

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')

var shuffledQuestions, currentQuestionIndex
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
    //timer for 10 minutes begins 
    //start quiz button disappear

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
    });
    
    //startQuizEl.addEventListener("click", function() {
      //  var tenMinutes = 60 * 10,
        //display = document.querySelector('#my-timer');
        //startTimer(tenMinutes, display);
    //});
    
    //presented with next question

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach (answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.ClassList.remove('correct')
    element.ClassList.remove('wrong')
}

var myQuestions = [
    {   question: "1: What is an array?",
        answers: [
            {text: 'a: Specific actions that can be performed on objects', correct: false},
            {text: 'b: A block of code designed to perform a task', correct: false},
            {text: 'c: A way to store more than one value in a single variable', correct: true},
            {text: 'd: A container for named values called properties', correct: false}
        ]
    },
    {
        question: "2: What is a JavaScript function?",
        answers: [
            {text: 'a: A block of code designed to perform a task', correct: true},
            {text: 'b: A way to store more than one value in a single variable', correct: false},
            {text: 'c: Specific actions that can be performed on objects', correct: false},
            {text: 'd: A container for named values called properties', correct: false}
        ]
    },
    {
        question: "3: What does DOM stand for?",
        answers: [
            {text: 'a: Document Order Management', correct: false},
            {text: 'b: Dynamic Object Management', correct: false},
            {text: 'c: Distribution Output Management', corect: false},
            {text: 'd: Document Object Model', correct: true}
        ]
    },
    {
        question: "4: Which of the following is NOT a primitive?",
        answers: [
            {text: 'a: Boolean', correct: false},
            {text: 'b: String', correct: false},
            {text: 'c: Array', correct: true},
            {text: 'd: Number', correct: false}
        ]
    },
    {
        question: "5: True or False: '==' is considered a strict comparison operator.",
        answers: [
            {text: 'a: True', correct: false},
            {text: 'b: False', correct: true}
        ]
    },
    {
        question: "6: True or False: A for loop is used to run the same code over and over again with a different value.",
        answers: [
            {text: 'a: True', correct: true},
            {text: 'b: False', correct: false}
        ]
    },
    {
        question: "7: What does JSON stand for?" ,
        answers: [
            {text: 'a: JavaScript Object Notation', correct: true},
            {text: 'b: JavaScript Orientation Nodes', correct: false},
            {text: 'c: JS Operator Notation', correct: false},
            {text: 'd: JavaScript Output Nodes', correct: false}
        ]
    },
    {
        question: "8: Which of the following is an example of a built-in method?",
        answers: [
            {text: 'a: .toUpperCase()', correct: false},
            {text: 'b: .length()', correct: false},
            {text: 'c: .push()', correct: false},
            {text: 'd: All of the above', correct: true}
        ]
    },
    {
        question: "9: What does the sort() method do?",
        answers: [
            {text: 'a: Arranges an array in random order', correct: false},
            {text: 'b: Arranges an object alphabetically', correct: false},
            {text: 'c: Arranges an array alphabetically', correct: true},
            {text: 'd: Nothing, it is not a method', correct: false}  
        ]
    },
    {
        question: "10: What is event bubbling?",
        answers: [
            {text: 'a: When events burst and no longer work', correct: false},
            {text: 'b: When an event is propogated from child element to its parent elements', correct: true},
            {text: 'c: When an event is propogated from parent element to its children elements', correct: false},
            {text: 'd: When an event is activated many times', correct: false}
        ]
    },
]