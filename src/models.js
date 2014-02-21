
var Mongoose = require('mongoose');

var FoodSchema = new Mongoose.Schema({
	allFoods: [{
		food_name: String,
		description: String,
		imageURL: String,
		recipe: String,
		tags: String,
		likes: Number,
		comments: [{
			username: String,
			comment: String
		}]
	}]
});

exports.Food = Mongoose.model('Food', FoodSchema);


