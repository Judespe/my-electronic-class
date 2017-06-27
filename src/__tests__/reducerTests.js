import Immutable, { List, Map, size } from 'immutable';

import reducer from '../reducer';
import { students } from '../students';
import { addStudent, deleteStudent } from '../actions';

let initialState = {
	formVisibility : 'HIDE_FORM',
	fileVisibility: 'HIDE_FILE',
	students: students,
	tmpData: {},
	selectedData: List([]),
	isAllSelected: false
}

describe('reducers', () => {

	describe('studentReducer', () => {
		it('should return the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState)
		})

		it('should add a new student', () => {
			const finalState = reducer(initialState, {
				type: 'ADD_STUDENT',
				student: {
					lastName: 'TestLastName',
					firstName: 'TestFirstName'
				},
				id: 6
			});
			const expectedStudentsListSize = initialState.students.size + 1;

			expect(finalState.students.size)
			.toBe(expectedStudentsListSize)
		})

		it('should delete a student', () => {
			const expectedStudentsListSize = initialState.students.size - 1;

			const finalState = reducer(initialState, {
					type: 'DELETE_STUDENT',
					id: 1
				});

			expect(finalState.students.size).toBe(expectedStudentsListSize)
		})

	})

})