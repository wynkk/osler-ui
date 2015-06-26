
var $ = require('jquery'),
    Promise = require('es6-promise').Promise,
    Model = require('../utilities/model');

export class User {
  constructor(info) {
    this.$url = '/users';

    var self = this;
    info = info || [];
    Object.keys(info).forEach(function(key) {
      self[key] = info[key];
    });
  }

  save() {
    var user = this;
    return new Promise(function(resolve, reject) {
      $.post('http://localhost:3000' + user.$url + '/signup', user.serialize(), function(data) {
        return resolve(data);
      });
    });
  }

  destory() {

  }

  get() {

  }

  all() {

  }

  serialize() {
    var map = {};
    var self = this;
    Object.keys(self).forEach(function(key) {
      if (key.charAt(0) != "$") {
        map[key] = self[key];
      }
    });
    return map;
  }
}

module.exports = User

// module.exports = React.createClass({
//   constructor() {
//
//   },
//   save() {
//
//   },
//   destory() {
//
//   },
//   get() {
//
//   },
//   all() {
//
//   }
// });
