var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    Button = Bootstrap.Button;

module.exports = React.createClass({
  chooseMode(evt) {
    this.props.callback(evt, this);
  },
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <div className='well' style={wellStyles}>
        <Button data-tag="chat" onClick={this.chooseMode} bsSize='large' block>Chat with Osler</Button>
        <Button data-tag="voice" onClick={this.chooseMode} bsStyle="danger" bsSize='large' block>Talk with Osler</Button>
      </div>
    )
  }
})
