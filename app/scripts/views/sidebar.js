define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'bootstrap',
    'services/emojiLibrary',
    'services/eventing',
    'services/control',
    'views/groups',
    'models/emoji'
], function ($, _, Backbone, JST, bootstrap, EmojiLibrary, Eventing, Control, GroupsView, Emoji) {
    'use strict';

    var SidebarView = Backbone.View.extend({
        template: JST['app/scripts/templates/sidebar.hbs'],

        el: '#sidebarView',

        events: {
            'click #clear': 'reset',
            'click #eraser': 'eraser'
        },

        initialize: function () {
            this.render();
            Eventing.bind('currentChanged', this.render, this);
        },

        render: function() {
            this.$el.html(this.template({ current: Control.current.get('value') }));
            EmojiLibrary.run(this.el);
        },

        reset: function() {
            Eventing.trigger('reset');
        },

        eraser: function() {
            Control.setCurrent(':white_large_square:');
            this.renderSidebar();
        }
    });

    return SidebarView;
});
