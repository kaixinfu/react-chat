import * as types from '../constants/ActionTypes'

const initialState = {
	isAuth: '',
	massage: '',
	name: '',
	password:'',
	passwordAgain: '',
	type: ''
}

export default function (state = initialState, action) {
	const {
		type,
		payload
	} = action
	switch (type) {
		case types.REGISTER_REQUEST:
			return {
				...state
			}
		case types.REGISTER_SUCCESS:
			return {
				...state,
				...payload,
				isAuth: true,
			}
		case types.REGISTER_FAILURE:
			return {
				...state
			}
		case types.REGISTER_CHANGE:
			const {
				key,
				value
			} = payload
			return {
				...state,
				[key]: value
			}
		case types.LOGOUT:
			return {
				...state,
				isAuth: false,
				massage: payload
			}
		default:
			return state
	}
}