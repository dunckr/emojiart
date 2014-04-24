define([
    'jquery',
    'underscore',
    'backbone',
    'views/cell'
], function ($, _, Backbone, CellView) {
    'use strict';

    var RowView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html();
            var self = this;
            this.collection.each(function(model) {
                self.addCell(model);
            });
            return this;
        },

        addCell: function(model) {
            var cellView = new CellView({ model: model });
            this.$el.append(cellView.render().$el);
        }
    });

    return RowView;
});
