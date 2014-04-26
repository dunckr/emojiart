define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control'
], function ($, _, Backbone, JST, Control) {
    'use strict';

    var GroupsView = Backbone.View.extend({
        template: JST['app/scripts/templates/groups.hbs'],

        tagName: 'li',

        events: {
            'click h2': 'toggleDisplay',
            'click span': 'changeCurrent'
        },

        initialize: function () {
            this.render();
            console.log(this.title);
        },

        render: function () {
            this.$el.html(this.template({ collection: this.collection.toJSON(), title: this.title }));
            return this;
        },

        toggleDisplay: function() {
            this.$('.group').toggle();
        },

        changeCurrent: function(e) {
            Control.setCurrent(e.target.alt);
        }

    });

    return GroupsView;
});
