var React = require('react'),
    MessageWindow = require('../widgets/message_window');

var Chat = React.createClass({
  render() {
    return (
      <div>
        <h1>Chat me </h1>
        <MessageWindow />
      </div>
    )
  }
});

module.exports = Chat
