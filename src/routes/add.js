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
		"name": name,
		"description": des,
		"imageURL": imageURL,
		"recipe": recipe,
		"tags": tag		
	}

	data["allFoods"].push(newFood);
	res.render('add');   
};
