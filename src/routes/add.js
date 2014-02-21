var data = require("../data.json");

exports.view = function(req, res) {
	res.render('add');
}

exports.addFood = function(req, res) {

	var name = req.query.name;
	var des = req.query.description;
	var imageURL = req.query.image;
	var recipe = req.query.recipe;
	var tag = req.query.tag;

	var newFood = {
		"username": "anonymous",
		"name": name,
		"description": des,
		"imageURL": imageURL,
		"recipe": recipe,
		"tags": tag,
		"likes": 0
	}

	data["allFoods"].push(newFood);
	res.render('add');   
};

exports.addComments = function(req, res) {
	var comment = req.query.comments;
	var foodID = req.query.id;

	var newComment = {
		"username": "leahkim",
		"comment": comment
	}

	data["allFoods"][foodID - 1]["comments"].push(newComment);
	res.render('index', data);   
};