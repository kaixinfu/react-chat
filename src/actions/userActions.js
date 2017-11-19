import axios from 'axios'
import * as types from '../constants/ActionTypes'

export const fetchUserInfo = () => dispatch => {
	dispatch({
		type: types.FETCH_USERINFO_REQUEST
	})
	return axios({
		method: 'GET',
		url: '/user/info',
	}).then(res => {
		console.log('res', res)
		dispatch({
			type: types.FETCH_USERINFO_SUCCESS,
			payload: res.data
		})
	}).catch(error => {
		dispatch({
			type: types.FETCH_USERINFO_FAILURE,
			payload: error
		})
	})
}

export const fetchUser = () => dispatch => {
	dispatch({
		type: types.FETCH_USERINFO_REQUEST
	})
	return fetch('/user/info').then((res) => {
		if (res && res.status == 200) {
			res.text().then(data => {
				dispatch({
					type: types.FETCH_USERINFO_SUCCESS,
					payload: JSON.parse(data)
				})
			})
		}
	}).catch(error => {
		dispatch({
			type: types.FETCH_USERINFO_FAILURE,
			payload: error
		})
	})
}