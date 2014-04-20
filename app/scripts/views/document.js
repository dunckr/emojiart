define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var DocumentView = Backbone.View.extend({
        template: JST['app/scripts/templates/document.hbs'],

        el: '#documentView',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

    return DocumentView;
});
