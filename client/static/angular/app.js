//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/dashboard.html'
	})

	// })
	// .otherwise({
	// 	redirectTo: '/'
	
})//ends config

