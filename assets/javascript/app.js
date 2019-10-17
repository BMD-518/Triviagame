$(document).ready(function() {
    // initial variable values
        // initial timer
    var remainingTime = 25;
        // correct answer counter
    var answeredCorrectly = 0;
        // incorrect answer counter
    var answeredIncorrectly = 0;
        // current question variable   
    var currentQuestion = 0;
        // timer interval
    var time;

        // create array of objects containing questions, possible responses, and correct response.
    var questionInfo = [
        {
            question: "What year was the very first model of the iPhone released?",
            responses: ["1989", "2007", "2001", "1998"],
            correctAnswer: "1"
        }, 
        
        {
            question: "Which planet is the hottest in the solar system?",
            responses: ["Mars", "Neptune", "Venus", "Uranus"],
            correctAnswer: "2"
        },
         
        {
            question: "Which country produces the most coffee in the world?",
            responses: ["Vietnam", "Columbia", "Ethiopia", "Brazil"],
            correctAnswer: "3"
        }, 
        
        {
            question: "What’s the primary ingredient in hummus?",
            responses: ["Lentils", "Garbonzo Beans", "Chickpeas", "Rocky Mountain Oysters"],
            correctAnswer: "2"
        }, 
        
        {
            question: "What name is used to refer to a group of frogs?",
            responses: ["An Army", "A Grabble", "A Schwarm", "A Phloog"],
            correctAnswer: "0"
        }
    ];


        // select first question to display to DOM
        function noPressure() {
            const question = questionInfo[currentQuestion].question;
            const responses = questionInfo[currentQuestion].responses; 

        // display initial time
        $('#time-remaining').html(`
            <h2>${remainingTime}</h2>   
        `);
        // display question
        $('#current-question').html(`
            <h2 class="text-center">${question}</h2>
        `);
        $('#current-answers').html(`
            <h2>${threeTruthsAndALie(responses)}</h2>
        `);
    }; 
    // loads responses
    function threeTruthsAndALie(responses) {
        
        let result = '';
        
        for (let r = 0; r < responses.length; r++) {
            result += `<p class="choice" data-answer="${responses[r]}">${responses[r]}</p>`;
        };

        return result;
    };

    noPressure(); 




});
    
    

 