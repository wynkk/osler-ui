var fs = require('fs');
var $ = require('jquery');

var DecisionLoop = function(widget) {
  var listener = widget.listener;
  this._widget = widget;
  this._listener = widget.listener;

  this.push = function push(text) {
    widget.addMessage({author: 'Hamza Waqas', text: text});
    var url = 'http://localhost:4000/brain/ask/';
    url += encodeURIComponent(text);
    // var _iId = window.sessionStorage.getItem('i_id');
    // if (_iId) {
    //   url += encodeURIComponent(window.sessionStorage.getItem('loop_text'));
    //   url += '?i=' + _iId;
    //   url += '&text=' + text;
    // } else {
    //   url += encodeURIComponent(text);
    // }
    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      success: function(msg) {
        console.log(msg);
        // var answer = response._result;
        // if (answer.id) {
        //   // Save reference for next interaction.
        //   window.sessionStorage.setItem('i_id', answer.id);
        //   if (answer.start) {
        //     // It's just start of the conversation. Cache it!
        //     window.sessionStorage.setItem('loop_text', text);
        //   } else if (answer.end) {
        //     // End up the conversation..
        //     window.sessionStorage.removeItem('i_id');
        //     window.sessionStorage.removeItem('loop_text');
        //   }
        // }
        widget.addMessage({author: 'Osler', text: msg.string || 'n/a'});
        widget.setState({text_value: ''})
      }
    });
  };
};

module.exports = DecisionLoop;
