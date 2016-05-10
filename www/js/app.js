angular.module('App', [])

.controller('AppCtrl', ['$scope', function($scope) {
	var weekMS = 7 * 1000 * 60 * 60 * 24;
	$scope.day = new Date();

	$scope.up = function () {
		$scope.day = $scope.day + weekMS;
		return $scope.day;
	}

	$scope.down = function () {
		$scope.day = $scope.day - weekMS;
		return $scope.day;
	}
}])

.directive("weekPicker", function() {
	return {
		restrict: 'E',
		template : "<ul><li ng-click='down()'>&lt;</li><li>Week {{day.getWeek()}}, {{day.getFullYear()}}</li><li ng-click='up()'>&gt;</li></ul>"
	};
});