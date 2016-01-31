// JavaScript Document


window.onload = function(){ 

	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
    });

	startQuestions = function(){
		$('#formBtn').addClass('hidden');
		$('#form1').removeClass('hidden');
	};

	_firstForm = function(){
		$('#form1_response').removeClass('hidden');
		$('#form1').addClass('hidden');
		var _name1 = document.getElementById('f_name_input').value;
		document.getElementById('fName').innerHTML = "Welcome " + '<b>' + _name1 + '</b>' + " tell us your story?";
	};


	// startQuestions = function(){
	// 	firstName = prompt("What is your nick name?");
	// 	document.getElementById("fName").innerHTML = "Welcome " + '<b>' + firstName + '</b>' + " tell us your story?";
	// 	jQuery('#start_questions').addClass('hidden');
	// 	$("#tag_line").removeClass("hidden");
	// 	document.getElementById("tag_line").innerHTML = "Capture data and store it to a variable. print it on the page telling a story using JavaScript example by Robert Resendez.";
	// };

};
    // Prompt Boxes to ask questions
	// var firstName = prompt("What is your Name?");
	// var favProgram = prompt("What\s your favorite coding program?");

	// // Variables that store the data and show a little concatenation :)
	// var fav_pro_case = '<b>' + favProgram.toUpperCase() + '</b>';
	// var _firstS = " in a far far away land there was a person by the name of  " + '<b>' + firstName + '</b>' + " who was viewing my javascript work,";
	// var _secS = " and it so happens that " + '<b>' + firstName + '</b>' + " also happens to love " + fav_pro_case;
	// var story_bg_color = "#b18150";

	// // setTimeout function to make the first prompt box delay
	// setTimeout(function() {
	// 	document.getElementById("fName").innerHTML = "Welcome " + '<b>' + firstName + '</b>' + " tell us your story?";
	// 	$("#tag_line").removeClass("hidden");
	// 	$("#start_story_link").removeClass("hidden");
	// 	document.getElementById("tag_line").innerHTML = "Capture data and store it to a variable. print it on the page telling a story using JavaScript example by Robert Resendez.";
	// },1250);

 	//  var startQuestions = function(){
	// 	firstName = prompt("What is your nick name?");
	// 	document.getElementById("print_questions").innerHTML = "Welcome " + '<b>' + firstName + '</b>' + " tell us your story?";
	// };

	// var startStory = function(){
	// 	document.getElementById("start_story_div").innerHTML = "Once apon a time " + _firstS + _secS;
	// 	$("#start_story_div").css("background-color", story_bg_color);
	// };