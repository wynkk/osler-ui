// var GoogleTTS = require('../../utilities/google_tts');

var Action = function() {
  //  FIXME:
  var utterance = new SpeechSynthesisUtterance("My name is Osler. How can I help you?");
  window.speechSynthesis.onvoiceschanged = function() {
    var daniel = window.speechSynthesis.getVoices().filter(function(v) { return v.name == 'Daniel'; });
    utterance.voice = daniel[0];
    console.log(daniel);
    window.speechSynthesis.speak(utterance);
  };
};

module.exports = Action
