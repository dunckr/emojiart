define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/emojis',
    'views/element'
], function ($, _, Backbone, JST, Emojis, ElementView) {
    'use strict';

    var DocumentView = Backbone.View.extend({
        template: JST['app/scripts/templates/document.hbs'],

        el: '#documentView',

        initialize: function () {
            this.collection = new Emojis();
            this.render();
        },

        render: function () {
            var self = this;
            this.$el.html(this.template);
            this.collection.each(function(emoji) {
                var elementView = new ElementView({model: emoji});
                self.$('tbody').append(elementView.render().el);
            });
            return this;
        }
    });
    return DocumentView;
});
