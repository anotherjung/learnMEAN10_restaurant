myApp.controller('thisOrderController', function ($scope, $routeParams, orderFactory) {
	var thisOrder = $routeParams.id;
	console.log($routeParams.id);

	orderFactory.getThisOrder(thisOrder, function (data) {
		$scope.oneOrder = data;
	})

	$scope.editThisOrder  = function(oneOrder) {
		console.log('con editOrder', oneOrder);
		orderFactory.editThisOrder(oneOrder);
	}


//end controller
}); 