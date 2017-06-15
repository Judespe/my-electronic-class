import { connect } from 'react-redux';

import StudentsTable from './components/StudentsTable';
import { setFormVisibility, editStudent, updateForm, addStudent, deleteStudent, selectStudent, unselectStudent, toggleSelectAll } from './actions';


const StudentsContainer = connect(
	function mapStateToProps(state) {
		return { 
			formVisibility: state.reducer.formVisibility,
			students: state.reducer.students,
			tmpData: state.reducer.tmpData,
			selectedData: state.reducer.selectedData,
			isAllSelected: state.reducer.isAllSelected
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			setFormVisibility: filter => dispatch(setFormVisibility(filter)),
			editStudent: data => dispatch(editStudent(data)),
			updateForm: id => dispatch(updateForm(id)),
			addStudent: data => dispatch(addStudent(data)),
			deleteStudent: id => dispatch(deleteStudent(id)),
			selectStudent: data => dispatch(selectStudent(data)),
			unselectStudent: data => dispatch(unselectStudent(data)),
			toggleSelectAll: filter => dispatch(toggleSelectAll(filter))
		};
	}
)(StudentsTable);

export default StudentsContainer;