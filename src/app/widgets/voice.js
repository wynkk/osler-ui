var React = require('react'),
    Mumble = require('mumble-js');

var Voice = React.createClass({
  componentDidMount() {
    this.mumble = new Mumble({
      language: 'en-US',
      debug: true, // set to true to get some detailed information about what's going on

      // define some commands using regex or a simple string for exact matching
      commands: [
        require('../commands/hi')
      ]
    });
    this.mumble.start();
  },
  render() {
    return (
      <h1>Speak with Osler </h1>
    )
  }
});

module.exports = Voice;
