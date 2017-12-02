import * as types from '../constants/ActionTypes'
//暂存公开信息
export const genuisChange = (key, value) => dispatch => {
	dispatch({
		type: types.GENUIS_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}