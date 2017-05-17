var questions = [{ 
      text: 'The State Capital of Alaska Is?',
      answers: ['Anchorage', 'Juneau', 'Homer', 'Willow']
     	},
      {
      	text: 'The State Captial of California Is?',
      	answers: ['Los Angeles', 'Sacramento', 'Monterey', 'San Francisco']
      },
      {
      	text: 'The State Capital of North Dakota Is?',
      	answers: ['Pierre', 'Bismarck', 'Fargo', 'Minot']
      },
      {
      	text: 'The State Capital of New York Is?',
      	answers: ['Syracuse', 'Albany', 'Buffalo', 'NYC']
      },
      {
      	text: 'The State Capital of Florida Is?',
      	answers: ['West Palm Beach', 'Tallahassee', 'Miami', 'Tampa']
      },
      {
      	text: 'The State Capital of Nevada Is?',
      	answers: ['Reno', 'Carson City', 'Las Vegas', 'Elko']
      },
      {
      	text: 'The State Capital of Texas Is?',
      	answers: ['Dallas', 'Austin', 'Huston', 'Fort Worth']
      },
      {
      	text: 'The State Capital of North Carolina Is?',
      	answers: ['Columbia', 'Raleigh', 'Charlotte', 'Asheville']
      },
      {
      	text: 'The State Capital of Washington Is?',
      	answers: ['Seattle', 'Olympia', 'Takoma', 'Spokane']
      },
      {
      	text: 'The State Capital of Michigan Is?',
      	answers: ['Detriot', 'Lansing', 'Ann Arbor', 'Great Rapids']
      }
	]

	var currentQuestion = 0

	var currentScore = 0

$('.startQuiz').on('click', function(event){
	$('body').removeClass("intro")
	$('.intro').hide( )
	$('.questions').show( )
	showQuestion(currentQuestion)
})

function showQuestion(index) {
	if(index===questions.length) {
		$('.questions').html('<img src="images/jake_dancing_gif_by_blue_staple_studios-d953i0n.gif" class="dancingJake" width="400" height="340"><h3 class="score">FIN! Final Score: '+currentScore+' out of '+questions.length+'</h3>')
	}
	var question = questions[index]
	$('.questions').html('<h2>' + question.text + '</h2>')
	$('.questions').append('<button type="submit" class="incorrect">'+ question.answers[0] +'</button>')
	$('.questions').append('<button type="submit" class="correct">'+ question.answers[1] +'</button>')
	$('.questions').append('<button type="submit" class="incorrect">'+ question.answers[2] +'</button>')
	$('.questions').append('<button type="submit" class="incorrect">'+ question.answers[3] +'</button>')
	$('.questions').append('<div class="answer"></div>')
	$('.questions button').shuffle( )
	$('.questions').append('<p>Question: '+(index+1)+' of '+questions.length+'</p>')
	$('.questions').append('<p>Score: '+currentScore+'</p>')
}

$('.questions').on('click', 'button', function(event) {
	$('button').attr('disabled', true)
	if($(this).hasClass('correct')) {
		var msg = 'Congrats!'
		$('.correct').css({"background-color":"#15B7B9", "color":"black", "font-size":"16px"})
		currentScore++

	}
	else{
		var msg = 'Oops, not quite!'
	$('.correct').css({"background-color":"#55A44E", "color":"black", "font-size":"16px"})
	$('.incorrect').css("background-color", "#F57170")
	}

	$('.answer').html('<span class="msg">'+msg+'</span>')

	if(currentQuestion===questions.length){
		$('.answer').append('<button type="submit" class="nextQuestion">See Your Score</button>')
	}
	else{
		$('.answer').append('<button type="submit" class="nextQuestion">Next Question</button>')
	}
}) 

$('.questions').on('click', '.nextQuestion', function(event) {
	showQuestion(++currentQuestion)
})

;(function($){

    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);
