var Emoji = require('../models/emoji');

var Control = function() {
  this.hold = false;
  this.alt = false;
  this.current = new Emoji({
    value: 'smile'
  });
};
Control.prototype.setCurrent = function(value) {
  this.current.set('value', value);
};
module.exports = new Control();
