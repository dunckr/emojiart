define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/row',
    'collections/emojis',
    'models/emoji',
    'services/control'
], function ($, _, Backbone, JST, RowView, Emojis, Emoji, Control) {
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
            _.times(20, function() {
                self.addRow();
            });
            return this;
        },

        addRow: function() {
            var collection = new Emojis();
            _.times(20, function() {
                var model = new Emoji();
                collection.add(model);
            });
            var rowView = new RowView({ collection: collection });
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
