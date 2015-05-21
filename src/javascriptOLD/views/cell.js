var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/cell.hbs'),
  Control = require('../services/control'),
  EmojiLibrary = require('../services/emojiLibrary');

var CellView = Backbone.View.extend({
  tagName: 'td',

  template: Template,

  events: {
    'mousedown': 'mouseDown',
    'mousemove': 'mouseMove'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    EmojiLibrary.run(this.el);
    return this;
  },

  update: function() {
    this.model.set('value', Control.current.get('value'));
    this.render();
  },

  mouseMove: function() {
    if (Control.hold && !Control.alt) {
      this.update();
    }
  },

  mouseDown: function(e) {
    if (e.metaKey) {
      Control.alt = true;
    }
  }
});

module.exports = CellView;
