define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/mouse'
], function ($, _, Backbone, JST, Mouse) {
    'use strict';

    var CellView = Backbone.View.extend({
        template: JST['app/scripts/templates/cell.hbs'],

        tagName: 'td',

        events: {
            'mousedown': 'update',
            'mousemove': 'mousemove'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        update: function() {
            this.$('span').addClass('emoji emoji2600');
        },

        mousemove: function() {
            if (Mouse.clicked) {
                this.update();
            }
        }
    });

    return CellView;
});
