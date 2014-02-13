'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".foods").click(likeFood);
}

function likeFood(e) {
	e.preventDefault();
	var foodID = $(this).closest(".foods").attr("id");
	var foodName = $(this).find("h3").text();
	var foodDesc = $(this).find("p").text();
	var foodImg = $('.img[alt="Food Photos"]').attr('src');

	var newFavFood = {
		"name": foodName,
		"description": foodDesc,
		"imageURL": foodImg
	}

	// just need to push this to the myFavs data through javascript... but how?
}