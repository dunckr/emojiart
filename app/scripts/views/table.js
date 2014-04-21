define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/row'
], function ($, _, Backbone, JST, RowView) {
    'use strict';

    var TableView = Backbone.View.extend({
        template: JST['app/scripts/templates/table.hbs'],

        tagName: 'table',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            var self = this;
            _.times(20, function() {
                self.addRow();
            });
            return this;
        },

        addRow: function() {
            var rowView = new RowView();
            this.$('tbody').append(rowView.render().$el);
        }
    });

    return TableView;
});
