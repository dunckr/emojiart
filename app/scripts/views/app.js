define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/header',
    'views/sidebar',
    'views/table',
    'views/footer'
], function ($, _, Backbone, JST, HeaderView, SidebarView, TableView, FooterView) {
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
            var table = new Backbone.Collection();
            var tableView = new TableView({ collection: table });
            this.$('#documentView').html(tableView.render().$el);
            // new HeaderView();
            // new SidebarView();
            // new DocumentView();
            // new FooterView();
        }
    });
    return AppView;
});
