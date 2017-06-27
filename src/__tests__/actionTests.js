import * as actions from '../actions/actions';

describe('actions', () => {
	it('should show a form', () => {
		const expectedAction = {
			type: 'SET_FORM_VISIBILITY',
			filter: 'SHOW_FORM'
		}
		expect(actions.setFormVisibility('SHOW_FORM')).toEqual(expectedAction)
	})
})