//on page load
    //user welcomed to quiz - done
    //user sees start quiz button - done

//questions:

var myQuestions = [
    {
        question: "1: What is an array?",
        answers: {
            a: 'Specific actions that can be performed on objects',
            b: 'A block of code designed to perform a task',
            c: 'A way to store more than one value in a single variable',
            d: 'A container for named values called properties'
        },
        correctAnswer: 'c'
    },
    {
        question: "2: What is a JavaScript function?",
        answers: {
            a: 'A block of code designed to perform a task',
            b: 'A way to store more than one value in a single variable',
            c: 'Specific actions that can be performed on objects',
            d: 'A container for named values called properties'
        },
        correctAnswer: 'a'
    },
    {
        question: "3: What does DOM stand for?",
        answers: {
            a: 'Document Order Management',
            b: 'Dynamic Object Management',
            c: 'Distribution Output Management',
            d: 'Document Object Model'
        },
        correctAnswer: 'd'
    },
    {
        question: "4: Which of the following is NOT a primitive?",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Array',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        question: "5: True or False: '==' is considered a strict comparison operator.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'b'
    },
    {
        question: "6: True or False: A for loop is used to run the same code over and over again with a different value.",
        answers: {
            a: 'True',
            b: 'False'
        },
        correctAnswer: 'a'
    },
    {
        question: "7: What does JSON stand for?" ,
        answers: {
            a: 'JavaScript Object Notation',
            b: 'JavaScript Orientation Nodes',
            c: 'JS Operator Notation',
            d: 'JavaScript Output Nodes'
        },
        correctAnswer: 'a'
    },
    {
        question: "8: Which of the following is an example of a built-in method?",
        answers: {
            a: '.toUpperCase()',
            b: '.length()',
            c: '.push()',
            d: 'All of the above'
        },
        correctAnswer: 'd'
    },
    {
        question: "9: What does the sort() method do?",
        answers: {
            a: 'Arranges an array in random order',
            b: 'Arranges an object alphabetically',
            c: 'Arranges an array alphabetically',
            d: 'Nothing, it is not a method'  
        },
        correctAnswer: 'c'
    },
    {
        question: "10: What is event bubbling?",
        answers: {
            a: 'When events burst and no longer work',
            b: 'When an event is propogated from child element to its parent elements',
            c: 'When an event is propogated from parent element to its children elements',
            d: 'When an event is activated many times'
        },
        correctAnswer: 'b'
    },
]

//when user presses start: 
    //presented with question
    //timer for 10 minutes begins

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        //for each question...

        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );  
            }
        }

        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer){
        // gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
    
    // show the questions
    showQuestions(questions, quizContainer);
    
    // when user clicks submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);



var timeEl = document.querySelector(".time");

var secondsLeft = 600

function setTime(){
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timeEl.textcontent = secondsLeft + " remaining";
    }, 1000);
}

//if question answer === yes
    //correct answer notitifcation
    //user presented with another question
    //correct answer logged as 1

//if question answer === no
    //wrong answer notitication
    //60 seconds is subtracted from the clock
    //user presented with another question
    //wrong answer logged as 0

//game is over when: 
    //all questions answered
    //OR timer reaches 0 seconds

//when game is over: 
    //user's score is calculated
    //user's score is displayed
    //user enters initials
    //user saves score
    //score is saved to local storage
    //score is logged to high scores ranking
    