import React from 'react';
import ReactDOM from 'react-dom';

import { appReducer } from './reducers/appReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Cookies from 'universal-cookie';
import { AUTH_USER } from './actions/types';

import './index.css';

import Home from './components/Home';
import Login from './components/Login';
import StudentsContainer from './container';
import NotFound from './components/NotFound';

import RequireAuth from './components/require-auth';

const cookies = new Cookies();
const token = cookies.get('token');

const store = createStore(
	appReducer,
	applyMiddleware(thunk)
);

if (token && token !== 'undefined') {
	store.dispatch({ type: AUTH_USER });
}

// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={RequireAuth(Home)} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={RequireAuth(StudentsContainer)} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
