define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/header',
    'views/sidebar',
    'views/document',
    'views/footer'
], function ($, _, Backbone, JST, HeaderView, SidebarView, DocumentView, FooterView) {
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
            // new HeaderView();
            // new SidebarView();
            // new DocumentView();
            // new FooterView();
        }
    });
    return AppView;
});
