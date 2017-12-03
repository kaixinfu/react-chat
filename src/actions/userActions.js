import axios from 'axios'
import {Toast} from 'antd-mobile'
import * as types from '../constants/ActionTypes'

//错误提示
function errorMessage(message) {
	return {
		type: types.LOGIN_FAILURE,
		payload: message
	}
}
function info(error) {
	Toast.info(error, 1);
}

export const update = data => dispatch => {
	return fetch('/user/update',{
		method: 'POST',
		'credentials' : 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(res => {
		return res.json()
	}).then(req => {
		if (req.code == 0) {
			info(req.message)
			dispatch({
				type: types.AUTH_SUCCESS,
				payload: req.data
			})
		} else {
			dispatch(errorMessage(req.message))
			info(req.message)
		}
	})
}