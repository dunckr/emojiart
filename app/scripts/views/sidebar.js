define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/emojiLibrary',
    'services/control',
    'views/groups',
    'models/emoji'
], function ($, _, Backbone, JST, EmojiLibrary, Control, GroupsView, Emoji) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        el: '#sidebarView',

        initialize: function () {
            this.render();
        },

        events: {
            // hide and show the sidebar view
        },

        render: function () {
            // this.$el.html(this.template({ current: Control.current }));
            this.$el.html(this.template);

            var collection = new Backbone.Collection();

            _.each(EmojiLibrary.emojiNames, function(name) {
                var emoji = new Emoji({ value: name });
                collection.add(emoji);
            });

            var li = new GroupsView({ collection: collection, title: 'Library' });
            this.$('.groups').append(li.render().$el);

            EmojiLibrary.run(this.el);

            return this;
        }
    });

    return SidebarView;
});
