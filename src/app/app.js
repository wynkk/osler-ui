'use strict';

var React = require('react'),
    Router = require('react-router'),
    // Router = ReactRouter.Router,
    Route  = Router.Route,
    RouteHandler = Router.RouteHandler,
    WynkApp;

var Index = require('./components/index');

WynkApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, React</h2>
                <Index />
            </div>
            /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <WynkApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
