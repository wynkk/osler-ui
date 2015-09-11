(function () {
  'use strict';
  
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
        selectedMode: false,
        isChat: false,
        isVoice: false
      };
    },
    componentDidMount() {
      if (!this.isLoggedIn()) {
        this.transitionTo('login');
      }
    },
    chooseMode(evt, chooseModeWidget) {
      var mode = evt.target.getAttribute('data-tag'); // Component to render next.
      this.setState({selectedMode: true});
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
            { !this.state.selectedMode ? <ChooseMode callback={this.chooseMode} /> : null }
            { this.state.isChat ? <Chat /> : null }
            { this.state.isVoice ? <Voice /> : null }
          </div>
        </div>
      )
    }
  });

}());