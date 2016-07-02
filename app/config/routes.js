var React = require('react');
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var store = require('../store');
var actions = require('../actions');
var Main = require('../containers/MainContainer');
var Home = require('../containers/Home');
var Login = require('../containers/Login');

var routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>
  </Provider>
);

setTimeout(function(){
    store.dispatch( actions.startListeningToAuth() );
});

module.exports = routes;
