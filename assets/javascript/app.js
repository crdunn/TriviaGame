

var wins = 0

var question = 0




// $("startButton").click(startGame);

// function startGame () {
	setTimeout(firstQuestion, 0);
	setTimeout(firstAnswer, 10000);
	setTimeout(secondQuestion, 20000);
	setTimeout(secondAnswer, 30000);
	setTimeout(thirdQuestion, 40000);
	setTimeout(thirdAnswer, 50000);
	setTimeout(fourthQuestion, 60000);
	setTimeout(fourthAnswer, 70000);
	setTimeout(fifthQuestion, 80000);
	setTimeout(fifthAnswer, 90000);
	setTimeout(sixthQuestion, 100000);
	setTimeout(sixthAnswer, 110000);
	setTimeout(seventhQuestion, 120000);
	setTimeout(seventhAnswer, 130000);
// };


function questionStart () {
	$(".image").html(" ");
	question++
	$(".questionCounter").html(question);
	displayTime = setInterval(decrement, 1000);
	var timeLeft = 10
	function decrement() {
	  timeLeft--;
	  $(".timer").html(timeLeft);
	}

};

function winCheck(){
	clearInterval (displayTime);
	$(".timer").html("0");
	$(".correct").attr("style","font-weight:bold");
	var checked = $(':radio[class="correctAns"]:checked').length;
	if (checked === 1){
		wins++;
	}
	$(".winCounter").html(wins);
};


function firstQuestion() {
	$(".question").html(" Which of the following Superheroes was not a founding Avenger?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns">  Scarlet Witch</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> Captain America</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Iron Man</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Black Widow</label>');	
	questionStart ();
};

function firstAnswer() {
	$(".question").html("Correct Answer: Scarlet Witch");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();

};

function secondQuestion() {
	$(".question").html("In her first appearence in comics, what motivated Diana of Themiscara to fight for the Allies in WWII?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1"> Defending her homeland</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> A command form Ares, the God of War</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Defending the Greek principals of democracy across the world</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Revenge for her destroyed homeland</label>');
	questionStart ();
};

function secondAnswer() {
	$(".question").html("Correct Answer: Defending the Greek principals of democracy.");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck ();
};

function thirdQuestion() {
	$(".question").html("When Superman feared that he could be comprimised by his enemies, who did he give a piece of Kryptonite to stop him should the need arise?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1"> The President of the United States</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> Green Lantern</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Ma and Pa Kent</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Batman</label>');
	questionStart ();

};

function thirdAnswer() {
	$(".question").html("Correct Answer: Batman");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();


};

function fourthQuestion() {
	$(".question").html("In the Image Comic series <b>Saga</b>, what animal companion started as the partner of the Bounty Hunter The Will?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1"> Devil Dog</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lying Cat</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Storm Crow</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Thieving Rat</label>');	
	questionStart ();

};

function fourthAnswer() {
	$(".question").html("Correct Answer: Lying Cat");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();

};

function fifthQuestion() {
	$(".question").html("Which of the following ridiculous belongs to an actual superhero in mainline DC/Marvel continunity?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Arm-Fall-Off Boy</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Matter-Eater Lad</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Mister Sinister</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lady Stilt Man</label>');	
	questionStart ();

};

function fifthAnswer() {
	$(".question").html("Correct Answer: Trick Question.  They're all real.");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();

};

function sixthQuestion() {
	$(".question").html("The protagonist of Neil Gaimen's fantasy comic series 'Sandman', is Dream the Endless.  Which of his six siblings does he get along the best with?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Death the Endless</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> Destiny the Endless</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Dispair the Endless</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Delirium the Endless</label>');	
	questionStart ();

};

function sixthAnswer() {
	$(".question").html("Correct Answer: Death the Endless");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();

};

function seventhQuestion() {
	$(".question").html("Which Superhero team is the best?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Justice League</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Avengers</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Teen Titans</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The X-Men</label>');
	questionStart ();

};

function seventhAnswer() {
	$(".question").html("There is no 'correct' answer.  I'm just glad you have a favorite");
	$(".image").html("<img src='http://via.placeholder.com/350x150' alt='image'>");
	winCheck();

};















