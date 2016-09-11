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

var count = 0;

var correct = 0;

var incorrect = 0;

function showNextQuestion () {
	questionTimeout = setTimeout(firstQuestion, 5000);	
}


function firstQuestion() {
	$('#question').empty();
	$('#answers').empty();
	$('#question').append(questionAnswer[count].question);
	for (var i = 0; i < questionAnswer[count].answers.length; i++) {
		var b = $('<button>');
		b.text(questionAnswer[count].answers[i]);
		b.appendTo('#answers');
	}

	nextQuestion();
}

function nextQuestion() {
	showNextQuestion();
	count++;
	if (count==questionAnswer.length) {
		count = 0;
	}
}

$(document).ready(function() {

firstQuestion();

$('button').on('click', function() {
	console.log($(this).text());
	if ($(this).text() == questionAnswer[count].correct) {
		console.log('correct');
		correct++;
	} else {
		console.log('incorrect');
		incorrect++;
	}
});

});