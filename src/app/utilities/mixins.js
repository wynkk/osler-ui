var Auth = {
  isLoggedIn() {
    return window.localStorage.getItem('isLoggedIn');
  }
}

module.exports = {
  Auth: Auth
}
