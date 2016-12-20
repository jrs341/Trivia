

// GLOBAL VARIABLES
// =============================================================================

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
// ===============================================================================

function startCountDown() {
	counter = setTimeout(countDown, 1000);
}

function countDown() {
	startCountDown();
	time --;
	$('#timer').html(time);
}

function showNextQuestion() {
	questionTimeout = setTimeout(displayQuestion, 5000);	
}

function resultTimeout() {
	displayTimeout = setTimeout(firstQuestion, 3000);
}

function displayQuestion() {
	// empty();

	$('#question').append(questionAnswer[questionCount].question);
	for (var i = 0; i < questionAnswer[questionCount].answers.length; i++) {
		var b = $('<button>');
		b.text(questionAnswer[questionCount].answers[i]);
		b.appendTo('#answers');
	}

	$('button').on('click', function() {
		if ($(this).text() == questionAnswer[questionCount -1].correct) {
			correct++;
			// click++;
			$('#result').html('That was the correct answer');
			// questionCount++;
			clickReset();
			resultTimeout();
			// nextQuestion();
			// if ($(this).text() != questionAnswer[questionCount].correct)	
		} 
		else {
			incorrect++;
			// click++;
			$('#result').html('That answer was incorrect the correct answer is ' + questionAnswer[questionCount -1].correct);
			// questionCount++;
			clickReset();
			resultTimeout();
			// nextQuestion();
		}
	});

	if (time === 0) {
			$('#result').html('Time is up! The correct answer is ' + questionAnswer[questionCount -1].correct);
			incorrect++;
			clickReset();
			resultTimeout();
			displayQuestion();
	}
	else if (time === 0 && questionCount==questionAnswer.length)
	{
		empty();
		$('#question').html('Correct Answers: ' + correct);
		$('#answers').html('Incorrect Answers: ' + incorrect);
		$('#answers').append('Unanswered:' + unAnswered);
		reset();
	}
	else {
		displayQuestion();
	}

		// nextQuestion();	
}

// function nextQuestion() {
// 	showNextQuestion();
// 	questionCount++;
// 	clearTimeout(counter);
// 	time = 5;
// 	countDown();
// 	if (questionCount==questionAnswer.length) {
// 		empty();
// 		$('#question').html('Correct Answers: ' + correct);
// 		$('#answers').html('Incorrect Answers: ' + incorrect);
// 		$('#answers').append('Unanswered:' + unAnswered);
// 		reset();
// 	}
// }

function empty() {
	$('#question').empty();
	$('#answers').empty();
	$('#result').empty();
}

function reset() {
	questionCount = 0;
	correct = 0;
	incorrect = 0;
}

function clickReset() {
	clearTimeout(questionTimeout);
	clearTimeout(counter);
	time = 5;
}

$(document).ready(function() {

	// countDown();

	displayQuestion();

});