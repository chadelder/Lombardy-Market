var theStore = angular.module('theStore');

theStore.controller('OrderController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('OrderController loaded...');

	// getOrders
	$scope.getOrders = function(){
		$http.get('/api/orders').success(function(response){
			$scope.orders = response;
		})
};

	// Price Order
	$scope.totalPrice = function(){

		//q = $scope.orders;
		//console.log(q);
		total = 2;
		price = 5;

		for (count=0; count<$scope.orders.length; count++) {
			total = total + $scope.orders[count].quantity;
			console.log($scope.orders[count].quantity);
			console.log(total);
		}
			totalCost = price * total;
			//console.log($scope.order);
			return totalCost;
		}

	// get Order by ID
	$scope.getOrder = function(){
		var id = $routeParams.id;
		$http.get('/api/orders/'+id).success(function(response){
			$scope.order = response;
		});
	};

	// add Order
	$scope.addOrder = function(){
		console.log($scope.order);
		$http.post('/api/orders/', $scope.order).success(function(response){
			window.location.href='#/addOrder';
		});
	}

	// Only three orders
	$scope.count = 0;
		$scope.counter = function( x ){
				$scope.count += x;
		}
		$scope.limit = function( y ){
		return ( $scope.count == y ) ? true : false;
		}


	// Update Order
	$scope.updateOrder = function(){
		var id = $routeParams.id;
		$http.put('/api/orders/'+id, $scope.order).success(function(response){
			window.location.href='#/yourOrder';
		});
	}

	// Remove Order
	$scope.removeOrder = function(id){
		$http.delete('/api/orders/'+id).success(function(response){
			window.location.href='#/addOrder';
		});
	}
}]);
