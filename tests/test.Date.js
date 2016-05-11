describe('Date', function(){
	var D = new Date(2016, 4, 10)

    describe('get week for 10/05/2016', function () {
		it('should have getWeek method defined', function () {
			expect(D.getWeek).toBeDefined();
		});
		it('should have getWeek return 20', function () {
			expect(D.getWeek()).toEqual(20);
		});
		it("week day should be 1 (aka Tuesday)", function () {
			expect(D.weekDay(true)).toEqual(1);
		});
		it("should be day 130 of the year", function () {
			expect(D.days()).toEqual(130);
		});
	}); 
});
