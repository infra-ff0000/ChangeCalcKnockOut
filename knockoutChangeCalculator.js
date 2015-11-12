function CalculatorViewModel(){
	var self = this;

	self.moneyDue = ko.observable();
	self.moneyReceived = ko.observable();
	self.change = ko.computed(function(){
		return self.moneyReceived() - self.moneyDue();
	});
	self.dollars = ko.computed(function()
	{
		return self.change() % 1.00;
	});
	self.quarters = ko.computed(function(){
		return self.change() %.50/.25;
	});
	self.dimes = ko.computed(function(){
		return self.change() %.25/.10;
	});
	self.nickels = ko.computed(function(){
		return self.change() %.10/.05;
	});
	self.pennies = ko.computed(function(){
		return self.change() %.05/.01;
	});

};

ko.applyBindings(new CalculatorViewModel());