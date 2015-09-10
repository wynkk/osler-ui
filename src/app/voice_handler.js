var $ = require("jquery");

module.exports = function (text) {
    $.getJSON('http://localhost:4000/brain/ask/' + text, function () {
        console.log(arguments);
    });
};