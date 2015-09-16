var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    ListGroupItem = Bootstrap.ListGroupItem;

var Message = React.createClass({

  render() {
    return (
      <ListGroupItem header={this.props.author}>{this.props.text}</ListGroupItem>
    )
  }
});

module.exports = Message;
