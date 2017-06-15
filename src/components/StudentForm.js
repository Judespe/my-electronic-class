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
		placeholder,
		type,
		rows,
		meta: {touched, error}
	}) => (
		<div className="inline-field">
			<label className="col-xs-3">{label}</label>
			<div className="col-xs-9">
				<input {...input} placeholder={placeholder} type={type} />
				{touched && error && <span className="alert-danger">{error}</span>}
			</div>
		</div>
	)

let StudentForm = props => {

	const {
		formKey,
		handleSubmit,
		setFormVisibility	} = props;

	return(
		<div className="form-background">
			<div className="form-container">
				<button id="close_window" onClick={()=>setFormVisibility('HIDE_FORM')}>&times;</button>

				{formKey === 'new' ? <h2>Nouvel étudiant :</h2> : null}

				<form id="studentForm" onSubmit={handleSubmit}>
					<div className="form_section">
						<h3>-  Informations générales :</h3>
						<Field name="lastName" component={renderField} type="text" label="Nom" placeholder="Nom (obligatoire)" />
						<Field name="firstName" component={renderField} type="text" label="Prénom" placeholder="Prénom (obligatoire)" />
						<hr/>
						<Field name="email" component={renderField} type="email" label="Email" placeholder="Email" />
						<Field name="phone" component={renderField} type="text" label="Téléphone" placeholder="Téléphone" />
						<hr/>
						<Field name="avatar" component={renderField} type="text" label="Avatar" placeholder="Url de l'avatar" />
						<hr/>
						<Field name="address" component={renderField} type="text" label="Adresse" placeholder="(N°, Rue) Rue" />
						<Field name="postal_code" component={renderField} type="text" label="Code Postal" placeholder="Code Postal" />
						<Field name="city" component={renderField} type="text" label="Ville" placeholder="Ville" />
					</div>
					<div className="form_section">
						<h3>-  Contact en cas d'urgence :</h3>
						<Field name="emergency_lastName" component={renderField} type="text" label="Nom du contact" placeholder="Nom du contact" />
						<Field name="emergency_firstName" component={renderField} type="text" label="Prénom du contact" placeholder="Prénom du contact" />
						<Field name="emergency_phone" component={renderField} type="text" label="Téléphone du contact" placeholder="Téléphone du contact" />
					</div>
					<div className="form_comments_section">
						<h3>-  Commentaires :</h3>
						<Field name="comments" className="col-xs-9 col-xs-offset-3" component="textarea" rows="6" label="Commentaires" placeholder="Ajoutez vos commentaires..." />
					</div>

					<div className="bottom_button">
						<button type="submit">Valider</button>
						<button className="btn_primary" type="button" onClick={()=>setFormVisibility('HIDE_FORM')}>Annuler</button>
					</div>
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