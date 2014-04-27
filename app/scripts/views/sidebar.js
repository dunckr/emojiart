define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'bootstrap',
    'services/emojiLibrary',
    'views/groups',
    'models/emoji'
], function ($, _, Backbone, JST, bootstrap, EmojiLibrary, GroupsView, Emoji) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        el: '#sidebarView',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);

            var self = this;

            _.map(EmojiLibrary.groupings, function(list, title) {

                var collection = new Backbone.Collection();

                _.each(list, function(name) {
                    var emoji = new Emoji({ value: name });
                    collection.add(emoji);
                });

                var view = new GroupsView({ collection: collection, title: title });
                self.$('.groups').append(view.render().$el);
            });

            return this;
        }
    });

    return SidebarView;
});
