import { createReducer } from './reducerUtilities';

function setFormVisibilityFilter(formVisibilityState, action) {
	if (action.filter === 'HIDE_FORM') {
		return action.filter;
	} 
	return action.filter;
}

export const formVisibilityReducer = createReducer('HIDE_FORM', {
	'SET_FORM_VISIBILITY': setFormVisibilityFilter
});

function setFileVisibilityFilter(fileVisibilityState, action) {
	if (action.filter === 'HIDE_FILE') {
		return action.filter;
	} 
	return action.filter;
}

export const fileVisibilityReducer = createReducer('HIDE_FILE', {
	'SET_FILE_VISIBILITY': setFileVisibilityFilter
});