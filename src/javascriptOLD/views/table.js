var _ = require('underscore'),
  Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/table.hbs'),
  RowView = require('../views/row'),
  Emojis = require('../collections/emojis'),
  Emoji = require('../models/emoji'),
  Control = require('../services/control'),
  Eventing = require('../services/eventing');

var TableView = Backbone.View.extend({

  el: '#table',

  tagName: 'table',

  template: Template,

  initialize: function() {
    this.render();
    Eventing.bind('reset', this.render, this);
  },

  events: {
    'mousedown': 'mouseDown',
    'mouseup': 'mouseUp'
  },

  render: function() {
    this.$el.html(this.template);
    var self = this;
    _.times(10, function() {
      self.addRow();
    });
    return this;
  },

  addRow: function() {
    this.collection = new Emojis();
    var self = this;
    _.times(5, function() {
      var model = new Emoji();
      self.collection.add(model);
    });
    var rowView = new RowView({
      collection: this.collection
    });
    this.$('tbody').append(rowView.render().$el);
  },

  mouseDown: function(e) {
    if (e.metaKey) {
      Control.alt = true;
    }
    Control.hold = true;
  },

  mouseUp: function() {
    Control.alt = false;
    Control.hold = false;
  }

});

module.exports = TableView;
