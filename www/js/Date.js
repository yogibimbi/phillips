// some utility functions for Date calculations, shamelessly grafted onto Date.prototype

Date.prototype.getWeek = function (weekStartsMonday) {
	var firstDay = new Date(this.getFullYear(), 0, 1);	// firstDay does not have a timezone, [this] does
	// to normalize, add the weekday of the first day of the year, so that the last day of the week comes to 7
	var normalizedDays = this.days() + firstDay.weekDay(weekStartsMonday);
	return Math.ceil(normalizedDays / 7);
}

Date.prototype.weekDay = function (weekStartsMonday) {
	if (weekStartsMonday) {
		return this.getDay() ? this.getDay() - 1 : 6;	// make Sunday 6, Monday 1
	}
	return this.getDay();
}

Date.prototype.days = function () {	// calculates the days past since the first day of the year
	var firstDay = new Date(this.getFullYear(), 0, 1);	// firstDay does not have a timezone, [this] does
	// difference of this.time and first of year, plus timezone hours, plus one millisecond, because 01/01 00:00:00,000 is 0, whereas >= 01/01 00:00:00,0001 is 1
	return Math.ceil((+this - (+firstDay) - this.timezone() * 1000 * 60 + 1) / (1000 * 60 * 60 * 24));		
}

Date.prototype.timezone = function () {
	var offsets = /GMT(.)(..)(..)/.exec("" + this);
	return parseFloat(offsets[1] + offsets[2] + "." + (parseInt(offsets[3]) / 60));
}