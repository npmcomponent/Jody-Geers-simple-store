/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/

function Cars(args) {
    this.meta = {
        storeName: 'Cars',
        storeLocation: 'server'
    };
    this.id = (args)? args.id : undefined;
    this.year = (args)? args.year : undefined;
    this.make = (args)? args.make : undefined;
    this.model = (args)? args.model : undefined;
};

module.exports = Cars;