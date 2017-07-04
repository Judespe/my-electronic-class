import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { formVisibilityReducer, fileVisibilityReducer } from './visibilityReducer';
import { studentsReducer } from './studentsReducer';
import { tmpDataReducer } from './tmpDataReducer';
import { firebaseStateReducer } from 'react-redux-firebase';

export const appReducer = combineReducers({
	formVisibilityFilter: formVisibilityReducer,
	fileVisibilityFilter: fileVisibilityReducer,
	students: studentsReducer,
	tmpData: tmpDataReducer,
	form: formReducer,
	firebase: firebaseStateReducer
});