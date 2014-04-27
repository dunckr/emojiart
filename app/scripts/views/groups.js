define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control',
    'services/emojiLibrary'
], function ($, _, Backbone, JST, Control, EmojiLibrary) {
    'use strict';

    var GroupsView = Backbone.View.extend({
        template: JST['app/scripts/templates/groups.hbs'],

        events: {
            'click h2': 'toggleDisplay',
            'click span': 'changeCurrent'
        },

        initialize: function (options) {
            this.title = options.title;
            this.render();
        },

        render: function () {
            this.$el.html(this.template({ collection: this.collection.toJSON(), title: this.title }));
            EmojiLibrary.run(this.el);
            return this;
        },

        toggleDisplay: function() {
            this.$('.group').toggle();
        },

        changeCurrent: function(e) {
            Control.setCurrent(e.target.alt);
        }

    });

    return GroupsView;
});
