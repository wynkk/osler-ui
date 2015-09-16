
var Auth = {
  isLoggedIn() {
    return window.localStorage.getItem('isLoggedIn');
  }
};



// Emitter.prototype = EventEmitter.prototype;


module.exports = {
  Auth: Auth
}
