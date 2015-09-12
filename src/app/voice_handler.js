(function() {
    'use strict';
    var $ = require('jquery');

    module.exports = function (text) {
        $.getJSON(window.API_URL + '/brain/ask/' + text, function () {
            console.log(arguments);
        });
    };
}());