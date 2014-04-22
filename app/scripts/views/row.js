define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/cell',
    'models/cell'
], function ($, _, Backbone, JST, CellView, Cell) {
    'use strict';

    var RowView = Backbone.View.extend({
        template: JST['app/scripts/templates/row.hbs'],

        tagName: 'tr',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            var self = this;
            _.times(50, function() {
                self.addCell();
            });
            return this;
        },

        addCell: function() {
            var model = new Cell();
            var cellView = new CellView({ model: model });
            this.$el.append(cellView.render().$el);
        }
    });

    return RowView;
});
