var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  HeaderView = require('../views/header'),
  GroupsView = require('../views/groups'),
  SidebarView = require('../views/sidebar'),
  TableView = require('../views/table'),
  FooterView = require('../views/footer');

var AppView = Backbone.View.extend({

  el: $('#appView'),

  initialize: function() {
    this.subViews();
  },

  subViews: function() {
    new TableView();
    new HeaderView();
    new SidebarView();
    new GroupsView();
    new FooterView();
  }
});

module.exports = AppView;
