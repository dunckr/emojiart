define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/emojiLibrary',
    'views/groups'
], function ($, _, Backbone, JST, EmojiLibrary, Groups) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        el: '#sidebarView',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            _.each(EmojiLibrary.groupings, function(items, key) {
                console.log(items);
                var collection = new Backbone.Collection(items);

                var li = new Groups({ collection: collection });
                li.set('group', key);
                this.$('.groups').append(li.render().$el);
            })

        }
    });

    return SidebarView;
});
