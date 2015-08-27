var React = require('react'),
    babble = require('babble'),
    User = require('../services/user'),
    mixins = require('../utilities/mixins'),
    DecisionLoop = require('../utilities/decision_loop'),
    Message = require('../widgets/message'),
    MessageBox = require('../widgets/message_box'),
    Bootstrap = require('react-bootstrap'),
    ListGroup = Bootstrap.ListGroup;

  var pubnub = babble.messagebus.pubnub({
    publish_key: 'pub-c-5c5c08f6-27a5-4007-88a1-a1f750ec42ae',    // REPLACE THIS WITH YOUR PUBNUB PUBLISH KEY
    subscribe_key: 'sub-c-30245bc6-18c6-11e5-9a16-0619f8945a4f'   // REPLACE THIS WITH YOUR PUBNUB SUBSCRIBE KEY
  });

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
    var user = User.load(),
        listener = null;
    this.listener = listener = babble.babbler(user.id);
    this.listener.connect(pubnub);
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
        {!this.props.hideBox ? <MessageBox value={this.state.text_value} onSubmit={this.handleSubmit} /> : ""}
      </div>
    )
  }
});

module.exports = MessageWindow;
