var React = require('react'),
    Message = require('../widgets/message'),
    MessageBox = require('../widgets/message_box'),
    Bootstrap = require('react-bootstrap'),
    ListGroup = Bootstrap.ListGroup;

var MessageWindow = React.createClass({
  getInitialState() {
    return {
      messages: [
        { author: 'Hamza Waqas', text: 'Hello Osler!'},
        { author: 'Osler', text: 'Hello, Hamza'},
        { author: 'Hamza Waqas', text: 'How are you?'},
        { author: 'Osler', text: 'Doing well, thank you sir!'}
      ],
      text_value: ''
    }
  },
  handleSubmit(evt, messageBoxWidget) {
    var message = {
      text: messageBoxWidget.refs.text.getValue(),
      author: 'Hamza Waqas'
    };

    this.setState({messages: this.state.messages.concat([message])});
    evt.preventDefault();
  },
  render() {
    var createItem = function(message, idx) {
      return <Message key={idx} author={message.author} text={message.text} />
    }
    return (
      <div>
        <ListGroup>
        { this.state.messages.map(createItem) }
        </ListGroup>
        <MessageBox value={this.state.text_value} onSubmit={this.handleSubmit} />
      </div>
    )
  }
});

module.exports = MessageWindow;
