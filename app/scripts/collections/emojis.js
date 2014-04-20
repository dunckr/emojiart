define([
    'underscore',
    'backbone',
    'models/emoji'
], function (_, Backbone, Emoji) {
    'use strict';

    var Emojis = Backbone.Collection.extend({
        model: Emoji,

        initialize: function() {
            this.add(new Emoji());
            this.add(new Emoji({value: 'two'}));
        }
    });

    return Emojis;
});
