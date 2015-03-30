var _ = require('underscore'),
  Backbone = require('backbone'),
  $ = Backbone.$ = require('jquery'),
  Template = require('../templates/groups.hbs'),
  Control = require('../services/control'),
  EmojiLibrary = require('../services/emojiLibrary'),
  Eventing = require('../services/eventing'),
  Emoji = require('../models/emoji'),
  GroupView = require('../views/group');

var GroupsView = Backbone.View.extend({

  el: '#groupsView',

  template: Template,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    var self = this;
    _.map(EmojiLibrary.groupings, function(list, title) {
      var collection = new Backbone.Collection();
      _.each(list, function(name) {
        var emoji = new Emoji({
          value: name
        });
        collection.add(emoji);
      });
      var view = new GroupView({
        collection: collection,
        title: title
      });
      self.$('.groups').append(view.render().$el);
    });
    return this;
  }
});

module.exports = GroupsView;
