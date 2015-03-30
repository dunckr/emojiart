var _ = require('underscore'),
  Backbone = require('backbone'),
  Emoji = require('../models/emoji');

var Emojis = Backbone.Collection.extend({
  model: Emoji
});

module.exports = Emojis;
