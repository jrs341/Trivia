// GLOBAL VARIABLES
// =============================================================================

// https://www.opentdb.com/api.php?amount=11&category=9&difficulty=medium&type=multiple&encode=url3986

var question = [];

var incorrectAnswers = [];

var correctAnswers = [];

var answerList = [];

var questionAnswer = [

	{
		question: 'What is the incorrect pets name',
		answers: ['bear', 'sicily', 'gearmo', 'hoddy'],
		correct: 'hoddy'
	},

	{
		question: 'which one is NaN',
		answers: ['one', 'two', 'dog', 'three'],
		correct: 'dog'
	},

	{
		question: 'q3',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q4',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q5',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q6',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q7',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q8',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q9',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	},

	{
		question: 'q10',	
		answers: ['1', '2', '3', '4'],
		correct: '3'
	}
];

var time = 5;

var questionCount = 0;

var correct = 0;

var incorrect = 0;

var unAnswered = 0;

var click = 0;

// FUNCTIONS
// =================================================================================================

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleAnswers(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function countDown() {
	$('#timer').html('Timer: ' + time);
	time --;
	if (time < 0) {
		unAnswered++;
		$('#result').html('Time is up! The correct answer is ' + questionAnswer[questionCount].correct);
		reset();
	}
}

function getQuestion() {
	time = 5;
	$('#start').css('display', 'none');
	timer = setInterval(countDown, 1000);
	$('#question').append(questionAnswer[questionCount].question);
	for (var i = 0; i < questionAnswer[questionCount].answers.length; i++) {
		var b = $('<button class="btn pill">');
		b.text(questionAnswer[questionCount].answers[i]);
		b.appendTo('#button'+i);
	}
	checkAnswer();
}

function nextQuestion() {
	time = 5;
	$('#timer').html('Timer: ' + time);
	getQuestion();
}

function checkFinalAnswer() {
	if (questionCount === questionAnswer.length -1){
		displayResults();
	}
}

function checkAnswer() {

	$('button').on('click', function() {
		if ($(this).text() == questionAnswer[questionCount].correct) {
			$('#result').html('That was the correct answer');
			correct++;
			reset();
		} 
		else {
			$('#result').html('That answer was incorrect the correct answer is ' + questionAnswer[questionCount].correct);
			incorrect++;
			reset();
		}
	});
	console.log(questionCount);
	checkFinalAnswer();
}

function empty() {
	for (var i = 0; i < 4; i++) {
		$('#button'+i).empty();
	}
	$('#question').empty();
	$('#result').empty();
}

function reset() {
	questionCount++;
	clearInterval(timer);
	setTimeout(empty, 1000);
	setTimeout(nextQuestion, 1000);
}

function displayResults() {
	$('#start').removeAttr('style');
	$('#timer').empty();
	$('#result').html('Correct Answers: ' + correct);
	$('#question').html('Incorrect Answers: ' + incorrect);
	$('#answers').html('Unanswered:' + unAnswered);
	clearInterval(timer);
}

// getQuestion();


