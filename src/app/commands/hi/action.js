// var GoogleTTS = require('../../utilities/google_tts');

var Action = function(widget) {
  return function () {
    widget.addMessage({author: 'You', text: 'Hi, dude!'});
    var utterance = new SpeechSynthesisUtterance("My name is Osler. How can I help you?");
    window.speechSynthesis.onvoiceschanged = function() {
      var daniel = window.speechSynthesis.getVoices().filter(function(v) { return v.name == 'Daniel'; });
      utterance.voice = daniel[0];
      window.speechSynthesis.speak(utterance);
      widget.addMessage({author: 'Osler', text: 'My name is Osler. How can I help you?'});
    };
  }
};

module.exports = Action;
