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

## Note

In the provider, I’ve used a local file for dummy data, but you can get from local / session storage by flipping that switch in the objects meta data found in its model definition.

In the provider, an ajax component (superagents pretty cool) can be used should you require data from server, works nice for conceptual REST services.

Should you go down this route, just note you need to extend the Provider.js. 

Finally you can abstract the model and provider into their own components, and change your require paths in simple-stores index.js, even add a little logic if you want to (you can leave your friends behind), however, I’ve kept it simples here.
  
## License

  MIT
