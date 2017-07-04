import React from 'react';
import ReactDOM from 'react-dom';

import { appReducer } from './reducers/appReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import './index.css';

import Login from './components/Login';
import Teacher from './components/Teacher';
import NotFound from './components/NotFound';

// const store = createStore(
// 	appReducer,
// 	applyMiddleware(thunk)
// );

// Firebase config
const config = {
	apiKey: "AIzaSyAFLR-fzgCjVM4M4cID4IdU4dY41AmBWzI",
  authDomain: "my-electronic-class.firebaseapp.com",
  databaseURL: "https://my-electronic-class.firebaseio.com",
  storageBucket: "my-electronic-class.appspot.com"
}

const createStoreWithFirebase = compose(
	reactReduxFirebase(config, {teacherProfile: 'teachers' }),
)(createStore);

const store = createStoreWithFirebase(appReducer, applyMiddleware(thunk));

ReactDOM.render(
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
