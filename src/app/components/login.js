var React = require('react'),
    User = require('../services/user');

/** UI Components */
var Bootstrap = require('react-bootstrap'),
    Navigation = require('react-router').Navigation,
    Input = Bootstrap.Input,
    Well = Bootstrap.Well,
    Button = Bootstrap.Button;

module.exports = React.createClass({
  mixins: [Navigation],
  login() {
    var self = this;
    var email = this.refs.email.getValue(),
        password = this.refs.password.getValue();

    User.login({id: email, password: password})
        .then(function(response) {
          var resp = response.data;
          if (resp.success == false) {
            return alert('Invalid username and/or password.');
          }
          var user = new User(resp.data);
          window.localStorage.setItem('user', user.to_json())
          window.localStorage.setItem('isLoggedIn', true);
          window.localStorage.setItem('token', resp.token);
          self.transitionTo('root');
          alert("Welcome Back!");
        });
  },
  render() {
    return (
      <div className="row">
        <Well>
          <form>
            <Input placeholder="Email" type="text" ref="email" />
            <Input placeholder="Password" type="password" ref="password" />
            <Button bsStyle='success' bsSize='large' onClick={this.login} active>Login</Button>
          </form>
        </Well>
      </div>
    )
  }
});
