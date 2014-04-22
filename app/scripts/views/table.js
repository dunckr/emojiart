define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/row',
    'services/mouse'
], function ($, _, Backbone, JST, RowView, Mouse) {
    'use strict';

    var TableView = Backbone.View.extend({
        template: JST['app/scripts/templates/table.hbs'],

        initialize: function () {
            this.render();
        },

        events: {
            'mousedown': 'mouseToggle',
            'mouseup': 'mouseToggle'
        },

        render: function () {
            this.$el.html(this.template);
            var self = this;
            _.times(30, function() {
                self.addRow();
            });
            return this;
        },

        addRow: function() {
            var rowView = new RowView();
            this.$('tbody').append(rowView.render().$el);
        },

        mouseToggle: function() {
            Mouse.clickedToggle();
        }

    });

    return TableView;
});
