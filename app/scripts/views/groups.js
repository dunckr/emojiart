define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control',
    'services/emojiLibrary',
    'services/eventing',
    'models/emoji',
    'views/group'
], function ($, _, Backbone, JST, Control, EmojiLibrary, Eventing, Emoji, GroupView) {
    'use strict';

    var GroupsView = Backbone.View.extend({
        template: JST['app/scripts/templates/groups.hbs'],

        el: '#groupsView',

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
            var self = this;
            _.map(EmojiLibrary.groupings, function(list, title) {
                var collection = new Backbone.Collection();
                _.each(list, function(name) {
                    var emoji = new Emoji({ value: name });
                    collection.add(emoji);
                });
                var view = new GroupView({ collection: collection, title: title });
                self.$('.groups').append(view.render().$el);
            });
            return this;
        }
    });

    return GroupsView;
});
