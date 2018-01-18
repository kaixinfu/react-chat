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
                unread: payload.msgs.filter(item => !item.readed).length
			}
        case types.MSG_RECEIVE:
            console.log('payload', payload)
            return {
                ...state,
                msgs: [
                    ...state.msgs,
                    payload
                ],
                unread: state.unread + 1
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