import * as types from '../constants/ActionTypes'
import {pathTo} from '../utils'

const initialState = {
	info: {
		code: '',
		pathTo: '',
		user: {
			user: '',
			password: ''
		}
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
				info: {
					...state.info,
					user:{
						...state.info.user,
						[key]: value
					}
				}
			}
		case types.LOGIN_SUCCESS:
			return {
				...state,
				info: {
					...state.info,
					pathTo: pathTo(payload),
				}
			}
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