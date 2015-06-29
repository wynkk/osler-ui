var React = require('react'),
    Navigation = require('react-router').Navigation,
    Bootstrap = require('react-bootstrap'),
    Mixin = require('../utilities/mixins');

// WIDGETS
var ChooseMode = require('../widgets/choose_mode'),
    Chat = require('../widgets/chat'),
    Voice = require('../widgets/voice');


module.exports = React.createClass({
  mixins: [Mixin.Auth, Navigation],
  getInitialState() {
    return {
      selected_mode: false,
      isChat: false,
      isVoice: false
    }
  },
  componentDidMount() {
    if (!this.isLoggedIn()) {
      this.transitionTo('login');
    }
  },
  chooseMode(evt, chooseModeWidget) {
    var mode = evt.target.getAttribute('data-tag'); // Component to render next.
    this.setState({selected_mode: true});
    if (mode == 'chat') {
      this.setState({isChat: true});
    } else {
      this.setState({isVoice: true});
    }
  },
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          { !this.state.selected_mode ? <ChooseMode callback={this.chooseMode} /> : null }
          { this.state.isChat ? <Chat /> : null }
          { this.state.isVoice ? <Voice /> : null }
        </div>
      </div>
    )
  }
});
