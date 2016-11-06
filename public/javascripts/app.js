var myApp = angular.module('myApp', [
	'ngRoute',
	'eventsControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '/eventlist.html',
		controller: 'ListController'
	}).
	when('/:itemId', {
		templateUrl: '/eventdetails.html',
		controller: 'DetailsController'
	});
}]);
