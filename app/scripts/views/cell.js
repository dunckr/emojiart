define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CellView = Backbone.View.extend({
        template: JST['app/scripts/templates/cell.hbs'],

        tagName: 'td',

        events: {
            'click': 'clicked',
            'mousedown': 'mousedown',
            'mousemove': 'mousemove',
            'mouseup': 'mouseup'
        },

        initialize: function () {
            this.model = new Backbone.Model({value: 'here'});
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        clicked: function() {
            console.log('clicked');
        },

        mousemove: function() {
            this.model.set('value','updated');
            this.render();
            console.log('mousemove');
        },

        mouseup: function() {
            console.log('mouseup');
        }
    });

    return CellView;
});
