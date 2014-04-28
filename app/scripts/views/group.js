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

    var GroupView = Backbone.View.extend({
        template: JST['app/scripts/templates/group.hbs'],

        events: {
            'click .panel-heading': 'toggleDisplay',
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
            Eventing.trigger('currentChanged');
        }

    });

    return GroupView;
});
