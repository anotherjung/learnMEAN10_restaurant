//MVC1a for routes
var mongoose = require('mongoose');
// var Answer = mongoose.model('Answer');
var Menu = mongoose.model('Menu');
var Order = mongoose.model('Order');

//MVC2h moved to model

//MVC2c for controller
var menus  = require('../controllers/menus.js');
var orders = require('../controllers/orders.js');

//start MVC1d export
module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		//console.log('home page loaded');
	})

	//route to render menu
	app.get('/getMenus', function (req, res) {
		//test http://localhost:8080/getmenu
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		menus.getmenus(req,res)
		//console.log('rou getmenu', req.body)
		//products.getMenu(req,res)
	})

	//route to add menu
	app.post('/addMenu', function (req,res) {
		//console.log('rou addmenu', req.body) 
		menus.addmenu(req,res)
	})

	//route to add menu
	app.post('/deleteMenu', function (req,res) {
		//console.log('rou deletemenu', req.body) 
		menus.deletemenu(req,res)
	})

	//route to like menu
	app.post('/likeMenu', function (req, res) {
		menus.likemenu(req,res)
	})

	//route to display one menu
	app.get('/getThisMenu', function (req, res) {
		menus.getthismenu(req,res)
	})

	app.post('/editThisMenu', function (req, res) {
		menus.editthismenu(req,res)
	})

	app.get('/getOrders', function (req, res) {
		orders.getorders(req, res)
	})

	app.post('/addOrder', function (req, res) {
		orders.addorder(req, res)
	})

	app.post('/deleteOrder', function (req, res) {
		orders.deleteorder(req, res)
	})

	app.get('/getThisOrder', function (req, res) {
		orders.getthisorder(req, res)
	})

	app.post('/editThisOrder', function (req, res) {
		orders.editthisorder(req, res)
	})

	//ends routes

}//ends MVC export
