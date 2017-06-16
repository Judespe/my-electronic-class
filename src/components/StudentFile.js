import React from 'react';

import defaultAvatar from '../static/img/default-avatar.png';

let StudentFile = props => {

	const {
		student,
		updateForm,
		setFileVisibility	} = props;

	const avatar = student.avatar;
	if (avatar) {
		var style = {
  		backgroundImage: `url(${avatar})`
  	}
	} else {
  	var style = {
			backgroundImage: `url(${defaultAvatar})`
		}
	}

	return(
		<div className="file-background">
			<div className="file-container">
				<button id="close_window" onClick={()=>setFileVisibility('HIDE_FILE')}>&times;</button>

				<div className="file_header">
					<div id="studentFile_avatar" style={style}></div>
					<div className="h2-like">
						<div className="lastName">{student.lastName}</div>
						<div className="firstName">{student.firstName}</div>
					</div>
				</div>

				<div id="studentFile">
					<div className="file_section">
						<div className="h3-like">-  Informations générales :</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Email :</div>
							<div className="alignleft col-xs-7">{student.email}</div>
						</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Téléphone :</div>
							<div className="alignleft col-xs-7">{student.phone}</div>
						</div>
						<hr/>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Adresse :</div>
							<div className="alignleft col-xs-7">{student.address}</div>
						</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Code Postal :</div>
							<div className="alignleft col-xs-7">{student.postal_code}</div>
						</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Ville :</div>
							<div className="alignleft col-xs-7">{student.city}</div>
						</div>
					</div>
					<div className="file_section">
						<div className="h3-like">-  Contact en cas d'urgence :</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Nom du contact :</div>
							<div className="alignleft col-xs-7">{student.emergency_lastName} {student.emergency_firstName}</div>
						</div>
						<div className="inline-field">
							<div className="label-like col-xs-4 col-xs-offset-1">Téléphone du contact :</div>
							<div className="alignleft col-xs-7">{student.emergency_phone}</div>
						</div>
					</div>
					<div className="file_section">
						<div className="h3-like">-  Commentaires :</div>
						<div>
							<div className="alignleft col-xs-offset-1">{student.comments ? student.comments : 'Aucun commentaire pour le moment'}</div>
						</div>
					</div>

					<div className="bottom_button">
						<button 
							className="btn_alert"	type="button"	onClick={()=>updateForm(student.id)} ><span className="glyphicon glyphicon-pencil"></span>éditer</button>
						<button className="btn_primary" type="button" onClick={()=>setFileVisibility('HIDE_FILE')}>Fermer</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentFile;