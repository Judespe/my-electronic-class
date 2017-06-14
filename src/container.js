import { connect } from 'react-redux';

import StudentsTable from './components/StudentsTable';
import { editStudent, updateForm, addStudent, deleteStudent, setFormVisibility } from './actions';


const StudentsContainer = connect(
	function mapStateToProps(state) {
		return { 
			formVisibility: state.reducer.formVisibility,
			students: state.reducer.students,
			tmpData: state.reducer.tmpData
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			editStudent: data => dispatch(editStudent(data)),
			updateForm: id => dispatch(updateForm(id)),
			addStudent: data => dispatch(addStudent(data)),
			deleteStudent: id => dispatch(deleteStudent(id)),
			setFormVisibility: filter => dispatch(setFormVisibility(filter))
		};
	}
)(StudentsTable);

export default StudentsContainer;