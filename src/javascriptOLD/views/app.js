var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  HeaderView = require('../views/header'),
  GroupsView = require('../views/groups'),
  SidebarView = require('../views/sidebar'),
  TableView = require('../views/table'),
  FooterView = require('../views/footer'),
  Emoji = require('../models/emoji');

var AppView = Backbone.View.extend({

  el: $('#appView'),

  initialize: function() {
    this.subViews();
  },

  subViews: function() {
    new TableView();
    new HeaderView();
    var emoji = new Emoji();
    new SidebarView({
      model: emoji
    });
    new GroupsView();
    new FooterView();
  }
});

module.exports = AppView;
