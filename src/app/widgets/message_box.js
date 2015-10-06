var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    Input = Bootstrap.Input;

var MessageBox = React.createClass({
  getInitialState() {
    return {
      value: 'Enter your message.'
    }
  },
  handleForm(evt) {
    this.props.onSubmit(evt, this);
  },
  handleChange: function() {
    this.setState({
      value: this.refs.text.getValue()
    });
  },
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <Input type='text' ref="text" bsSize="large" onChange={this.handleChange} value={this.state.value} placeholder={this.state.value} />
      </form>
    )
  }
});

module.exports = MessageBox;
