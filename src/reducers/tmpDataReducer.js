import { createReducer } from './reducerUtilities';

function viewStudent(tmpDataState, action) {
	console.log('View student activée');
	const studentsList = action.payload.studentsState.studentsList;

	return studentsList.filter(student => {
		return student.get('id') === action.id;
	}).toJS()
}

function updateForm(tmpDataState, action) {
	const studentsList = action.payload.studentsState.studentsList;

	return studentsList.filter(student => {
    return student.get("id") === action.id;
  }).toJS()
}

export const tmpDataReducer = createReducer({}, {
	'VIEW_STUDENT': viewStudent,
	'UPDATE_FORM': updateForm
});
