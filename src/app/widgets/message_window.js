var React = require('react'),
    User = require('../services/user'),
    mixins = require('../utilities/mixins'),
    DecisionLoop = require('../utilities/decision_loop'),
    Message = require('../widgets/message'),
    MessageBox = require('../widgets/message_box'),
    Bootstrap = require('react-bootstrap'),
    ListGroup = Bootstrap.ListGroup;

var MessageWindow = React.createClass({
  mixins: [ mixins.Emitter ],
  getInitialState() {
    return {
      messages: [],
      text_value: ''
    }
  },
  componentWillMount: function() {
    var noop = function() {}
    this.props.register = this.props.register || noop;
    this.props.register(this);  // Hook up the widget.
  },
  componentDidMount() {
    var self = this;
    var user = User.load();
    this.loop = new DecisionLoop(self);
  },
  addMessage: function(message) {
    this.setState({messages: this.state.messages.concat([message])});
  },
  handleSubmit(evt, messageBoxWidget) {
    var self = this;
    var message = {
      text: messageBoxWidget.refs.text.getValue(),
      author: 'You'
    };
    evt.preventDefault();
    messageBoxWidget.setState({value: ''});
    this.loop.push(message.text);
  },
  render() {
    var createItem = function(message, idx) {
      return <Message key={idx} author={message.author} text={message.text} />
    }
    var borderStyle = {
      border: '1px solid'
    };
    return (
      <div style={borderStyle}>
        <ListGroup>
        { this.state.messages.map(createItem) }
        </ListGroup>
        {!this.props.hideBox ? <MessageBox onSubmit={this.handleSubmit} /> : ""}
      </div>
    )
  }
});

module.exports = MessageWindow;
