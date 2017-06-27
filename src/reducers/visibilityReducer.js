import { updateObject, createReducer } from './reducerUtilities';
import { resetTmpData } from '../actions/actions';

function setFormVisibilityFilter(formVisibilityState, action) {
	console.log(action);
	if (action.filter === 'HIDE_FORM') {
		resetTmpData();
		return action.filter;
	} 
	return action.filter;
}

export const formVisibilityReducer = createReducer('HIDE_FORM', {
	'SET_FORM_VISIBILITY': setFormVisibilityFilter
});

function setFileVisibilityFilter(fileVisibilityState, action) {
	if (action.filter === 'HIDE_FILE') {
		resetTmpData();
		return action.filter;
	} 
	return action.filter;
}

export const fileVisibilityReducer = createReducer('HIDE_FILE', {
	'SET_FILE_VISIBILITY': setFileVisibilityFilter
});