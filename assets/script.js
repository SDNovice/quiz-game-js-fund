var questionPrompt = document.getElementById('question');
var startPrompt = document.querySelector('#starter');
var start = document.getElementById("start-button");
var choicesEl = document.getElementById("choices");
var quiz = document.getElementById("quiz");
var timerContent = document.getElementById('timer');
var work = document.querySelectorAll("option");
var questionIndex = 0;
var timeLeft = 75;


var questions = [
    {question: "Which one is not a primative type?",
     answer: "index",
     choices: ["boolean", "number", "index", "string"]
    },
    {question: "Which one is not a comparison operator",
     answer: "=",
     choices: ["==", "!==", "===", "="]
    },
    {question: 
        "What is the index number of 'apple' in this array? var fruit = ['pear','apple','kiwi','plum']",
     answer: "1",
     choices: ["2", "1", "3", "n+1"]
    },
    {question: "Which method is an array method?",
     answer: ".copyWitin",
     choices: [".match", ".replace", ".startsWith", ".copyWithin"]
    },
    {question: "Which method is a string method?",
     answer: ".raw",
     choices: [".raw", ".filter", ".entries", ".sort"] 
    }
]

// We are going to use this function to render this attribute
function getQuestion(){
    var currentQuestion = questions[questionIndex]
    questionPrompt.textContent = currentQuestion.question;
    choicesEl.innerHTML = ''

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var option = currentQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        
        choiceBtn.setAttribute('value', option);
        choiceBtn.setAttribute('class', 'option');
        choiceBtn.textContent = i + 1 + ". " + option;
        choicesEl.appendChild(choiceBtn);
    }
    return;
}

function startQuiz(){
    startPrompt.setAttribute('class', 'begin');
    quiz.removeAttribute('class');
    var timeInterval = setInterval(countDown, 1000);
    timerContent.textContent = 'Time Remaining: ' + timeLeft;
    questionIndex + 1;
    getQuestion();
}

start.addEventListener('click', startQuiz);

function countDown(){
    timeLeft--;
    timerContent.textContent = 'Time Remaining: ' + timeLeft;
    if (timeLeft <= 0){
        getHighScore();
    }
}

choicesEl.addEventListener('click', function(){console.log('help')});