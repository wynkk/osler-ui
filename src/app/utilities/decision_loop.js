var fs = require('fs');
var babble = require('babble');
var $ = require('jquery');

var DecisionLoop = function(widget) {
  var listener = widget.listener;
  this._widget = widget;
  this._listener = widget.listener;
  widget.on('push', function() {
    console.log('>> message received...');
  });

  // widget.on('start', function(text) {
  //   widget.addMessage({author: 'Hamza Waqas', text: text});
  //   listener.ask('osler', text)
  //       .decide(function(reply) {
  //         widget.addMessage({author: 'Osler', text: reply});
  //         return reply;
  //       }, {
  //         'hey': babble.tell(function() {
  //           Spawn(function *() {
  //             yield widget.on('message', function(text) {
  //               console.log('>> got the message..');
  //               input = text;
  //               widget.addMessage({author: 'Hamza Waqas', text: text});
  //               block = false;
  //             });
  //           })
  //         })
  //                 .listen()
  //                 .decide(function(message) {
  //                   widget.addMessage({author: 'Osler', text: message});
  //                 }),
  //         // 'hey': babble.then(function() {
  //         //   widget.on('message', function(text) {
  //         //     console.log('on.message -> ', text);
  //         //     widget.addMessage({author: 'Hamza Waqas', text: text});
  //         //     babble.tell('How are you?')
  //         //             .listen()
  //         //             .decide(function(message) {
  //         //               widget.addMessage({author: 'Osler', text: message});
  //         //             })
  //         //   })
  //         // }),
  //         'who': babble.tell('This is Hamza')
  //                     .listen()
  //                     .decide(function() {
  //                       console.log('>> who.*: ', arguments);
  //                     })
  //       });
  // })

  this.push = function push(text) {
    widget.addMessage({author: 'Hamza Waqas', text: text});
    var url = 'http://localhost:3000/brain/ask/';
    var _iId = window.sessionStorage.getItem('i_id');
    if (_iId) {
      url += encodeURIComponent(window.sessionStorage.getItem('loop_text'));
      url += '?i=' + _iId;
      url += '&text=' + text;
    } else {
      url += encodeURIComponent(text);
    }
    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type':'application/json'
      },
      success: function(response) {
        console.log(response);
        var answer = response._result;
        if (answer.id) {
          // Save reference for next interaction.
          window.sessionStorage.setItem('i_id', answer.id);
          if (answer.start) {
            // It's just start of the conversation. Cache it!
            window.sessionStorage.setItem('loop_text', text);
          } else if (answer.end) {
            // End up the conversation..
            window.sessionStorage.removeItem('i_id');
            window.sessionStorage.removeItem('loop_text');
          }
        }
        widget.addMessage({author: 'Osler', text: answer.text || answer});
        widget.setState({text_value: ''})
      }
    });
  };
};

module.exports = DecisionLoop;
