define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'services/control'
], function ($, _, Backbone, JST, Control) {
    'use strict';

    var CellView = Backbone.View.extend({
        template: JST['app/scripts/templates/cell.hbs'],

        tagName: 'td',

        events: {
            'mousedown': 'update',
            'mousemove': 'mousemove'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        update: function() {
            // this.$('span').addClass('emoji emoji1f493');
            this.$el.html($('<img class="empty emoji emoji1f493" alt="🍻"></img>'));
            // this.$el.html($('<img class="twitter-emoji" src="https://abs.twimg.com/emoji/v1/72x72/1f37b.png" draggable="false" alt="🍻" title="Clinking beer mugs" aria-label="Emoji: Clinking beer mugs">'));
        },

        mousemove: function() {
            if (Control.clicked && !Control.alt) {
                this.update();
            }
        }
    });

    return CellView;
});
