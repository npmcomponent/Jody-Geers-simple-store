/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/

var store = require('../index')
  , assert = require("assert")
  ;

describe('Store(<provider, models>) - init', function () {

  it('should return a Store initialised with model defs', function () {
	assert(typeof store == 'object');
	assert(typeof store.Cars == 'function');
	assert(typeof store.Cars.get == 'function');
  });
  
});

describe('Store has provider methods', function () {

  it('should return model objects populated with data from provider', function () {
  	store.Cars.get(null, function(cars) {
      for (var key in cars) {
	    assert(typeof cars[key] == 'object');
		assert(typeof cars[key].id);
		assert(typeof cars[key].year);
		assert(typeof cars[key].make);
		assert(typeof cars[key].model);
	  }
	});
  });
  
});

describe('Store creates model obj', function () {
  
  it('should return an initialised model obj from Store', function () {
    var car = new store.Cars({
	  id: 30,
	  year: '2020',
	  make: 'beautifulcar',
	  model: 'comegetsome'
	});
	
	assert(typeof car == 'object');
	assert(car.id == 30);
	assert(car.year == '2020');
	assert(car.make == 'beautifulcar');
	assert(car.model == 'comegetsome');
  });
  
});

describe('Model obj has provider methods', function () {
  
  it('should return an initialised model obj from Store', function () {
    var car = new store.Cars({
	  id: 30,
	  year: '2020',
	  make: 'beautifulcar',
	  model: 'comegetsome'
	});
	
	assert(typeof car == 'object');
	assert(typeof car.get == 'function');
	assert(typeof car.save == 'function');
	assert(typeof car.del == 'function');
  });
  
});

describe('Model obj as parent - create context obj', function () {

  it('should extend parent and make a context baby', function () {
    function CtxCar(args) {
      this.uiId = args.uiId || undefined,
      store.Cars.call(this, args);
    }
    CtxCar.prototype = Object.create(store.Cars.prototype);
    CtxCar.prototype.constructor = CtxCar;
	
    var car = new CtxCar({
	  id: 30,
	  year: '2020',
	  make: 'beautifulcar',
	  model: 'comegetsome',
	  uiId: 42
	});
	
	assert(typeof car == 'object');
	assert(typeof car.get == 'function');
	assert(typeof car.save == 'function');
	assert(typeof car.del == 'function');
	assert(car.id == 30);
	assert(car.year == '2020');
	assert(car.make == 'beautifulcar');
	assert(car.model == 'comegetsome');
	assert(car.uiId == 42);
  });

});
