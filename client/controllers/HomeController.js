var theStore = angular.module('theStore');

theStore.controller('HomeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('homeController loaded...');

}]);


// $http get RESTapi - $location configures redirection - $routeParams gets values from forms
