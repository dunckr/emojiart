define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var GroupsView = Backbone.View.extend({
        template: JST['app/scripts/templates/groups.hbs'],

        tagName: 'li',

        events: {
            // click title then render the rest
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            console.log(this.collection);
            this.$el.html(this.template(this.collection.toJSON()));
        }
    });

    return GroupsView;
});
