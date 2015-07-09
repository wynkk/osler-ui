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
    $.ajax({
      //  + '&callback=?'
      url: 'http://localhost:3000/brain/ask/' + text,
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type':'application/json'
    },
      success: function(response) {
        widget.addMessage({author: 'Osler', text: response._result});
        widget.setState({text_value: ''})
      }
    });
    // if (!widget._ready) {
    //   widget._ready = true;
    //   widget.emit('start', text);
    // } else {
    //   widget.emit('message', text);
    // }
  };
};

module.exports = DecisionLoop;
