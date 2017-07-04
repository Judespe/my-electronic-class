import React from 'react';

import './Login.css';

class Login extends React.Component {

	render() {
		return(
			<div className="loginBox">
				<form className="login">
					<h1>Connexion à votre espace :</h1>
					<div className="fields-container">
						<input type="email" placeholder="Email" required ref={input => {this.boxInput = input}} />
						<input type="password" placeholder="Mot de passe" required ref={input => {this.boxInput = input}} />
						<button type="submit">Valider</button>
					</div>
				</form>
			</div>
		)
	}

}

export default Login;