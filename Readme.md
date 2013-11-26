
# simple-store

  Cute ikkle client-side store i like to use.

## Installation

  Install with [component(1)](http://component.io):

    $ component install Jody-Geers/simple-store

## API

	// provider on store
	store.Cars.get(null, function(cars) {
	});
	
	// model on store
    var car = new store.Cars({
	  id: 30,
	  year: '2020',
	  make: 'yippie',
	  model: 'kayay'
	});
	
	// provider on obj
	car.save(null, function(err, res) {
		if (err) {
			// Who wants some?
			return;
		}
		// Groovy!
	});
	
	// extend for context
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


## License

  MIT
