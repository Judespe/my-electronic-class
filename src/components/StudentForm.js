import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const validate = values => {

	const errors = {};

	if (!values.lastName) {
		errors.lastName = "Le nom de l'étudiant est obligatoire";
	}

	if (!values.firstName) {
		errors.firstName = "Le prénom de l'étudiant est obligatoire";
	}

	return errors;
}


	const renderField = ({
		input,
		label,
		type,
		meta: {touched, error}
	}) => (
		<div className="inline-field">
			<label className="col-xs-3">{label}</label>
			<div className="col-xs-9">
				<input {...input} placeholder={label} type={type} />
				{touched && error && <span className="alert-danger">{error}</span>}
			</div>
		</div>
	)

let StudentForm = props => {

	const {
		handleSubmit,
		setFormVisibility	} = props;

	return(
		<div className="form-background">
			<div className="form-container">
				<button id="close_window" onClick={()=>setFormVisibility('HIDE_FORM')}>&times;</button>
				
				<form id="studentForm" className="add-student" onSubmit={handleSubmit}>
					<Field name="lastName" component={renderField} type="text" label="Nom" />
					<Field name="firstName" component={renderField} type="text" label="Prénom" />
					<Field name="avatar" component={renderField} type="text" label="Url de l'avatar" />
					<button type="submit">Valider</button>
				</form>
			</div>
		</div>
	)
}

StudentForm.propTypes = {
	fields: PropTypes.array.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	saveForm: PropTypes.func.isRequired,
	initialValues: PropTypes.object
}

StudentForm = reduxForm({
	form: 'studentForm',
  fields: ['lastName', 'firstName', 'avatar'],
	validate,
  enableReinitialize : true
})(StudentForm)

export default StudentForm;