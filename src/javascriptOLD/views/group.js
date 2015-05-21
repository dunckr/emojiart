var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/group.hbs'),
  Eventing = require('../services/eventing');

var GroupView = Backbone.View.extend({

  template: Template,

  events: {
    'click .panel-heading': 'toggleDisplay',
    'click span': 'changeCurrent'
  },

  initialize: function(options) {
    this.title = options.title;
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      collection: this.collection.toJSON(),
      title: this.title
    }));
    return this;
  },

  toggleDisplay: function() {
    this.$('.group').toggle();
  },

  changeCurrent: function(e) {
    Eventing.trigger('current:changed', $(e.target).text());
  }

});

module.exports = GroupView;
