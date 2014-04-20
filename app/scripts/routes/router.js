define([
    'jquery',
    'backbone',
    'views/app'
], function ($, Backbone, AppView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '*all': 'defaultPath'
        },

        defaultPath: function() {
            var view = new AppView();
            view.render();
        }
    });
    return Router;
});
