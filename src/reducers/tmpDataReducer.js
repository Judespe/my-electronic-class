import { updateObject, createReducer } from './reducerUtilities';
import { setToggleFilter, setFileVisibility, setFormVisibility } from '../actions/actions';

function resetTmpData(tmpDataState, action) {
	return updateObject(tmpDataState, {
		tmpData: {}
	});
}

// function viewStudent(tmpDataState, action, studentsState) {
// 	console.log(tmpDataState);
// 	console.log(action);
// 	console.log(studentsState);
// 	setToggleFilter('UNSELECT');
// 	setFileVisibility('SHOW_FILE');
// 	return updateObject(tmpDataState, {
// 		tmpData: studentsState.studentsList.filter(student => {
// 			return student.get('id') === action.id;
// 		}).toJS()
// 	});
// }

function updateForm(tmpDataState, action) {
	setFormVisibility('SHOW_FORM');
	setFileVisibility('HIDE_FILE');
	return updateObject(tmpDataState, {
		tmpData: action.payload.filter(student => {
      return student.get("id") === action.id;
    }).toJS()
	});	
}

export const tmpDataReducer = createReducer({}, {
	'RESET_TMP_DATA': resetTmpData,
	// 'VIEW_STUDENT': viewStudent,
	'UPDATE_FORM': updateForm
});
