import * as types from '../constants/ActionTypes'

const initialState = {
	title: '',
	desc: '',
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
		default:
			return state
	}
}