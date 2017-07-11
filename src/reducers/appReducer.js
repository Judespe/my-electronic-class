import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { formVisibilityReducer, fileVisibilityReducer } from './visibilityReducer';
import { studentsReducer } from './studentsReducer';
import { tmpDataReducer } from './tmpDataReducer';
import authReducer from './auth_reducer';

export const appReducer = combineReducers({
	formVisibilityFilter: formVisibilityReducer,
	fileVisibilityFilter: fileVisibilityReducer,
	students: studentsReducer,
	tmpData: tmpDataReducer,
	form: formReducer,
	auth: authReducer
});