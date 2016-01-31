// JavaScript Document
console.log("Begging of Application");

var firstName = prompt("What is your Name?");
var favProgram = prompt("What\s your favorite coding program?");
var fav_pro_case = '<b>' + favProgram.toUpperCase() + '</b>';
var _firstS = " in a far far away land there was a person by the name of  " + '<b>' + firstName + '</b>' + " who was viewing my javascript work,";
var _secS = " and it so happens that " + '<b>' + firstName + '</b>' + " also happens to love " + fav_pro_case;


// setTimeout function to make the first prompt box delay so the page loads
setTimeout(function() {

	// var firstName = prompt("What is your Name?");
	document.getElementById("fName").innerHTML = "Welcome " + '<b>' + firstName + '</b>' + " tell us your story?";
	$("#tag_line").removeClass("hidden");
	$("#start_story_link").removeClass("hidden");
	document.getElementById("tag_line").innerHTML = "Capture data and store it to a variable. print it on the page telling a story.";

},1250);

var startStory = function(){
	document.getElementById("start_story_div").innerHTML = "Once apon a time " + _firstS + _secS;
	$("#start_story_div").css("background-color", "gray");
};