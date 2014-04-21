define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/cell'
], function ($, _, Backbone, JST, CellView) {
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
            _.times(20, function() {
                self.addCell();
            });
            return this;
        },

        addCell: function() {
            var cellView = new CellView();
            this.$el.append(cellView.render().$el);

        }
    });

    return RowView;
});
