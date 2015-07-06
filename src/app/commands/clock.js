module.exports = {
  name: 'clock',
  command: /^what is the time$/,
  action: function() {
    console.log('it\'s ', new Date());
  }
}
