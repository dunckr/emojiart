define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        template: JST['app/scripts/templates/header.hbs'],

        el: 'header',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return HeaderView;
});
