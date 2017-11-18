import * as types from '../constants/ActionTypes'

const initialState = {
	info: {
		name: 'liukaixin',
		state: false,
	}
}

export default function (state = initialState, action) {
	
	const {
		type,
	} = action
	
	switch (type) {
		case types.LOGIN:
			return {
				...state,
				info: {
					...state.info,
					state: true
				}
			}
		case types.LOGOUT:
			return {
				...state,
				info: {
					...state.info,
					state: false
				}
			}
		default:
			return state
	}
}