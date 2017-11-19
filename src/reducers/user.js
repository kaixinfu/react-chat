import * as types from '../constants/ActionTypes'

const initialState = {
	info: {
		code: ''
	}
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	switch (type) {
		case types.FETCH_USERINFO_REQUEST:
			return {
				...state
			}
		case types.FETCH_USERINFO_SUCCESS:
			return {
				...state,
				info: {
					...state.info,
					...payload
				}
			}
		case types.FETCH_USERINFO_FAILURE:
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