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

// need a set timeout function to stop the loop from running
function displayAnswers() {

	for (var i = 0; i < questionAnswer.length; i++) {
		var b = $('<button>');
		b.text(questionAnswer[i].answers);
		// b.addClass('characterList');
		// b.attr('id', i); 
		// b.css('background-image', 'url(" '+ characters[i].img +'  ")');
		 // $('#answers').after(b);
		 b.appendTo('#answers');
		 $('#question').append(questionAnswer[i].question);
		 // setDelay(i);
	}
}


/*function setDelay(i) {
  setTimeout(function(){
    console.log(i);
  }, 1000);
}*/

function loop() {
	displayAnswers();
	setTimeout(loop,1000);
	// need something to clear
}



$(document).ready(function() {

// loop();

});