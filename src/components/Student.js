import React from 'react';

import './Student.css';

const Student = props => {

	const { 
		student,
		viewStudent,
		updateForm, 
		deleteStudent, 
		selectStudent,
		unselectStudent } = props;

	const avatar = student.avatar;
	const style = {
  	backgroundImage: `url(${student.avatar})`
	};

	return(
		<tr className={student.isSelected ? "active-row row" : "row"}>
			<td className="col-xs-1 aligncenter">
				<input 
					type="checkbox" 
					id={"toggle" + student.id} 
					className="checkbox_custom_reverse"
					onChange={student.isSelected ? ()=>unselectStudent(student) : ()=>selectStudent(student)}
					checked={student.isSelected} />
				<label 
					htmlFor={"toggle" + student.id} 
					className="checkbox_custom_reverse_label">
				</label>
			</td>
			<td className="col-xs-6">
				<div className="student_presentation">
					<div className={avatar ? "avatar" : "avatar avatar-default"} style={style}></div>
					<div className="student_general_info">
						<div className="student_name">
							<span className="lastName">{student.lastName}</span>
							<span>{student.firstName}</span>
						</div>
						<div className="student_contact">
							<span className="contact_item">
								<span className="glyphicon glyphicon-envelope"></span>{student.email}
								</span>
							<span className="contact_item">
								<span className="glyphicon glyphicon-earphone"></span>{student.phone}
							</span>
						</div>
					</div>
				</div>
			</td>
			<td className="col-xs-5">
				<button className="btn_primary" onClick={()=>viewStudent(student.id)}><span className="glyphicon glyphicon-file"></span>voir la fiche</button>
				<button className="btn_alert"
					onClick={()=>updateForm(student.id)}><span className="glyphicon glyphicon-pencil"></span>éditer</button>
				<button className="btn_danger" onClick={()=>deleteStudent(student.id)}><span className="glyphicon glyphicon-remove"></span>supprimer</button>
			</td>
		</tr>
	);
}

export default Student;