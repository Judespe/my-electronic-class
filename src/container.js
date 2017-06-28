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
	setToggleFilter } from './actions/actions';


const StudentsContainer = connect(
	function mapStateToProps(state) {
		return { 
			formVisibility: state.formVisibilityFilter,
			fileVisibility: state.fileVisibilityFilter,
			students: state.students.studentsList,
			selectedData: state.students.selectedData,
			isAllSelected: state.students.isAllSelected,
			tmpData: state.tmpData
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
			setToggleFilter: filter => dispatch(setToggleFilter(filter))
		};
	}
)(StudentsTable);

export default StudentsContainer;