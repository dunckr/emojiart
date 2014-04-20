define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ElementView = Backbone.View.extend({
        template: JST['app/scripts/templates/element.hbs'],

        tagName: 'td',

        events: {
            'click': 'clicked',
            'mousedown': 'mousedown',
            'mousemove': 'mousemove',
            'mouseup': 'mouseup'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        clicked: function() {
            this.model.set('value','changed');
        },

        mousemove: function() {
            console.log('mousemoving')
        },

        mouseup: function() {
            console.log('mouseup')
        }
    });

    return ElementView;
});
