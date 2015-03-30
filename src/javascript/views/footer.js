var Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/footer.hbs');

var FooterView = Backbone.View.extend({

  el: '#footer',

  template: Template,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
  }
});

module.exports = FooterView;
