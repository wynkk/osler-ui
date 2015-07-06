// Return's command object for mumble-js
module.exports = {
  name: 'Hi',
  command: require('../../utilities/expressions').hi,
  action: require('./action')
}
