var React = require('react'),
    User = require('../services/user');

/** UI Components */
var Bootstrap = require('react-bootstrap'),
    Input = Bootstrap.Input,
    Well = Bootstrap.Well,
    Button = Bootstrap.Button;

module.exports = React.createClass({
  createAccount() {
    var email = this.refs.email.getValue(),
        password = this.refs.password.getValue();

    var user = new User({email: email, password: password});
    user.save()
        .then(function() {
          alert("You have signed up successfully!");
        });
  },
  render() {
    return (
      <div className="row">
        <Well>
          <form>
            <Input placeholder="Email" type="text" ref="email" />
            <Input placeholder="Password" type="password" ref="password" />
            <Button bsStyle='success' bsSize='large' onClick={this.createAccount} active>Create Account</Button>
          </form>
        </Well>
      </div>
    )
  }
});
