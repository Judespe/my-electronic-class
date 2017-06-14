import React from 'react';
import './Menu.css';

const Menu = props => {

	const { setFormVisibility } = props;

	return(
		<div id="action_bar" className="container-fluid">
			<button type="button"><span className="glyphicon glyphicon-trash"></span> supprimer la sélection</button>
			<button 
				type="button" 
				className="inverse"
				onClick={()=>setFormVisibility('SHOW_FORM')} >
				<span className="glyphicon glyphicon-plus"></span> ajouter un élève
			</button>
		</div>
	);
}
			// <button type="button"><span className="glyphicon glyphicon-send"></span> renvoyer l'invitation</button>

export default Menu;