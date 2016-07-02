var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/MainContainer');
var Home = require("../containers/Home");

var routes = (
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
);

module.exports = routes;
