import Immutable, { List, Map } from 'immutable';
import { students } from './students';
import { FormVisibilityFilter, SelectionFilter } from './actions';

const initialState = {
	formVisibility : FormVisibilityFilter.HIDE_FORM,
	students: students,
	tmpData: {},
	selectedData: List([])
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
		
		case 'UPDATE_FORM':
			return Object.assign({}, state, {
				formVisibility: 'SHOW_FORM',
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

		case 'ADD_STUDENT':
			action.student.id = action.id;
			return Object.assign({}, state, {
				students: state.students.push(Map(action.student).set('isSelected', false))
			});

		case 'DELETE_STUDENT':
			return Object.assign({}, state, {
				students: state.students.filter(student => {
          return student.get("id") !== action.id;
        })
			});

		case 'SELECT_STUDENT':
			return Object.assign({}, state, {
				students: state.students.map(student => {
					if (student.get('id') === action.id) {
						return Immutable.fromJS(action.student).set('isSelected', true);
					} else {
						return student;
					}
        }),
        selectedData: state.selectedData.push(Map(action.student).set('isSelected', true))
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
        })
			});

		case 'TOGGLE_SELECT_ALL':
			if (action.filter === 'SELECT') {
				const selectedStudents = state.students.map(student => {
						return student.set('isSelected', true)
					});
				return Object.assign({}, state, {
					students: selectedStudents,
					selectedData: selectedStudents
				})
			} else if (action.filter === 'UNSELECT') {
				return Object.assign({}, state, {
					students: state.students.map(student => {
						return student.set('isSelected', false)
					}),
					selectedData: state.selectedData.filter(student => {
						return false;
					})
				})
			}

		default:
			return state;
	}
}

 