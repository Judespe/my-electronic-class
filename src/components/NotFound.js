import React from 'react';

import ghostImg from '../static/img/404-ghost.png';

const NotFound = props => {

	return(
		<div id='404-container'>
			<img src={ghostImg} alt="fantôme pour illustrer une page introuvable" />
			<h2>La page demandée n'existe pas</h2>
		</div>
	)
}

export default NotFound;