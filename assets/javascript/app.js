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

var count = 0;

var correct = 0;

var incorrect = 0;

function showNextQuestion () {
	questionTimeout = setTimeout(firstQuestion, 5000);	
}

function clearTimer() {
	clearTimeout(questionTimeout);
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

	$('button').on('click', function() {
		console.log($(this).text());
		if ($(this).text() == questionAnswer[count].correct) {
			correct++;
			clearTimeout(questionTimeout);
			firstQuestion();
			
		} else {
			incorrect++;
			clearTimeout(questionTimeout);
			firstQuestion();	
		} 
	});

	nextQuestion();
}

function nextQuestion() {
	showNextQuestion();
	count++;
	if (count==questionAnswer.length) {
		// display results page here for a few moments
		$('#question').empty();
		$('#answer').empty();
		$('#question').html('Correct Answers: ' + correct);
		$('#answers').html('Incorrect Answers: ' + incorrect);
		count = 0;
		correct = 0;
		incorrect = 0;
	}
}

function countDown() {
	time--;
	var converted = timeConverter(time);
	$('#timer').html(converted);
}

function timeConverter(t){
	var minutes = Math.floor(t/60);
	var seconds = t - (minutes * 60);
	 	if (seconds < 10){
	    	seconds = "0" + seconds;
	  	}
	  	if (minutes === 0){
	    	minutes = "00";
	  } else if (minutes < 10){
	   		 minutes = "0" + minutes;
	  }
	  	return minutes + ":" + seconds;
}

$(document).ready(function() {

	firstQuestion();

});