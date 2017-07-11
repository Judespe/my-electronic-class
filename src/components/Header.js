import React from 'react';
import './Header.css';

const Header = props => {

	const { logoutUser } = props;
	
	return(
		<header className="container-fluid">
      <h1>Ma Classe Electronique</h1>
      <div className="logout_button">
      	<button onClick={()=>{logoutUser()}}>déconnexion</button>
      </div>
		</header>
	)
}

export default Header;