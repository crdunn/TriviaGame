

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
	$(".answer").html("Answer:")
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
	$(".answer").html("Answer: The founding Avengers were Captain America, Iron Man, The Hulk, Thor, Black Widow, and Hawkeye.");
	$(".image").html("<img src='../images/AvengersGroupShot.jpg' alt='image'>");
	winCheck();

};

function secondQuestion() {
	$(".question").html("In her first appearence in comics, what motivated Wonder Woman to fight for the Allies in WWII?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1"> Defending her homeland</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> A command form Ares, the God of War</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Defending the Greek principals of democracy across the world</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Revenge for her destroyed homeland</label>');
	questionStart ();
};

function secondAnswer() {
	$(".answer").html("Answer: Defending the Greek principals of democracy.  Her mother, Queen Hippolyta, saw the United States as the last, best, hope for the light of Democracy in a world that was swiftly falling into totalarianism.");
	$(".image").html("<img src='../images/wwcostume.jpg' alt='image'>");
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
	$(".answer").html("Correct Answer: Batman.  Superman trusted Batman's judgment and morality more than anyone else on the planet.");
	$(".image").html("<img src='../images/kryptonite.jpg' alt='image'>");
	winCheck();


};

function fourthQuestion() {
	$(".question").html("In the Image Comic series <b>Saga</b>, what animal companion started as the partner of the Bounty Hunter, 'The Will'?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1"> Devil Dog</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lying Cat</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Storm Crow</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Thieving Rat</label>');	
	questionStart ();

};

function fourthAnswer() {
	$(".answer").html("Correct Answer: Lying Cat.  Lying Cats always know hen someone is lying, and will say if they are.  A useful tool for a bounty hunter.");
	$(".image").html("<img src='../images/lyingCat.jpg' alt='image'>");
	winCheck();

};

function fifthQuestion() {
	$(".question").html("Which of the following ridiculous names belongs to an actual superhero in mainline DC/Marvel continunity?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Arm-Fall-Off Boy</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Matter-Eater Lad</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Mister Sinister</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lady Stilt Man</label>');	
	questionStart ();

};

function fifthAnswer() {
	$(".answer").html("Correct Answer: Trick Question.  They're all real.");
	$(".image1").html("<img src='../images/AFOB.jpg' alt='image'>");
	$(".image2").html("<img src='../images/mel.jpg' alt='image'>");
	$(".image3").html("<img src='../images/misterSinister.png' alt='image'>");
	$(".image4").html("<img src='../images/ladystiltman.jpg' alt='image'>");
	winCheck();

};

function sixthQuestion() {
	$(".image1").html("  ");
	$(".image2").html("  ");
	$(".image3").html("  ");
	$(".image4").html("  ");
	$(".question").html("The protagonist of Neil Gaimen's fantasy comic series 'Sandman', is Dream the Endless.  Which of his six siblings does he get along the best with?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Death the Endless</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1"> Destiny the Endless</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1"> Dispair the Endless</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1"> Delirium the Endless</label>');	
	questionStart ();

};

function sixthAnswer() {
	$(".answer").html("Correct Answer: Death the Endless.  Dispite their clashing personalities, Death's upbeat outlook on this prescious gift called 'life' often drags Dream out of his dour moods.");
	$(".image").html("<img src='../images/deathDream.jpg' alt='image'>");
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
	$(".answer").html("There is no 'correct' answer!  They're all great!    I'm just glad you have a favorite.<br>Or maybe you don't.  That's OK too!");
	$(".image").html("<img src='../images/falloutUp.jpg' alt='image'>");
	winCheck();

};















