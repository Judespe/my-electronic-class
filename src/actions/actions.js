const newId = () => new Date().valueOf();

export const FormVisibilityFilter = {
	SHOW_FORM: 'SHOW_FORM',
	HIDE_FORM: 'HIDE_FORM'
}

export const FileVisibilityFilter = {
	SHOW_FILE: 'SHOW_FILE',
	HIDE_FILE: 'HIDE_FILE'
}

export function setFormVisibility(filter) {
	return {
		type: 'SET_FORM_VISIBILITY',
		filter
	};
}

export function setFileVisibility(filter) {
	return {
		type: 'SET_FILE_VISIBILITY',
		filter
	};
}

export function viewStudent(id) {
	return (dispatch, getState) => {
		const state = getState();
		const studentsState = state.students;

		dispatch(setToggleFilter('UNSELECT'));
		dispatch(setFileVisibility('SHOW_FILE'));
		dispatch({
			type: 'VIEW_STUDENT',
			id: id,
			payload: {
				studentsState
			}			
		});
	}
}

export function updateForm(id) {
	return (dispatch, getState) => {
		const state = getState();
		const studentsState = state.students;

		dispatch(setFormVisibility('SHOW_FORM'));
		dispatch(setFileVisibility('HIDE_FILE'));
		dispatch({
			type: 'UPDATE_FORM',
			id: id,
			payload: {
				studentsState
			}			
		});
	}
}

export function addStudent(student) {
	return {
		type: 'ADD_STUDENT',
		student: student,
		id: newId()
	};
}

export function editStudent(student) {
	return (dispatch) => {
		dispatch(setFormVisibility('HIDE_FORM'));
		dispatch({
			type: 'EDIT_STUDENT',
			student: student,
			id: student.id
		});
	}
}

export function deleteStudent(id) {
	return {
		type: 'DELETE_STUDENT',
		id: id
	};
}

export function selectStudent(student) {
	return {
		type: 'SELECT_STUDENT',
		student: student,
		id: student.id
	};
}

export function unselectStudent(student) {
	return {
		type: 'UNSELECT_STUDENT',
		student: student,
		id: student.id
	};
}

export function setToggleFilter(filter) {
	return {
		type: 'SET_TOGGLE_FILTER',
		filter
	}
}