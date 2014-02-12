// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index');
};

exports.view = function(req, res){
  res.render('index', data);
};

// function addMyFavs(name) {
// 	console.log("hi");
// 	var newMyFavs = {
// 		"name": name
// 	};
// 	data["myFavs"].push("newMyFavs");
// 	console.log(data["myFavs"]);
// };
