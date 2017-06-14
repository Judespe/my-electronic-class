import React from 'react';
import { size } from 'immutable';

import Header from './Header';
import Menu from './Menu';
import Student from './Student';
import StudentForm from './StudentForm';

import './StudentsTable.css';

let StudentsTable = props => {

	const { students, formVisibility, tmpData, editStudent, updateForm, addStudent, deleteStudent, setFormVisibility } = props;

	let isTmpData = tmpData.length > 0;

	const saveForm = values => {
		if (!isTmpData) {
			addStudent(values);
      setFormVisibility('HIDE_FORM'); 
		} else {
			editStudent(values);
		}
	}

	return(
    <div className="content">
      <Header />
      <Menu setFormVisibility={setFormVisibility}/>
			<div id='table_container' className="container-fluid">
				<table className="container">
					<thead>
						<tr className="row">
							<th className="col-xs-1 aligncenter">
								<input type="checkbox" name="select_all" id="select_all" className="checkbox_custom" />
								<label htmlFor="select_all" className="checkbox_custom_label" ></label>
							</th>
							<th className="col-xs-6">NOM</th>
							<th className="col-xs-5">ACTIONS</th>
						</tr>
					</thead>
					<tbody>
						{students.map(student => (
							<Student key={student.get('id')}
								student={student.toJS()}
								updateForm={updateForm}
								deleteStudent={deleteStudent} />
						))}
					</tbody>
				</table>
				{ formVisibility === 'SHOW_FORM' ?
					<StudentForm 
						key={isTmpData ? tmpData[0].id : 'new'}
						formKey={isTmpData ? tmpData[0].id : 'new'}
						initialValues={isTmpData ? tmpData[0] : null}
						saveForm={isTmpData ? editStudent : addStudent}
						onSubmit={saveForm}
						setFormVisibility={setFormVisibility} /> : null }
			</div>
    </div>
	);
}; 

export default StudentsTable;