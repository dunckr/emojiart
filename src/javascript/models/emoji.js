  var Backbone = require('backbone');

  var Emoji = Backbone.Model.extend({
    defaults: {
      value: '⬜'
    }
  });

  module.exports = Emoji;
