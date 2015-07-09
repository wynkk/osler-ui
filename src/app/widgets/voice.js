var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    Mumble = require('mumble-js');

var Voice = React.createClass({
  componentDidMount() {
    this.mumble = new Mumble({
      language: 'en-US',
      debug: true, // set to true to get some detailed information about what's going on

      // define some commands using regex or a simple string for exact matching
      commands: [
        require('../commands/hi'),
        require('../commands/clock')
      ]
    });
  },
  _start: function() {
    this.mumble.start();
  },
  _stop: function() {
    this.mumble.stop();
  },
  render() {
    return (
      <div>
        <h3>Speak with Osler </h3>
        <Bootstrap.Button onClick={this._start} bsSize="large" bsStyle="danger">Start</Bootstrap.Button>
        <Bootstrap.Button bsSize="large">Stop</Bootstrap.Button>
      </div>
    )
  }
});

module.exports = Voice;
