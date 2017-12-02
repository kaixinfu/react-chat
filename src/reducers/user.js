import * as types from '../constants/ActionTypes'
import {pathTo} from '../utils'

const initialState = {
	avatar: false,
	pathTo: ''
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.AUTH_SUCCESS:
			return {
				...state,
				avatar: true,
				pathTo: pathTo({...payload, avatar: true}),
			}
		default:
			return state
	}
}