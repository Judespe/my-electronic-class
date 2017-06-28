import Immutable from 'immutable';

export function updateObject(oldObject, values) {
	return Object.assign({}, oldObject, values);
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function setArrayItemsProperty(property, value, array, itemId) {
	return array.map(item => {
		if (itemId === undefined) {
			return Immutable.fromJS(item).set(property, value);
		} else {
			if (item.get('id') === itemId) {
				return Immutable.fromJS(item).set(property, value);
			} else {
				return item;
			}
		}
	})
}
