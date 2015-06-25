'use strict';

var React = require('react'),
    Router = require('react-router'),
    // Router = ReactRouter.Router,
    Route  = Router.Route,
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    WynkApp;


var Index = require('./components/index');

WynkApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <RouteHandler/>
            </div>
            /*jshint ignore:end */
        );
    }
});

var routes = (
  <Route handler={WynkApp}>
    <Route name="root" path="/" handler={require('./components/index')}></Route>
    <Route name="signup" path="/signup" handler={require('./components/signup')}></Route>
  </Route>
)

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'))
})

// React.render(
//     /*jshint ignore:start */
//     <WynkApp />,
//     /*jshint ignore:end */
//     document.getElementById('app')
// );
