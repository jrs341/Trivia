// GLOBAL VARIABLES
// =============================================================================

// https://www.opentdb.com/api.php?amount=11&category=9&difficulty=medium&type=multiple&encode=url3986

$.ajax({url: "https://www.opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple", method: 'GET'}).done(function(response) {

	     for (var i = 0; i < results.length; i++) {
	     	question.push(results[i].question);
	     	incorrectAnswers.push(results[i].incorrect_answers);
	     	correctAnswers.push(results[i].correct_answers);
	     }

	     console.log(response.results);
	}); 
var question = [];

var incorrectAnswers = [];

var correctAnswers = [];

var answerList;

// var response = {
// 	results:[

// 	{
// 		question: 'What is the incorrect pets name',
// 		incorrect_answers: ['bear', 'sicily', 'gearmo'],
// 		correct_answers: 'hoddy'
// 	},

// 	{
// 		question: 'which one is NaN',
// 		incorrect_answers: ['one', 'two', 'three'],
// 		correct_answers: 'dog'
// 	},

// 	{
// 		question: 'q3',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q4',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q5',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q6',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q7',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q8',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q9',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	},

// 	{
// 		question: 'q10',	
// 		incorrect_answers: ['1', '2', '4'],
// 		correct_answers: '3'
// 	}
// ]
// };

var time = 5;

var questionCount = 0;

var correct = 0;

var incorrect = 0;

var unAnswered = 0;

var click = 0;

// for (var i = 0; i < response.results.length; i++) {
// 	     	question.push(response.results[i].question);
// 	     	incorrectAnswers.push(response.results[i].incorrect_answers);
// 	     	correctAnswers.push(response.results[i].correct_answers);
// 	     }

// 	     console.log(response.results);

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
}

function countDown() {
	$('#timer').html(time);
	time --;
	if (time < 0) {
		unAnswered++;
		$('#result').html('Time is up! The correct answer is ' + correctAnswers[questionCount]);
		reset();
	}
}

function getQuestion() {
	timer = setInterval(countDown, 1000);
	$('#question').append(question[questionCount]);
	answerList = incorrectAnswers[questionCount];
	answerList.push(correctAnswers[questionCount]);
	shuffleAnswers(answerList);
	for (var i = 0; i < answerList.length; i++) {
		var b = $('<button>');
		b.text(answerList[i]);
		b.appendTo('#answers');
	}
	checkAnswer();
}

function nextQuestion() {
	time = 5;
	$('#timer').html(time);
	getQuestion();
}

function checkFinalAnswer() {
	if (questionCount === question.length -1){
		displayResults();
	}
}

function checkAnswer() {

	$('button').on('click', function() {
		if ($(this).text() == correctAnswers[questionCount]) {
			$('#result').html('That was the correct answer');
			correct++;
			reset();
		} 
		else {
			$('#result').html('That answer was incorrect the correct answer is ' + correctAnswers[questionCount]);
			incorrect++;
			reset();
		}
	});
	console.log(questionCount);
	checkFinalAnswer();
}

function empty() {
	$('#question').empty();
	$('#answers').empty();
	$('#result').empty();
}

function reset() {
	questionCount++;
	clearInterval(timer);
	setTimeout(empty, 1000);
	setTimeout(nextQuestion, 1000);
}

function displayResults() {
	$('#timer').empty();
	$('#result').html('Correct Answers: ' + correct);
	$('#question').html('Incorrect Answers: ' + incorrect);
	$('#answers').html('Unanswered:' + unAnswered);
	clearInterval(timer);
}

getQuestion();


