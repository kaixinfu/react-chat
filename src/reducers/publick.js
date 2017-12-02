import * as types from '../constants/ActionTypes'
import {pathTo} from '../utils'

const initialState = {
	title: '',
	company: '',
	money: '',
	desc: '',
	pathTo: ''
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.PUBLICK_CHANGE:
			const {
				key,
				value
			} = payload
			return {
				...state,
				[key]: value
			}
		case types.AUTH_SUCCESS:
			return {
				...state,
				pathTo: pathTo({...payload, avatar: true}),
			}
		default:
			return state
	}
}