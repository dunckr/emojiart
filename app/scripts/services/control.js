define([
    'models/emoji'
],function (Emoji) {
    'use strict';

    var Control = function() {
        this.hold = false;
        this.alt = false;
        this.current = new Emoji();
    };
    Control.prototype.setCurrent = function(value   ) {
        this.current.set('value', value);
    }
    return new Control();
});
