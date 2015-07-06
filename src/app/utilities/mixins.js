var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    _ = require('lodash');

var Auth = {
  isLoggedIn() {
    return window.localStorage.getItem('isLoggedIn');
  }
};

var Emitter = function() {
  var emitter = new EventEmitter;
  return {
    emit: emitter.emit,
    on: emitter.on
  };
}();

// Emitter.prototype = EventEmitter.prototype;


module.exports = {
  Auth: Auth,
  Emitter: Emitter
}
