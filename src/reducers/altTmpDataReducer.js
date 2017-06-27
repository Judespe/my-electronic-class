import { updateObject, createReducer } from './reducerUtilities';
import { setToggleFilter, setFileVisibility, setFormVisibility } from '../actions/actions';

function viewStudent(tmpDataState, action, studentsState) {
	console.log(tmpDataState);
	console.log(action);
	console.log(studentsState);
	setToggleFilter('UNSELECT');
	setFileVisibility('SHOW_FILE');
	return updateObject(tmpDataState, {
		tmpData: studentsState.studentsList.filter(student => {
			return student.get('id') === action.id;
		}).toJS()
	});
}

export const altTmpDataReducer = createReducer({}, {
	'VIEW_STUDENT': viewStudent
});
