var GoogleTTS = require('../../utilities/google_tts');

var Action = function() {
  var msg = new SpeechSynthesisUtterance("My name is Osler. How can I help you?");
  window.speechSynthesis.speak(msg);
};

module.exports = Action
