import Immutable, { List, Map } from 'immutable';
import { students } from '../fixtures/students';
import { updateObject, createReducer, setArrayItemsProperty } from './reducerUtilities';

function addStudent(studentsState,action) {
	action.student.id = action.id;
	return updateObject(studentsState, {
		studentsList: studentsState.studentsList.push(Map(action.student).set('isSelected', false))
	});	
}

function editStudent(studentsState, action) {
	return updateObject(studentsState, {
		studentsList: studentsState.studentsList.map(student => {
			if (student.get('id') === action.id) {
				return Immutable.fromJS(action.student);
			} else {
				return student;
			}
		})
	});	
}

function deleteStudent(studentsState, action) {
	return updateObject(studentsState, {
		studentsList: studentsState.studentsList.filter(student => {
      return student.get("id") !== action.id;
    })
	});
}

function selectStudent(studentsState, action) {
	const newState = updateObject(studentsState, {
		studentsList: setArrayItemsProperty('isSelected', true, studentsState.studentsList, action.id),
    selectedData: studentsState.selectedData.push(Map(action.student).set('isSelected', true))
	});

	// Testing if all students are manually selected, then check AllSelected checkbox
	let test;
	newState.studentsList.forEach(student => {
		if(!student.get('isSelected')) {
			return test = false;
		}
		return test = true;
	});
	return updateObject(newState, {
		isAllSelected: test
	});	
}

function unselectStudent(studentsState, action) {
	return updateObject(studentsState, {
  	studentsList: setArrayItemsProperty('isSelected', false, studentsState.studentsList, action.id),
    selectedData: studentsState.selectedData.filter(student => {
      return student.get('id') !== action.id;
    }),
    isAllSelected: false
	});	
}

function setToggleFilter(studentsState, action) {
	if (action.filter === 'SELECT') {
		const selectedStudents = setArrayItemsProperty('isSelected', true, studentsState.studentsList);
		return updateObject(studentsState, {
			studentsList: selectedStudents,
			selectedData: selectedStudents,
			isAllSelected: true
		})
	} else if (action.filter === 'UNSELECT') {
		return updateObject(studentsState, {
			studentsList: setArrayItemsProperty('isSelected', false, studentsState.studentsList),
			selectedData: studentsState.selectedData.filter(student => {
				return false;
			}),
			isAllSelected: false
		})
	}
}

const initialState = {
	studentsList: students,
	selectedData: List([]),
	isAllSelected: false
}

export const studentsReducer = createReducer(initialState, {
	'ADD_STUDENT': addStudent,
	'EDIT_STUDENT': editStudent,
	'DELETE_STUDENT': deleteStudent,
	'SELECT_STUDENT': selectStudent,
	'UNSELECT_STUDENT': unselectStudent,
	'SET_TOGGLE_FILTER': setToggleFilter
});
