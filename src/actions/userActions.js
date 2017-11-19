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

export const fetchUser = callback => dispatch => {
	dispatch({
		type: types.FETCH_USERINFO_REQUEST
	})
	return fetch('/user/info').then((res) => {
		if (res && res.status == 200) {
			res.text().then(data => {
				const info = JSON.parse(data)
				dispatch({
					type: types.FETCH_USERINFO_SUCCESS,
					payload: info
				})
				if (info.code == 0) {
					console.log('==> 0')
				} else {
					callback.push('/login')
				}
			})
		}
	}).catch(error => {
		dispatch({
			type: types.FETCH_USERINFO_FAILURE,
			payload: error
		})
	})
}