
var timer
var wins = 0
var loss = 0
var miss = 0
var question = 0

$("#button1").on("click", firstQuestion);



function questionStart () {
	timer = setTimeout(firstAnswer, 10000);
	$(".image").html('<img src="assets/images/white.jpg" alt="image">');
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
	clearTimeout(timer);
	$(".timer").html("0");
	$(".correct").attr("style","font-weight:bold");
	var checked = $(':radio[class="correctAns"]:checked').length;
	var answered = $(':radio[class="wrong"]:checked').length
	if (checked === 1){
		wins++;
	}
	else if (answered === 1){
		loss++
	}
	else {
		miss++
	};

	$(".winCounter").html(wins);
	$(".lossCounter").html(loss);
	$(".missCounter").html(miss);
};


function firstQuestion() {
	$(".question").html(" Which of the following Superheroes was not a founding Avenger?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns">  Black Widow</label>');
	$(".a2").html('<label class="radio-inline "><input type="radio" name="q1" class="wrong"> Captain America</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Iron Man</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Ant Man</label>');	
	questionStart ();
	$("#submitButton").html('<button id="button2">Submit</button>');
	$("#button2").on("click", firstAnswer);
};

function firstAnswer() {
	console.log ("firstanswer")
	$(".answer").html("Answer: In 'The Avengers #1', the founding Avengers were Captain America, Iron Man, The Hulk, Thor, Ant Man, and The Wasp.");
	$(".image").html("<img src='assets/images/avengersFit.jpg' alt='image'>");
	winCheck();
	$("#submitButton").html('<button id="button3">Next Question</button>');
	$("#button3").on("click", secondQuestion);

};

function secondQuestion() {
	$(".question").html("In her first appearence in comics, what motivated Wonder Woman to fight for the Allies in WWII?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Defending her homeland</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> A command form Ares, the God of War</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Defending the Greek principals of democracy across the world</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Revenge for her destroyed homeland</label>');
	questionStart ();
	$("#submitButton").html('<button id="button4">Submit</button>');
	$("#button4").on("click", secondAnswer);
};

function secondAnswer() {
	$(".answer").html("Answer: Defending the Greek principals of democracy.  Her mother, Queen Hippolyta, saw the United States as the last, best, hope for the light of Democracy in a world that was swiftly falling into totalarianism.");
	$(".image").html("<img src='assets/images/wwCostumeFit.jpg' alt='image'>");
	winCheck ();
	$("#submitButton").html('<button id="button5">Next Question</button>');
	$("#button5").on("click", thirdQuestion);
};

function thirdQuestion() {
	$(".question").html("When Superman feared that he could be comprimised by his enemies, to whom did he give a piece of Kryptonite to stop him should the need arise?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> The President of the United States</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Green Lantern</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Ma and Pa Kent</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Batman</label>');
	questionStart ();
	setTimeout(thirdAnswer, 10000);
	$("#submitButton").html('<button id="button6">Submit</button>');
	$("#button6").on("click", thirdAnswer);

};

function thirdAnswer() {
	clearInterval (thirdAnswer);
	$(".answer").html("Correct Answer: Batman.  Superman trusted Batman's judgment and morality more than anyone else on the planet.");
	$(".image").html("<img src='assets/images/kryptoniteFit.jpg' alt='image'>");
	winCheck();
	$("#submitButton").html('<button id="button7">Next Question</button>');
	$("#button7").on("click", fourthQuestion);


};

function fourthQuestion() {
	$(".question").html("In the Image Comic series 'Saga', what animal companion started as the partner of the Bounty Hunter, 'The Will'?");
	$(".a1").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Devil Dog</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lying Cat</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Storm Crow</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Thieving Rat</label>');	
	questionStart ();
	setTimeout(fourthAnswer, 10000);
	$("#submitButton").html('<button id="button8">Submit</button>');
	$("#button8").on("click", fourthAnswer);

};

function fourthAnswer() {
	clearInterval (fourthAnswer);
	$(".answer").html("Correct Answer: Lying Cat.  Lying Cats always know hen someone is lying, and will say if they are.  A useful skill for a bounty hunter.");
	$(".image").html("<img src='assets/images/lyingCatFit.jpg' alt='image'>");
	winCheck();
	$("#submitButton").html('<button id="button9">Next Question</button>');
	$("#button9").on("click", fifthQuestion);

};

function fifthQuestion() {
	$(".image").html('<img src="assets/images/white.jpg" alt="image">');
	$(".question").html("Which of the following ridiculous names belongs to an actual superhero in mainline DC/Marvel continunity?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Arm-Fall-Off Boy</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Matter-Eater Lad</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Mister Sinister</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Lady Stilt Man</label>');	
	questionStart ();
	setTimeout(fifthAnswer, 10000);
	$("#submitButton").html('<button id="button10">Submit</button>');
	$("#button10").on("click", fifthAnswer);

};

function fifthAnswer() {
	clearInterval (fifthAnswer);
	$(".answer").html("Correct Answer: Trick Question.  They're all real.");
	$(".image").html("<img src='assets/images/rNamesFit.jpg' alt='image'>");
	winCheck();	
	$("#submitButton").html('<button id="button11">Next Question</button>');
	$("#button11").on("click", sixthQuestion);

};

function sixthQuestion() {
	$(".image").html('<img src="assets/images/white.jpg" alt="image">');
	$(".question").html("The protagonist of Neil Gaimen's fantasy comic series 'Sandman', is Dream the Endless.  Which of his six siblings does he get along the best with?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> Death the Endless</label>');
	$(".a2").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Destiny the Endless</label>');
	$(".a3").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Dispair the Endless</label>');
	$(".a4").html('<label class="radio-inline"><input type="radio" name="q1" class="wrong"> Delirium the Endless</label>');	
	questionStart ();
	setTimeout(sixthAnswer, 10000);
	$("#submitButton").html('<button id="button12">Submit</button>');
	$("#button12").on("click", sixthAnswer);

};

function sixthAnswer() {
	clearInterval (sixthAnswer);
	$(".answer").html("Correct Answer: Death the Endless.  Dispite their clashing personalities, Death's upbeat outlook on this prescious gift called 'life' often drags Dream out of his dour moods.");
	$(".image").html("<img src='assets/images/deathDreamFit.jpg' alt='image'>");
	winCheck();
	$("#submitButton").html('<button id="button13">Next Question</button>');
	$("#button13").on("click", seventhQuestion);

};

function seventhQuestion() {
	$(".image").html('<img src="assets/images/white.jpg" alt="image">');
	$(".question").html("Which Superhero team is the best?");
	$(".a1").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Justice League</label>');
	$(".a2").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Avengers</label>');
	$(".a3").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The Teen Titans</label>');
	$(".a4").html('<label class="radio-inline correct"><input type="radio" name="q1" class="correctAns"> The X-Men</label>');
	questionStart ();
	setTimeout(seventhAnswer, 10000);
	$("#submitButton").html('<button id="button14">Submit</button>');
	$("#button14").on("click", seventhAnswer);

};

function seventhAnswer() {
	clearInterval (seventhAnswer);
	$(".answer").html("There is no 'correct' answer!  They're all great!    I'm just glad you have a favorite.<br>Or maybe you don't.  That's OK too!");
	$(".image").html("<img src='assets/images/falloutFit.jpg' class='ansImage' alt='image'>");
	winCheck();

};















