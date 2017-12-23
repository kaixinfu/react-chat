import * as types from '../constants/ActionTypes'

const initialState = {
	mags: [],
	unread: 0
}

export default function (state = initialState, action) {
	
	const {
		type,
		payload
	} = action
	
	switch (type) {
		case types.MSG_LIST:
			return {
				...state,
                mags: [
					...payload
				],
                unread: payload.filter(item => !item.readed).length
			}
        case types.MSG_RECEIVE:
            return {
                ...state,
                mags: [
                    ...payload
                ]
            }
        case types.MSG_READED:
            return {
                ...state,
                mags: [
                    ...payload
                ]
            }
		default:
			return state
	}
}