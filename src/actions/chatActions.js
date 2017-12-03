import axios from 'axios'
import * as types from '../constants/ActionTypes'
import info from './common'
//获取列表信息
export const fetchUsers = type => dispatch => {
	dispatch({
		type: types.LOGIN_REQUEST
	})
	return fetch(`/user/list?type=${type}`, {
		method: 'GET',
		'credentials' : 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	}).then(res => {
		return res.json()
	}).then(res => {
		dispatch({
			type: types.FETCH_CHATUSER_SUCCESS,
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