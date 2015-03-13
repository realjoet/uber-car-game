$(function(){
	var currentScore = 0,
	highScore = 0,
	currentScoreVal = $('#current-score-value'),
	highScoreVal = $('#high-score-value');


	currentScoreVal.append(currentScore);

	if (currentScore > highScore) {
		highScoreVal.html(currentScore);
	} else {
		highScoreVal.html(highScore);
	};


	$('#refresh-score').click(function(e){
		e.preventDefault();
		console.log("refresh click");
		currentScore = 0;
		currentScoreVal.html(currentScore);
		currentScoreVal.css({
				color: "#ECEFF1"
			})
		$('#refresh-score').animate({
			transform: "rotate(-360deg)"
		}, 500);
	});

	$('#score-button').click(function(){
		console.log("score click");
		currentScore++;
		currentScoreVal.html(currentScore);
		if (currentScore > highScore) {
			highScoreVal.html(currentScore);
			currentScoreVal.css({
				color: "#F50057"
			})
		} else {
			highScoreVal.html(highScore);
		};
		$('#overlay').animate({
			width: "200vw",
			height: "200vw"
		}, 500);
	});

})