var data = require("../data.json");

exports.addFriend = function(req, res) { 

	var name = req.query.name;
	var des = req.query.description;

	var newFriend = 

	{
			"name": name,
			"description": des,
			"imageURL": "http://lorempixel.com/400/400/people"			
		

	}
	data["friends"].push(newFriend);	

	res.render('add');   

 };
