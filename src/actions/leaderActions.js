import * as types from '../constants/ActionTypes'
//暂存公开信息
export const leaderChange = (key, value) => dispatch => {
	dispatch({
		type: types.LEADER_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}