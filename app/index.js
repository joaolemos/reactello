var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Provider = require('react-redux').Provider;
var hashHistory = ReactRouter.hashHistory;
var store = require('./store');
var actions = require('./actions');
var routes = require('./config/routes');
var Home = require('./containers/Home');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);

setTimeout(function(){
    store.dispatch( actions.startListeningToAuth() );
});
