import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducer';
import { Provider } from 'react-redux';

import StudentsContainer from './container';
import './index.css';

const reducers = {
	reducer,
	form: formReducer,
}
const reduc = combineReducers(reducers);
const store = createStore(reduc);

ReactDOM.render(
	<Provider store={store}>
    <StudentsContainer />
	</Provider>, 
	document.getElementById('root')
);
