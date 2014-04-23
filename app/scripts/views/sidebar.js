define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/emojiLibrary'
], function ($, _, Backbone, JST, EmojiLibrary) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        el: '#sidebarView',

        initialize: function () {
            this.render();
        },

        render: function () {
            window.emoji = EmojiLibrary;
            this.$el.html(this.template);
            var self = this;
            // _.each(EmojiLibrary.EMOJI_MAP, function(emoji) {
            //     console.log(emoji);
            //     var temp = $('<li>')
            //         .addClass('emoji emoji' + emoji[2]);
            //     self.$('ul').append(temp[0]);
            // })
        }
    });

    return SidebarView;
});
