import * as types from '../constants/ActionTypes'

const initialState = {
	list: []
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.FETCH_CHATUSER_SUCCESS:
			return {
				...state,
				list: [
					...state.list,
					...payload
				]
			}
		default:
			return state
	}
}