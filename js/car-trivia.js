//global vars
var currentScore = 0;
var highScore = 0;
var questions = [];
var numQuestions = questions.length;

//buttons
var currentScoreVal = $('#current-score-value');
var highScoreVal = $('#high-score-value');
var scoreButton = $('#score-button');


var myApp = {
	initialize: function(){
		currentScoreVal.append(currentScore);

		if (currentScore > highScore) {
			highScoreVal.html(currentScore);
		} else {
			highScoreVal.html(highScore);
		}

		// this.getData();
		this.refreshCounter();
		this.addPoint();
	},

	getData: function(){
		$.getJSON('car-trivia.json').done(function(data){
			console.log(data);
			var question = data.category[i][question+i].question;
			var answer = data.category[i][question+i].answer;
			var points = data.category[i][question+i].points;
			questions.push(question)
		});
	},

	refreshCounter: function(){
		$('#refresh-score').click(function(){
			currentScore = 0;
			currentScoreVal.html(currentScore);
			currentScoreVal.css({
					color: "#ECEFF1"
				});
			highScoreVal.css({
					color: "#ECEFF1"
					});
			// $('#refresh-score').animate({
			// 	transform: "rotate(-360deg)"
			// 	}, 500);
		});
	},

	addPoint: function(){
		scoreButton.click(function(){
			currentScore++;
			currentScoreVal.html(currentScore);
			if (currentScore > highScore) {
				highScoreVal.html(currentScore);
				highScore = currentScore;
				currentScoreVal.css({
					color: "#F50057"
					});
				highScoreVal.css({
					color: "#F50057"
					});
			} else {
				highScoreVal.html(highScore);
			}
			// newQuestion();
			// $('#overlay').animate({
			// 	width: "200vw",
			// 	height: "200vw"
			// 	}, 500);
		});
	},

	// newQuestion: function(){
	// 	scoreButton.click(function(){
	// 		var randomNum = Math.floor(Math.random() * numQuestions);
	// 		console.log(jokes[randomNum]);
	// 		$('#question').html(jokes[randomNum]);
	// 	})
	// },

}

$(function(){
	myApp.initialize();
	myApp.getData();
})