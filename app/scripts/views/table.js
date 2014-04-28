define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/row',
    'collections/emojis',
    'models/emoji',
    'services/control',
    'services/eventing'
], function ($, _, Backbone, JST, RowView, Emojis, Emoji, Control, Eventing) {
    'use strict';

    var TableView = Backbone.View.extend({
        template: JST['app/scripts/templates/table.hbs'],

        tagName: 'table',

        initialize: function () {
            this.render();
            Eventing.bind('reset', this.render, this);
        },

        events: {
            'mousedown': 'mouseDown',
            'mouseup': 'mouseUp'
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
            this.collection = new Emojis();
            var self = this;
            _.times(20, function() {
                var model = new Emoji();
                self.collection.add(model);
            });
            var rowView = new RowView({ collection: this.collection });
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
