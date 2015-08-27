var React = require('react'),
    MessageWindow = require('../widgets/message_window'),
    Bootstrap = require('react-bootstrap'),
    Mumble = require('mumble-js');

var Voice = React.createClass({
  componentWillMount() {
    this.mumble = new Mumble({
      language: 'en-US',
      callbacks: {
        start: function () {
          console.log('>>> starting..');
        }
      },
      debug: true, // set to true to get some detailed information about what's going on
    });
    
  },
  _start: function() {
    this.mumble.start();
  },
  _stop: function() {
    this.mumble.stop();
  },
  registerar: function(widget) {
    var hiCommand = require('../commands/hi');
    hiCommand.action = hiCommand.action(widget);
    this.mumble.addCommand('global', '(.*?)', function () {
      console.log(arguments);
    })
    // this.mumble.addCommand(hiCommand.name, hiCommand.command, hiCommand.action);
  },
  render() {
    return (
      <div>
        <h3>Speak with Osler </h3>
        <Bootstrap.Button onClick={this._start} bsSize="large" bsStyle="danger">Start</Bootstrap.Button>
        <Bootstrap.Button bsSize="large">Stop</Bootstrap.Button>
        <MessageWindow hideBox='true' register={this.registerar} />
      </div>
    )
  }
});

module.exports = Voice;
