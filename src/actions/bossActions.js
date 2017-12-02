import * as types from '../constants/ActionTypes'
//暂存公开信息
export const bossChange = (key, value) => dispatch => {
	dispatch({
		type: types.BOSS_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}