define(function () {
    'use strict';

    var Control = function() {
        this.clicked = false;
        this.alt = false;
    };
    Control.prototype.clickedToggle = function() {
        this.clicked = !this.clicked;
    }
    Control.prototype.altToggle = function() {
        this.alt = !this.alt;
    }
    return new Control();
});
