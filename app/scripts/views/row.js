define([
    'jquery',
    'underscore',
    'backbone',
    'views/cell',
    'models/emoji'
], function ($, _, Backbone, CellView, Emoji) {
    'use strict';

    var RowView = Backbone.View.extend({
        tagName: 'tr',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html();
            var self = this;

            // should be 29 wide
            _.times(1, function() {
                console.log('add cell')
                self.addCell();
            });
            return this;
        },

        addCell: function() {
            var model = new Emoji();
            var cellView = new CellView({ model: model });
            this.$el.append(cellView.render().$el);
        }
    });

    return RowView;
});
