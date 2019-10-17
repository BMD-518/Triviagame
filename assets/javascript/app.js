$(document).ready(function() {
// initial variable values
// correct answer counter
var answeredCorrect = 0;
// incorrect answer counter
var answeredIncorrect = 0;
// initial timer
var remainingTime = 25;
// current question variable   
var currentQuestion = 0;
// timer interval
var time;

// create array of objects containing questions, possible responses, and correct response.
var questionInfo = [{
    question: "What year was the very first model of the iPhone released?",
    answers: ["1989", "2007", "2001", "1998"],
    correctAnswer: "1"
}, {
    question: "Which planet is the hottest in the solar system?",
    answers: ["Mars", "Neptune", "Venus", "Uranus"],
    correctAnswer: "2"
}, {
    question: "Which country produces the most coffee in the world?",
    answers: ["Vietnam", "Columbia", "Ethiopia", "Brazil"],
    correctAnswer: "3"
}, {
    question: "What’s the primary ingredient in hummus?",
    answers: ["Lentils", "Garbonzo Beans", "Chickpeas", "Rocky Mountain Oysters"],
    correctAnswer: "2"
}, {
    question: "What name is used to refer to a group of frogs?",
    answers: ["An Army", "A Grabble", "A Schwarm", "A Phloog"],
    correctAnswer: "0"
}];


    // select first question to display to DOM
    function loadQuestion() {
        const question = questionInfo[currentQuestion].question;
        const response = questionInfo[currentQuestion].answers; 

        $('#time-remaining').html(`
            <h2>${remainingTime}</h2>   
        `);
        $('#current-question').html(`
            <h2 class="text-center">${question}</h2>
        `);
    };

loadQuestion(); 




    });
    
    

 