import * as types from '../constants/ActionTypes'

const initialState = {
	info: {
		name: 'liuaixin',
		age: '25',
		state: false,
	}
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.LOGIN_REQUEST:
			return {
				...state
			}
		case types.LOGIN_SUCCESS:
			return {
				...state,
				info: {
					...state.info,
					...payload
				}
			}
		case types.LOGIN_REQUEST_FAILURE:
			return {
				...state
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