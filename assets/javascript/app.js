$(document).ready(function() {
    // create array of objects containing questions, possible responses, and correct response.
var questionsAnswers = [{
    question: "What year was the very first model of the iPhone released?",
    answer: ["1989", "2007", "2001", "1998"],
    correctAnswer: "1"
}, {
    question: "Which planet is the hottest in the solar system?",
    answer: ["Mars", "Neptune", "Venus", "Uranus"],
    correctAnswer: "2"
}, {
    question: "Which country produces the most coffee in the world?",
    answer: ["Vietnam", "Columbia", "Ethiopia", "Brazil"],
    correctAnswer: "3"
}, {
    question: "What’s the primary ingredient in hummus?",
    answer: ["Lentils", "Garbonzo Beans", "Chickpeas", "Rocky Mountain Oysters"],
    correctAnswer: "2"
}, {
    question: "What name is used to refer to a group of frogs?",
    answer: ["An Army", "A Grabble", "A Schwarm", "A Phloog"],
    correctAnswer: "0"
}];


    // Start button, begins game and timer
    $("#startReset").on("click", function(){
    for (var i = 0; i < questionsAnswers.length; i++) {
        var displayed = questionsAnswers[i];
        setTimeout (function() {
        }, 1000 * 120);
    };
    
    console.log();
    
    // create start button function to begin timer and display first question
        console.log("clicked button");
        $("#currentQuestion").text(displayed.question);

    });
    
    

});






// set timer for game triggered by start quiz button
    // call on html id for timer display
    // if remaining time is < 10 seconds time left text turns red

// call on html id for current question displayed
// call on html id for responses available
    // set a limit for only one answer selection

// 