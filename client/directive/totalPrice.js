
//var theStore = angular.module("theStore", []);
theStore.directive("w3TestDirective", function() {
    return {
        template : "<h1>{{order.quantity}}</h1>"
    };
});
