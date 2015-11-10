//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var MenuSchema = new mongoose.Schema({
	name: String,
	created_date: {type: Date, default: new Date}
});

var Menu = mongoose.model('Menu', MenuSchema);
//ends model
