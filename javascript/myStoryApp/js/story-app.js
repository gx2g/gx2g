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
		var begin_sentence = "Once a apon a time in a land far far away there lived a hero by the name of ";
		var end_1st_sentence = " who had conquered the land in search for a new talent to join his relentless campaign to destory the ";
		document.getElementById('start_story_div').innerHTML = begin_sentence + '<b>' + fav_pro_case + '</b>' + end_1st_sentence;
	};

	 _chooseSide = function(){

	        $("input[name=darkSide]").change(function(){          
	        var choose_sentence = "You have chosen the ";

	            if ($(this).val() == "republic") {
		            document.getElementById("start_story_div").innerHTML = choose_sentence + " to train with the Jedi Rebellion!";
	            }
	            else {
	    	        document.getElementById("start_story_div").innerHTML =  choose_sentence + " Join the Dark Side of the Force!";
	            }                                                            
	       });
	};
};


$().ready(function() {
    // validate the form when it is submitted
    var validator = $("#first_form").validate({
        errorPlacement: function(error, element) {
            // Append error within linked label
            $( element )
                .closest( "form" )
                    .find( "label[for='" + element.attr( "id" ) + "']" )
                        .append( error );
        },
        errorElement: "span",
        messages: {
            user: {
                required: " (required)",
                minlength: "(4 characters or more)"
            },
        }
    });
});