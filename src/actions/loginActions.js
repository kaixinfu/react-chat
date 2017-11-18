import axios from 'axios'
import * as types from '../constants/ActionTypes'

//注销
export function logout() {
	return {
		type: 'LOGOUT',
	}
}
//获取用户信息
export const fetchUser = _ => dispatch => {
	dispatch({
		type: types.LOGIN_REQUEST
	})
	return axios({
		method: 'GET',
		url: '/data',
	}).then(res => {
		dispatch({
			type: types.LOGIN_SUCCESS,
			payload: res.data
		})
	}).catch(error => {
		dispatch({
			type: types.LOGIN_REQUEST_FAILURE,
			payload: error
		})
	})
}