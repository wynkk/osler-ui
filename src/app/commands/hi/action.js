var GoogleTTS = require('../../utilities/google_tts');

var Action = function() {
  console.log('hello, boy!');
  var msg = new SpeechSynthesisUtterance("My name is Osler. How can I help you?");
  // var voices = window.speechSynthesis.getVoices();
  // console.log(voices);
  // msg.voice = voices[10]; // Note: some voices don't support altering params
  // msg.voiceURI = 'native';
  // msg.volume = 1; // 0 to 1
  // msg.rate = 1; // 0.1 to 10
  // msg.pitch = 2; //0 to 2
  // msg.text = 'Hello World';
  // msg.lang = 'en-US';

  window.speechSynthesis.speak(msg);
};

module.exports = Action
