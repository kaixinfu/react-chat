import * as types from '../constants/ActionTypes'
import {pathTo} from '../utils'

const initialState = {
	code: '',
	pathTo: '',
	user: {
	
	}
}

export default function (state = initialState, action) {
	const {
		type,
		payload
	} = action
	switch (type) {
		case types.LOGIN_CHANGE:
			const {
				key,
				value
			} = payload
			return {
				...state,
				user:{
					...state.user,
					[key]: value
				}
			}
		case types.LOGIN_SUCCESS:
			return {
				...state,
				pathTo: pathTo(payload),
				user: {
					...state.user,
					...payload
				}
			}
		case types.LOGIN_FIRST:
			return {
				...state,
				user: {
					...payload
				}
			}
		case types.FETCH_USERINFO_REQUEST:
			return {
				...state
			}
		case types.FETCH_USERINFO_SUCCESS:
			return {
				...state,
				user: {
					...state.user,
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
				state: false
			}
		case types.USERLOGOUT:
			return {
				...initialState,
				pathTo: '/login',
			}
		default:
			return state
	}
}