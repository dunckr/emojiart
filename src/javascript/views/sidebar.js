var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/sidebar.hbs'),
  HeaderView = require('../views/header'),
  GroupsView = require('../views/groups'),
  EmojiLibrary = require('../services/emojiLibrary'),
  Eventing = require('../services/eventing'),
  Control = require('../services/control'),
  GroupsView = require('../views/groups');

var SidebarView = Backbone.View.extend({

  el: '#sidebarView',

  template: Template,

  events: {
    'click #clear': 'reset',
    'click #eraser': 'eraser'
  },

  initialize: function() {
    this.render();
    Eventing.bind('currentChanged', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({
      current: Control.current.get('value')
    }));
    EmojiLibrary.run(this.el);
  },

  reset: function() {
    Eventing.trigger('reset');
  },

  eraser: function() {
    Control.setCurrent('⬜');
    this.render();
  }
});

module.exports = SidebarView;
