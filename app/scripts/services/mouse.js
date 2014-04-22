define([], function () {
    'use strict';

    var Mouse = function() {
        this.clicked = false;
        return {
            clicked: this.clicked,
            clickedToggle: function() {
                this.clicked = !this.clicked;
            }
        };
    };
    return new Mouse();
});
