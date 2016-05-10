angular.module('App', [])

.controller('AppCtrl', ['$scope', function($scope) {
	var weekMS = 7 * 1000 * 60 * 60 * 24;
	$scope.day = new Date();

	$scope.up = function () {
		$scope.day = new Date(+$scope.day + weekMS);
	}

	$scope.down = function () {
		$scope.day = new Date(+$scope.day - weekMS);
	}
}])

.directive("weekPicker", function() {
	return {
		transclude: true,
		restrict: 'E',
		templateUrl : "views/week-picker.html"
	};
});