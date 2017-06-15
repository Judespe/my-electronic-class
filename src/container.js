import { connect } from 'react-redux';

import StudentsTable from './components/StudentsTable';
import { 
	setFormVisibility, 
	setFileVisibility, 
	viewStudent, 
	addStudent, 
	editStudent, 
	updateForm, 
	deleteStudent, 
	selectStudent, 
	unselectStudent, 
	toggleSelectAll } from './actions';


const StudentsContainer = connect(
	function mapStateToProps(state) {
		return { 
			formVisibility: state.reducer.formVisibility,
			fileVisibility: state.reducer.fileVisibility,
			students: state.reducer.students,
			tmpData: state.reducer.tmpData,
			selectedData: state.reducer.selectedData,
			isAllSelected: state.reducer.isAllSelected
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			setFormVisibility: filter => dispatch(setFormVisibility(filter)),
			setFileVisibility: filter => dispatch(setFileVisibility(filter)),
			addStudent: data => dispatch(addStudent(data)),
			viewStudent: id => dispatch(viewStudent(id)),
			editStudent: data => dispatch(editStudent(data)),
			updateForm: id => dispatch(updateForm(id)),
			deleteStudent: id => dispatch(deleteStudent(id)),
			selectStudent: data => dispatch(selectStudent(data)),
			unselectStudent: data => dispatch(unselectStudent(data)),
			toggleSelectAll: filter => dispatch(toggleSelectAll(filter))
		};
	}
)(StudentsTable);

export default StudentsContainer;