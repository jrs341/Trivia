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
	setTimeout(firstQuestion, 5000);
	count++;
	if (count==questionAnswer.length) {
		count = 0;
	}
}

function startTrivia () {

}


/* function displayAnswers() {

	for (var i = 0; i < questionAnswer.length; i++) {
		var b = $('<button>');
		b.text(questionAnswer[i].answers);
		// b.addClass('characterList');
		// b.attr('id', i); 
		// b.css('background-image', 'url(" '+ characters[i].img +'  ")');
		 // $('#answers').after(b);
		 $('#question').append(questionAnswer[i].question);
		 b.appendTo('#answers');
		 // setDelay(i);
	}	
}*/


/*function setDelay(i) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}*/

// function loop() {
	// displayAnswers();
	// setTimeout(loop,1000);
	// loopCount ++;
	// console.log(loopCount);
	// need something to clear
// }



$(document).ready(function() {

// $('.correct').click(startTrivia);
// $('.inCorrect').click(continueTrivia);

firstQuestion();

// nextQuestion();

});