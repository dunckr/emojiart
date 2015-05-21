var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/header.hbs');

var HeaderView = Backbone.View.extend({

  el: '#header',

  template: Template,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
  }
});

module.exports = HeaderView;
