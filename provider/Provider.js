/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/

// here we define client / server storage - note: storeLocation in obj meta.
// just use an ajax request to get data from server. if needed of course. 
// args will have object filteres later used getting setting data

function get(args, cb) {
  var Store = require('../index.js');
  var returnModelResultSet = [];
  var rawResultSet = require('./_dummy-data/' + this.name);

  for (var key in rawResultSet) {
    returnModelResultSet.push(
      new Store[this.name](rawResultSet[key])
    );
  }

  if (cb)
    cb(returnModelResultSet);
  else
    return returnModelResultSet;
};

function save(args, cb) {
  // TODO: update if (id)? / else save new
  debugger;
};

function del(args, cb) {
  // TODO: delete
  debugger;
};

module.exports.get = get;
module.exports.save = save;
module.exports.del = del;