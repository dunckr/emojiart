define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/row',
    'services/control'
], function ($, _, Backbone, JST, RowView, Control) {
    'use strict';

    var TableView = Backbone.View.extend({
        template: JST['app/scripts/templates/table.hbs'],

        tagName: 'table',

        initialize: function () {
            this.render();
        },

        events: {
            'mousedown': 'mouseDown',
            'mouseup': 'mouseUp'
        },

        render: function () {
            this.$el.html(this.template);
            var self = this;
            _.times(1, function() {
            // _.times(25, function() {
                self.addRow();
                console.log('add row')
            });
            return this;
        },

        addRow: function() {
            var rowView = new RowView();
            this.$('tbody').append(rowView.render().$el);
        },

        mouseDown: function(e) {
            if (e.metaKey) {
                Control.alt = true;
            }
            Control.hold = true;
        },

        mouseUp: function() {
            Control.alt = false;
            Control.hold = false;
        }

    });

    return TableView;
});
