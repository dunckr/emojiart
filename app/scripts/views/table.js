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
            _.times(10, function() {
                self.addRow();
            });
            return this;
        },

        addRow: function() {
            var rowView = new RowView();
            this.$('tbody').append(rowView.render().$el);
        },

        mouseToggle: function(e) {
            if (e.metaKey) {
                this.altToggle();
            } else {
                this.clickedToggle();
            }
        },

        clickedToggle: function() {
            Control.clickedToggle();
        },
        altToggle: function() {
            Control.altToggle();
        }

    });

    return TableView;
});
