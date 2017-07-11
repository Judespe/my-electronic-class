import axios from 'axios';
import Cookies from 'universal-cookie'; 
import { 	AUTH_USER,
					AUTH_ERROR,
					UNAUTH_USER,
					PROTECTED_TEST } from './types';

const CLIENT_ROOT_URL = 'http://localhost:3000';
const SERVER_ROOT_URL = 'http://localhost:3001';
const API_URL = SERVER_ROOT_URL + '/api';

const newId = () => new Date().valueOf();
const cookies = new Cookies();

export function errorHandler(dispatch, error, type) {
	let errorMessage = '';

	if (error.data.error) {
		errorMessage = error.data.error;
	} else if (error.data) {
		errorMessage = error.data;
	} else {
		errorMessage = error;
	}

	if (error.status === 401) {
		dispatch({
			type: type,
			payload: 'You are not authorized to do this. Please login and try again.'
		});
		logoutUser();
	} else {
		dispatch({
			type: type,
			payload: errorMessage
		});
	}
}

export function loginUser({ email, password }) {
	return (dispatch) => {
		axios.post(`${API_URL}/login`, { email, password })
					.then(response => {
						console.log(response);
						cookies.set('token', response.data.token, {path: '/' });
						dispatch({ type: AUTH_USER });
						window.location.href = CLIENT_ROOT_URL + '/dashboard';
					})
					.catch((error) => {
						console.log(error);
						errorHandler(dispatch, error.response, AUTH_ERROR);
					});
	}
}

export function logoutUser() {
	return (dispatch) => {
		dispatch({ type: UNAUTH_USER });
		cookies.remove('token', { path: '/' });

		window.location.href = CLIENT_ROOT_URL + '/login';
	}
}

export function protectedTest() {
	return (dispatch) => {
		axios.get(`${API_URL}/protected`, {
			headers: { 'Authorization': cookies.get('token') }
		})
				.then(response => {
					dispatch({
						type: PROTECTED_TEST,
						payload: response.data.content
					});
				})
				.catch((error) => {
					errorHandler(dispatch, error.response, AUTH_ERROR)
				});
	}
}

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