describe('AppCtrl', function(){
	var scope, dayMem;

	// load the controller's module
	beforeEach(module('App'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('AppCtrl', {$scope: scope});
		dayMem = scope.day;
	}));


	describe('property day', function () {
		it('should have day property defined', function () {
			expect(scope.day).toBeDefined();
		});
		it("should be equal to today's date", function () {
			expect(Math.ceil(+scope.day / 1000)).toEqual(Math.ceil(+(new Date()) / 1000));	//let's put the / 1000 in, otherwise the difference of a couple of lines of code might already make a difference in miliseconds
		});
		it("getWeek should be defined", function () {
			expect(scope.day.getWeek).toBeDefined();
		});
	});
	var miliSecondsInAWeek = 1000 * 60 * 60 * 24 * 7;
	describe('method up', function () {
		it("should increase week by 1", function () {
			scope.up();
			expect(+scope.day - +dayMem).toEqual(miliSecondsInAWeek);
		})
	})
	describe('method down', function () {
		it("should decrease week by 1", function () {
			scope.down();
			expect(+scope.day - +dayMem).toEqual(-miliSecondsInAWeek);
		})
	})


});
