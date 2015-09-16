var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    Input = Bootstrap.Input;

var MessageBox = React.createClass({
  getInitialState() {
    return {
      value: ''
    }
  },
  handleForm(evt) {
    this.props.onSubmit(evt, this);
  },
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <Input type='text' ref="text" bsSize="large" defaultValue={this.props.value} placeholder='Enter your message...' />
      </form>
    )
  }
});

module.exports = MessageBox;
