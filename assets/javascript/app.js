

	var number = 10


	function decrement() {

	  number--;

	  $("#show-number").html(number);

	  if (number === 0){
	  	clearInterval (displayTime);
	  	$(".correct").attr("style","font-weight:bold");
	  	getCorrect ();
	  };
	  
	};

  	function getCorrect () {
		var checked = $(':radio[class="correctAns"]:checked').length;
		$("#correctNumber").html(checked);
		$("#incorrectNumber").html(5 - checked);
	};




	displayTime = setInterval(decrement, 1000);
