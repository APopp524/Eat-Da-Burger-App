// Import the ORM into burger.js
var orm = require('../config/orm.js');

// Create burger object
var burger = {
    //selects all burger objects
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // inserts burger object
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  //Updates burger object
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;