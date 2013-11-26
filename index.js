/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/

var Store = require('./_store/Store.js')
  , Model = require('./models/Model.js')
  , Provider = require('./provider/Provider.js')
  ;

// visible API - Functionality
function createStore (args) {
  var models = (args)?  args.models : Model;
  var provider = (args)?  args.provider : Provider;

  return new Store({ models: models, provider: provider });
};

module.exports = createStore();