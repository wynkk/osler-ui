export class Model {
  constructor(info) {
    console.log('....')
    this.$url = '/';

    var self = this;
    info = info || [];
    Object.keys(info).forEach(function(key) {
      self[key] = info[key];
    });

  }

  toObject() {

  }

  toJSON() {

  }

  serialize() {
    var map = {};
    var self = this;
    Object.keys(self).forEach(function(key) {
      if (key.charAt(0) != "$") {
        map[key] = self[key];
      }
    })
  }
}
