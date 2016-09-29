var theStore = angular.module('theStore',['ngRoute']);

theStore.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/addOrder', {
		controller:'OrderController',
		templateUrl: 'views/add_order.html'
	})
	.when('/yourOrder',{
		controller:'OrderController',
		templateUrl: 'views/view_order.html'
	})
	.when('/orders/edit/:id',{
		controller:'OrderController',
		templateUrl: 'views/edit_order.html'
	})
	/*.when('/books/add',{
		controller:'OrderController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id',{
		controller:'OrderController',
		templateUrl: 'views/edit_book.html'
	})*/
	.otherwise({
		redirectTo: '/'
	});
});
