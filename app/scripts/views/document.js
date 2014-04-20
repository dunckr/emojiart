define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/emojis'
], function ($, _, Backbone, JST, Emojis) {
    'use strict';

    var DocumentView = Backbone.View.extend({
        template: JST['app/scripts/templates/document.hbs'],

        el: '#documentView',

        initialize: function () {
            this.collection = new Emojis();
            this.render();
        },

        render: function () {
            this.$el.html(this.template({ emojis: this.collection.toJSON() }));
            return this;
        }
    });
    return DocumentView;
});
