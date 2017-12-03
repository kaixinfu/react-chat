import * as types from '../constants/ActionTypes'

const initialState = {
	avatar: '',
	title: '',
	desc: '',
	list: []
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.GENUIS_CHANGE:
			const {
				key,
				value
			} = payload
			return {
				...state,
				[key]: value
			}
		case types.FETCH_GENUIS_SUCCESS:
			return {
				...state,
				list: payload
			}
		default:
			return state
	}
}