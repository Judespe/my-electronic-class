import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import appReducer from './reducers';

import Login from './components/Login';
import Teacher from './components/Teacher';
import NotFound from './components/NotFound';

// Grab the state from a global variabl injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create redux store with initial state
const store = createStore(appReducer, preloadedState);

render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/teacher/:name" component={Teacher} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);