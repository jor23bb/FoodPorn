
var Mongoose = require('mongoose');


var FoodSchema = new Mongoose.Schema({
	allFoods: [{
		username: String,
		name: String,
		description: String,
		imageURL: String,
		recipe: String,
		tags: String,
		likes: Number,
		comments: [{
			username: String,
			comment: String
		}]
	}],
	Likes: [{
		username: String,
		liked: [{
			id: ObjectId
		}]
	}]
});

exports.Food = Mongoose.model('Food', FoodSchema);


