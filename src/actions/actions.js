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

export function resetTmpData() {
	return {
		type: 'RESET_TMP_DATA'
	}
}

export function viewStudent(id) {
	return {
		type: 'VIEW_STUDENT',
		id: id
	};
}

export function addStudent(student) {
	return {
		type: 'ADD_STUDENT',
		student: student,
		id: newId()
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