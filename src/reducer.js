import Immutable, { List, Map } from 'immutable';
import { students } from './students';
import { FormVisibilityFilter, FileVisibilityFilter, toggleSelectAll } from './actions';

const initialState = {
	formVisibility : FormVisibilityFilter.HIDE_FORM,
	fileVisibility: FileVisibilityFilter.HIDE_FILE,
	students: students,
	tmpData: {},
	selectedData: List([]),
	isAllSelected: false
}

export default function(state = initialState, action) {
	switch(action.type) {

		case 'SET_FORM_VISIBILITY':
			if (action.filter === 'HIDE_FORM') {
				return Object.assign({}, state, {
					formVisibility: action.filter,
					tmpData: {}
				});
			} 
			return Object.assign({}, state, {
				formVisibility: action.filter
			});

		case 'SET_FILE_VISIBILITY':
			if (action.filter === 'HIDE_FILE') {
				return Object.assign({}, state, {
					fileVisibility: action.filter,
					tmpData: {}
				});
			} 
			return Object.assign({}, state, {
				fileVisibility: action.filter
			});

		case 'VIEW_STUDENT':
			toggleSelectAll('UNSELECT');
			return Object.assign({}, state, {
				fileVisibility: 'SHOW_FILE',
				tmpData: state.students.filter(student => {
					return student.get('id') === action.id;
				}).toJS()
			});

		case 'ADD_STUDENT':
			action.student.id = action.id;
			return Object.assign({}, state, {
				students: state.students.push(Map(action.student).set('isSelected', false))
			});

		case 'UPDATE_FORM':
			return Object.assign({}, state, {
				formVisibility: 'SHOW_FORM',
				fileVisibility: 'HIDE_FILE',
				tmpData: state.students.filter(student => {
          return student.get("id") === action.id;
        }).toJS()
			});

		case 'EDIT_STUDENT':
			return Object.assign({}, state, {
				formVisibility: 'HIDE_FORM',
				students: state.students.map(student => {
					if (student.get('id') === action.id) {
						return Immutable.fromJS(action.student);
					} else {
						return student;
					}
				})
			});

		case 'DELETE_STUDENT':
			return Object.assign({}, state, {
				students: state.students.filter(student => {
          return student.get("id") !== action.id;
        })
			});

		case 'SELECT_STUDENT':
		const newState = Object.assign({}, state, {
				students: state.students.map(student => {
					if (student.get('id') === action.id) {
						return Immutable.fromJS(action.student).set('isSelected', true);
					} else {
						return student;
					}
        }),
        selectedData: state.selectedData.push(Map(action.student).set('isSelected', true))
			});
			let test;
			newState.students.forEach(student => {
				if(!student.get('isSelected')) {
					return test = false;
				}
				return test = true;
			});
			return Object.assign({}, newState, {
				isAllSelected: test
			});

		case 'UNSELECT_STUDENT':
			return Object.assign({}, state, {
				students: state.students.map(student => {
					if (student.get('id') === action.id) {
						return Immutable.fromJS(action.student).set('isSelected', false);
					} else {
						return student;
					}
        }),
        selectedData: state.selectedData.filter(student => {
          return student.get('id') !== action.id;
        }),
        isAllSelected: false
			});

		case 'TOGGLE_SELECT_ALL':
			if (action.filter === 'SELECT') {
				const selectedStudents = state.students.map(student => {
						return student.set('isSelected', true)
					});
				return Object.assign({}, state, {
					students: selectedStudents,
					selectedData: selectedStudents,
					isAllSelected: true
				})
			} else if (action.filter === 'UNSELECT') {
				return Object.assign({}, state, {
					students: state.students.map(student => {
						return student.set('isSelected', false)
					}),
					selectedData: state.selectedData.filter(student => {
						return false;
					}),
					isAllSelected: false
				})
			}

		default:
			return state;
	}
}

 