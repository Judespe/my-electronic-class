import { List, Map } from 'immutable';

export const students = List([
	Map({
		id: 1,
		lastName: 'Hoppus',
		firstName: 'Mark',
		avatar: 'https://s-media-cache-ak0.pinimg.com/originals/da/c5/34/dac5346a79bb06f220cf90624b303daf.jpg',
		isSelected: false
	}),
	Map({
		id: 2,
		lastName: 'Armstrong',
		firstName: 'Billie Joe',
		avatar: 'https://lerocklemag.files.wordpress.com/2013/03/billie-joe-armstrong.jpg',
		isSelected: false
	}),
	Map({
		id: 3,
		lastName: 'Grohl',
		firstName: 'Dave',
		avatar: 'http://www.arroba.fm/IRAPUATO/wp-content/uploads/2015/07/davegrohl5.jpg',
		isSelected: false
	}),
	Map({
		id: 4,
		lastName: 'Bellamy',
		firstName: 'Matthew',
		avatar: 'https://i.skyrock.net/2166/75842166/pics/2972749097_1_3_BlMCXFaa.jpg',
		isSelected: false
	}),
	Map({
		id: 5,
		lastName: 'Adkins',
		firstName: 'Jim',
		avatar: 'https://s3.amazonaws.com/bit-photos/large/6818388.jpeg',
		isSelected: false
	}),
]);