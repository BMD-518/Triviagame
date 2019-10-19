// establish initial variables and values

// initial timer
var timeRemaining = 10;
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
    correctAnswer: "2007"
}, 

{
    question: "Which planet is the hottest in the solar system?",
    responses: ["Mars", "Neptune", "Venus", "Uranus"],
    correctAnswer: "Venus"
},

{
    question: "Which country produces the most coffee in the world?",
    responses: ["Vietnam", "Columbia", "Ethiopia", "Brazil"],
    correctAnswer: "Brazil"
}, 

{
    question: "What’s the primary ingredient in hummus?",
    responses: ["Lentils", "Garbonzo Beans", "Chickpeas", "Rocky Mountain Oysters"],
    correctAnswer: "Chickpeas"
}, 

{
    question: "What name is used to refer to a group of frogs?",
    responses: ["An Army", "A Grabble", "A Schwarm", "A Phloog"],
    correctAnswer: "An Army"
}
];

// display game stats to DOM
function showMe() {
const theDamage = `
    <h2>You have answered ${answeredCorrectly} correctly</h2>
    <h2>You have answered ${answeredIncorrectly} incorrectly</h2>
    <h2>${currentQuestion + 1} Questions</h2>
    <button id="reset-button" class="btn-lg btn-danger btn-block my-button">RESET GAME</button>
`;
    $('#current-answers').html(theDamage);
};

// select first question to display to DOM
function noPressure() {

    timeRemaining = 10;
    
    // set decrement to occur every 1000ms (1 sec)
    timer = setInterval(decrementCounter, 1000);
    const question = questionInfo[currentQuestion].question;
    const responses = questionInfo[currentQuestion].responses; 

    // display initial time
    $('#time-remaining').html(`
        <span>${timeRemaining}</span>   
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
        result += `
        <p class="response text-center m-2" data-answer="${responses[r]}">${responses[r]}</p>
        `;
    };

    return result;
};

// click funtion for detection of user selection
$(document).on('click', '.response', function(){

    const selection = $(this).attr('data-answer');
    const correctAnswer = questionInfo[currentQuestion].correctAnswer;
    clearInterval(timer);
    
    // if/else statement to handle right/wrong selection scenario
    if (selection === correctAnswer){
        answeredCorrectly++;
        nextSong();
        console.log('Victorious');
    } else {
        answeredIncorrectly++;
        nextSong();
        console.log('The smell of da-feet');
    }
    
});


// function for loading next question
function nextSong(){
    
    const theEnd = (questionInfo.length -1) === currentQuestion;
    if(theEnd){
        showMe();
    } else {
        currentQuestion++;
        noPressure();
    }
};


// create function to call for timeRemaining decrement
function decrementCounter(){
    
    timeRemaining--;
    $("#time-remaining").html(timeRemaining);
    
    // end round when no time is remaining
    if(timeRemaining===0){
        gameOverMan();
    }
    
};

// create function to clear timer at zero
function gameOverMan(){
    clearInterval(timer);
    
    // increment wrong answer counter
    answeredIncorrectly++;
    // call next question function
    nextSong();
};


// start game button function
$(document).on('click', '#start-button', function(){
    // hide start button when game begins
    $('#start-button').hide();
    noPressure();
});

// reset game button function
$(document).on('click', '#reset-button', function(){
    timeRemaining = 10;
    answeredCorrectly = 0;
    answeredIncorrectly = 0;
    currentQuestion = 0;
    time;
    noPressure();
});

// pop-up displaying right or wrong answer after user response
function winOrLose(status) {
    if (status === 'win'){
        $('#answer-game-card').html(`
            <p class="card-body win text-center">That is correct, actually!</p>
            `);
        } else {
            $('#answer-game-card').html(`
            <p class="card-body lose text-center">Life is pain</p>
            `);
        }
    };
