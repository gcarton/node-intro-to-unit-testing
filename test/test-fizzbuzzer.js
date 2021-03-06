const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

	it('should return "fizz-buzz" for multiples of 15', function(){
			[15,30,45].forEach(function(input){
				fizzBuzzer(input).should.equal('fizz-buzz');
			});
	});	

	it('should return "buzz" for multiples of 5', function(){
			[5,10,20].forEach(function(input){
				fizzBuzzer(input).should.equal('buzz');
			});
	});

	it('should return "fizz" for multiples of 3',function(){
			[3,6,9].forEach(function(input){
				fizzBuzzer(input).should.equal('fizz');
			});
	});

	it('should return "num" if not multiple of 3 or 5',function(){
			[1,2,4,7].forEach(function(input){
				fizzBuzzer(input).should.equal(input);
			});
	});

	it('should return "error" if arg is not number',function(){
			[true, false, banana].forEach(function(input){
				fizzBuzzer(input).should.throw(Error);
			});
	});
});