import React from 'react';

import './Menu.css';

const Menu = props => {

	const { 
		selectedData,
		deleteStudent, 
		setFormVisibility } = props;

	let isSelectedData = selectedData.size > 0;

	const deleteSelection = data => {
		data.map(student => {
			deleteStudent(student.toJS().id);
		});
	}

	return(
		<div id="action_bar" className="container-fluid">
			<button 
				type="button" 
				disabled={!isSelectedData}
				onClick={()=>{deleteSelection(selectedData)}}><span className="glyphicon glyphicon-trash"></span> supprimer la sélection</button>
			<button 
				type="button" 
				className="inverse"
				onClick={()=>setFormVisibility('SHOW_FORM')} >
				<span className="glyphicon glyphicon-plus"></span> ajouter un élève
			</button>
		</div>
	);
}

export default Menu;