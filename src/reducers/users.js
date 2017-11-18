import * as types from '../constants/ActionTypes'

const initialState = {
	list: [
		{name: '苍井空', age: 20},
		{name: '饭岛爱', age: 21},
		{name: '麻生希', age: 18},
	]
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.ADD_USER:
			return {
				...state,
				list: [
					...state.list,
					payload
				]
			}
		case types.REMOVE_USER:
			return {
				...state,
				list: {
					...payload
				}
			}
		default:
			return state
	}
}