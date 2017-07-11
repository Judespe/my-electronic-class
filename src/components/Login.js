import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { loginUser } from '../actions/actions';

import './Login.css';

const form = reduxForm({
	form: 'login'
});

class Login extends React.Component {

	handleFormSubmit(formProps) {
		this.props.loginUser(formProps);
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div>
					<span><strong>Error :</strong> {this.props.errorMessage}</span>
				</div>
			);
		}
	}

	render() {
		const { handleSubmit } = this.props;

		return(
			<div className="loginBox">
				<form className="login" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					{this.renderAlert}
					<h1>Connexion à votre espace :</h1>
					<div className="fields-container">
						<Field name="email" component="input" type="email" />
						<Field name="password" component="input" type="password" />
						<button type="submit">Valider</button>
					</div>
				</form>
			</div>
		);
	}

}

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error,
		message: state.auth.message
	};
}

export default connect(mapStateToProps, { loginUser })(form(Login));