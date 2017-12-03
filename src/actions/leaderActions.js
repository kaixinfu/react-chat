import axios from 'axios'
import * as types from '../constants/ActionTypes'
import info from './common'
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
//获取求职列表信息
export const fetchGenuis = _ => dispatch => {
	dispatch({
		type: types.LOGIN_REQUEST
	})
	return fetch('/user/list?type=genuis', {
		method: 'GET',
		headers: {'X-Custom-Header': 'foobar'}
	}).then(res => {
		return res.json()
	}).then(res => {
		dispatch({
			type: types.FETCH_GENUIS_SUCCESS,
			payload: res.data
		})
		info(res.message)
	}).catch(error => {
		dispatch({
			type: types.LOGIN_FAILURE,
			payload: error
		})
	})
}