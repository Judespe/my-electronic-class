import Immutable, { Map } from 'immutable';
import { students } from './students';
import { FormVisibilityFilter } from './actions';

const initialState = {
	formVisibility : FormVisibilityFilter.HIDE_FORM,
	students: students,
	tmpData: {}
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
			return {
				formVisibility: 'SHOW_FORM',
				students: state.students,
				tmpData: state.students.filter(function(student) {
          return student.get("id") === action.id;
        }).toJS()
			}

		case 'EDIT_STUDENT':
			return {
				formVisibility: 'HIDE_FORM',
				students: state.students.map(student => {
					if (student.get('id') === action.id) {
						return Immutable.fromJS(action.student).set('isUpdated', true);
					} else {
						return student;
					}
				}),
				tmpData: {}
			}

		case 'ADD_STUDENT':
			action.student.id = action.id;
			return {
				formVisibility: state.formVisibility,
				students: state.students.push(Map(action.student).set('isVisible', false).set('isUpdated', false)),
				tmpData: {}
			}

		case 'DELETE_STUDENT':
			return {
				formVisibility: state.formVisibility,
				students: state.students.filter(function(student) {
          return student.get("id") !== action.id;
        }),
				tmpData: {}
			}
			

		default:
			return state;
	}
}

 