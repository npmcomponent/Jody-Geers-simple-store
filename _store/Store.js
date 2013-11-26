/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/

function Store(args) {
  var models = args.models;
  var provider = args.provider;
    
  // attach models to store then attach provider to Store and Instance
  for (var key in models) {
    var _def = new models[key]();
	
    for (var kay in provider) {
      models[key]['prototype'][kay] = provider[kay];
        models[key][kay] = provider[kay];
    }
        
    this[_def.meta.storeName] = models[key];
  }

};

module.exports = Store;
