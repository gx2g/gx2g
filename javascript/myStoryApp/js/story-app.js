// JavaScript Document
 
window.onload = function(){ 

	$('pre code').each(function(i, block) {
    	hljs.highlightBlock(block);
    });

	// my 1st function hides button shows other div
	startQuestions = function(){
		$('#formBtn').addClass('hidden');
		$('#form1').removeClass('hidden');
	};

	// 2nd function hides field container removes response hidden
	_firstForm = function(){
		$('#form1_response').removeClass('hidden');
		$('#form1').addClass('hidden');

		// create a var = to id name and grab value
		var _name1 = document.getElementById('f_name_input').value;
		// find id and print value plus add message
		document.getElementById('fName').innerHTML = "Welcome " + '<b>' + _name1 + '</b>' + " tell us your story?";
		// find id and put string inside
		document.getElementById('tag_line').innerHTML = "Capture data and store it to a variable. print it on the page telling a story using JavaScript example by Robert Resendez.";
		$('#start_story_link').removeClass('hidden');
	};

	startStory = function(){
		$('#tag_line').addClass('hidden');
		$('#form2').removeClass('hidden');
		$('#start_story_link').addClass('hidden');
		$('#start_story_div').removeClass('hidden');

		_name1 = document.getElementById('f_name_input').value;
		var fav_pro_case = _name1.toUpperCase();
		var end_1st_sentence = " who had concoured the land in search for a new talent to join his relentless campaign to distroy the "
		document.getElementById('start_story_div').innerHTML = "Once a apon a time in a far far away land there was a hero by the name of " + '<b>' + fav_pro_case + '</b>' + end_1st_sentence;
	};

	_chooseSide = function(){
		var _chooseSides = document.querySelector('input[name="rebellion"]:checked').value;
		alert(_chooseSides);
	};

};