// Return's command object for mumble-js
module.exports = {
  name: 'Hi',
  command: /^hi$/,
  action: require('./action')
}
