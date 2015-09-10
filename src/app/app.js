'use strict';

var React = require('react'),
    Router = require('react-router'),
    Route  = Router.Route,
    RouteHandler = Router.RouteHandler,
    Bootstrap = require('react-bootstrap'),
    james = require('james-say'),
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    WynkApp;

WynkApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div className="container">
                <h1>Wynk - Mr. Osler</h1>
                <div className="row">
                  <Nav bsStyle="pills" activeKey={1}>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem href="/#/signup">Signup</NavItem>
                    <NavItem href="/#/login">Login</NavItem>
                  </Nav>
                </div>
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
    <Route name="login" path="/login" handler={require('./components/login')}></Route>
  </Route>
)

Router.run(routes, Router.HashLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'))
});
