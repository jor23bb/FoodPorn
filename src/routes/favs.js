var data = require("../data.json");

exports.view = function(req, res) {
	res.render('myFavs', data);   
};

exports.likedFoodInfo = function(req, res) {
	var foodID = req.params.id;
	foodID = parseInt(foodID);
	var likedFood = data["allFoods"][0];
	res.json(likedFood);
};


