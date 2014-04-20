define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/document'
], function ($, _, Backbone, JST, DocumentView) {
    'use strict';

    var AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/app.hbs'],

        el: $('#appView'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            this.subViews();
            return this;
        },

        subViews: function() {
            new DocumentView();
        }
    });
    return AppView;
});
