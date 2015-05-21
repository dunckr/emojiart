var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/sidebar.hbs'),
  HeaderView = require('../views/header'),
  GroupsView = require('../views/groups'),
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
    var self = this;
    Eventing.on('current:changed', function(value) {
      self.model.set('value', value);
      self.render();
    });
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      current: this.current
    }));
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
