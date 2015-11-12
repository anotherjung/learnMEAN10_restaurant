//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})

	.when('/addMenu',{
		templateUrl: 'partials/addMenu.html'
	})

	.when('/displayMenu',{
		templateUrl: 'partials/displayMenu.html'
	})

	.when('/thisMenu/:id',{
		templateUrl: 'partials/thisMenu.html'
	})

	.when('/addOrder',{
		templateUrl: 'partials/addOrder.html'
	})

	.when('/thisOrder/:id',{
		templateUrl: 'partials/thisOrder.html'
	})




	// })
	// .otherwise({
	// 	redirectTo: '/'
	
})//ends config

