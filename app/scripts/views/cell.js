define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control',
    'services/emojiLibrary'
], function ($, _, Backbone, JST, Control, EmojiLibrary) {
    'use strict';

    var CellView = Backbone.View.extend({
        template: JST['app/scripts/templates/cell.hbs'],

        tagName: 'td',

        events: {
            'mousedown': 'mouseDown',
            'mousemove': 'mouseMove'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            EmojiLibrary.run(this.el);
            return this;
        },

        update: function() {
            this.model.set('value',':smiley:');
            this.render();
        },

        mouseMove: function() {
            if (Control.hold && !Control.alt) {
                this.update();
            }
        },

        mouseDown: function(e) {
            if (e.metaKey) {
                Control.alt = true;
            }
        }
    });

    return CellView;
});
