define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/app.hbs'],

        el: $('#appView'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return AppView;
});
