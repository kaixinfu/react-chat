import * as types from '../constants/ActionTypes'

const initialState = {
	msgs: [],
    users: {},
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
                msgs: [
                    ...state.msgs,
					...payload.msgs
				],
                users: {
                    ...payload.users
                },
                unread: payload.msgs.filter(item => !item.readed && item.to == payload._id).length
			}
        case types.MSG_RECEIVE:
            const num = payload.data.to == payload._id ? 1 : 0
            return {
                ...state,
                msgs: [
                    ...state.msgs,
                    payload.data
                ],
                unread: state.unread + num
            }
        case types.MSG_READED:
            return {
                ...state,
                msgs: [
                    ...payload
                ]
            }
		default:
			return state
	}
}