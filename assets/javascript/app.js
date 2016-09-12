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

function showNextQuestion () {
	questionTimeout = setTimeout(firstQuestion, 5000);	
}

// function clearTimer() {
	// clearTimeout(questionTimeout);
// }

function firstQuestion() {
	$('#question').empty();
	$('#answers').empty();
	$('#question').append(questionAnswer[questionCount].question);
	for (var i = 0; i < questionAnswer[questionCount].answers.length; i++) {
		var b = $('<button>');
		b.text(questionAnswer[questionCount].answers[i]);
		b.appendTo('#answers');
	}

	$('button').on('click', function() {
		console.log($(this).text());
		if ($(this).text() == questionAnswer[questionCount].correct) {
			correct++;
			clearTimeout(questionTimeout);
			clearTimeout(counter);
			time = 5;
			firstQuestion();
			
		} else /*if ($(this).text() != questionAnswer[questionCount].correct)*/ {
			incorrect++;
			clearTimeout(questionTimeout);
			clearTimeout(counter);
			time = 5;
			firstQuestion();	
		} 
	});

	nextQuestion();
}

function nextQuestion() {
	showNextQuestion();
	questionCount++;
	incorrect++;
	clearTimeout(counter);
	time = 5;
	countDown();
	if (questionCount==questionAnswer.length) {
		// display results page here for a few moments
		$('#question').empty();
		$('#answer').empty();
		$('#question').html('Correct Answers: ' + correct);
		$('#answers').html('Incorrect Answers: ' + incorrect);
		questionCount = 0;
		correct = 0;
		incorrect = 0;
	}
}

function startCountDown() {
	counter = setTimeout(countDown, 1000);
}

function countDown() {
	startCountDown();
	time --;
	$('#timer').html(time);
}

window.onload = function() {

};

$(document).ready(function() {

	countDown();

	firstQuestion();

});