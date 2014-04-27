define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control',
    'services/emojiLibrary',
    'services/eventing'
], function ($, _, Backbone, JST, Control, EmojiLibrary, Eventing) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        template: JST['app/scripts/templates/header.hbs'],

        el: 'header',

        initialize: function () {
            this.render();
        },

        events: {
            'click #clear': 'reset',
            'click #toggleSidebar': 'toggleSidebar'
        },

        render: function () {
            this.$el.html(this.template({ current: Control.current.get('value') }));
            EmojiLibrary.run(this.el);
        },

        reset: function() {
            Eventing.trigger('reset');
        },

        toggleSidebar: function() {
            $('#wrapper').toggleClass('active');
        }

    });

    return HeaderView;
});
