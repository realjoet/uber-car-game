//global vars
var currentScore = 0;
var highScore = 0;
var questions = ["joke 1", "joke 2", "joke 3"];
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

		this.refreshCounter();
		this.addPoint();
		this.getJoke();
	},

	refreshCounter: function(){
		$('#refresh-score').click(function(){
			currentScore = 0;
			currentScoreVal.html(currentScore);
			currentScoreVal.css({
					color: "#ECEFF1"
				});
			scoreButton.css({
					background: "#76FF03",
					color: "#311B92"
				});
			// $('#refresh-score').animate({
			// 	transform: "rotate(-360deg)"
			// 	}, 500);
		});
	},

	getJoke: function(){
		scoreButton.click(function(){
			var randomNum = Math.floor(Math.random() * numQuestions);
			console.log(jokes[randomNum]);
		})
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
					})
				$('#score-button').css({
					background: "#F50057",
					color: "#76FF03"
					})
			} else {
				highScoreVal.html(highScore);
			}
			// $('#overlay').animate({
			// 	width: "200vw",
			// 	height: "200vw"
			// 	}, 500);
		});
	},

}

$(function(){
	myApp.initialize();
})