const newId = () => new Date().valueOf();

export const FormVisibilityFilter = {
	SHOW_FORM: 'SHOW_FORM',
	HIDE_FORM: 'HIDE_FORM'
}

export const SelectionFilter = {
	SELECT: 'SELECT',
	UNSELECT: 'UNSELECT'
}

export function setFormVisibility(filter) {
	return {
		type: 'SET_FORM_VISIBILITY',
		filter
	};
}

export function addStudent(student) {
	return {
		type: 'ADD_STUDENT',
		student: student,
		id: newId()
	};
}

export function deleteStudent(id) {
	return {
		type: 'DELETE_STUDENT',
		id: id
	};
}

export function updateForm(id) {
	return {
		type: 'UPDATE_FORM',
		id: id
	};
}

export function editStudent(student) {
	return {
		type: 'EDIT_STUDENT',
		student: student,
		id: student.id
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

export function toggleSelectAll(filter) {
	return {
		type: 'TOGGLE_SELECT_ALL',
		filter
	}
}