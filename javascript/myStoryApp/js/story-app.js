// JavaScript Document
console.log("Begging of Application");
var firstName = prompt("What is your Name?");
document.getElementById("fName").innerHTML = "Welcome " + '<b>' + firstName + '</b>' + " Tell us your story?";
document.getElementById("tag_line").innerHTML = "Capture data and store it to a variable. print it on the page telling a story.";
var _firstS = " in a far far away land there was a person by the name of  " + '<b>' + firstName + '</b>' + " who was viewing my javascript work,";
document.getElementById("_first").innerHTML = "Once apon a time " + _firstS;

