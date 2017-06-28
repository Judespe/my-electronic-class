import React from 'react';
import ReactDOM from 'react-dom';

import { appReducer } from './reducers/appReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import StudentsContainer from './container';
import './index.css';

const store = createStore(
	appReducer,
	applyMiddleware(thunk)
);
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
	<Provider store={store}>
    <StudentsContainer />
	</Provider>, 
	document.getElementById('root')
);
