import Immutable, { List, Map, size } from 'immutable';

import { appReducer as reducer } from '../reducers/appReducer';
import { studentsReducer } from '../reducers/studentsReducer';
import { students } from '../fixtures/students';
import { addStudent, deleteStudent } from '../actions/actions';

let initialState = {
	formVisibilityFilter : 'HIDE_FORM',
	fileVisibilityFilter: 'HIDE_FILE',
	students: {
		studentsList: students,
		selectedData: List([]),
		isAllSelected: false
	},
	tmpData: {},
	form: {}
}

let studentsState = {
	studentsList: students,
	selectedData: List([]),
	isAllSelected: false
}

describe('reducers', () => {

	describe('studentReducer', () => {
		it('should return the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState)
		})

		it('should add a new student', () => {
			const finalState = studentsReducer(studentsState, {
				type: 'ADD_STUDENT',
				student: {
					lastName: 'TestLastName',
					firstName: 'TestFirstName'
				},
				id: 6
			});
			const expectedStudentsListSize = studentsState.studentsList.size + 1;

			expect(finalState.studentsList.size)
			.toBe(expectedStudentsListSize)
		})

		it('should delete a student', () => {
			const expectedStudentsListSize = studentsState.studentsList.size - 1;

			const finalState = studentsReducer(studentsState, {
					type: 'DELETE_STUDENT',
					id: 1
				});

			expect(finalState.studentsList.size).toBe(expectedStudentsListSize)
		})

	})

})