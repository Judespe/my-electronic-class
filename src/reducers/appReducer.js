import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { formVisibilityReducer, fileVisibilityReducer } from './visibilityReducer';
import { studentsReducer } from './studentsReducer';
import { tmpDataReducer } from './tmpDataReducer';
import { altTmpDataReducer } from './altTmpDataReducer';

const combinedReducer = combineReducers({
	formVisibilityFilter: formVisibilityReducer,
	fileVisibilityFilter: fileVisibilityReducer,
	students: studentsReducer,
	tmpData: tmpDataReducer,
	form: formReducer
});

function crossSliceReducer(state, action) {
	switch(action.type) {
		case 'VIEW_STUDENT': {
			return {
				tmpData: altTmpDataReducer(state.tmpData, action, state.students)
			}
		}

		default: return state;
	}
}

export function appReducer(state, action) {
    const intermediateState = combinedReducer(state, action);
    const finalState = crossSliceReducer(intermediateState, action);
    return finalState;
}