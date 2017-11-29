import axios from 'axios'
import * as types from '../constants/ActionTypes'
import {Toast} from 'antd-mobile'

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
			type: types.LOGIN_FAILURE,
			payload: error
		})
	})
}
//提交注册信息
export const postRegister = userInfo => dispatch => {
	const {
		user,
		password,
		passwordAgain,
		type
	} = userInfo
	const checkInfo = '用户名密码必须输入'
	const checkPassword = '两次密码输入不一致'
	//校验注册信息是否为空
	if (!user || !password || !passwordAgain || !type) {
		dispatch(errorMessage(checkInfo))
		info(checkInfo)
		return
	}
	if (password !== passwordAgain ) {
		dispatch(errorMessage(checkPassword))
		info(checkPassword)
		return
	}
	dispatch({
		type: types.REGISTER_REQUEST
	})
	return fetch('/user/register', {
		method: 'POST',
		'credentials' : 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userInfo)
	}).then(res => {
		return res.json()
	}).then(req => {
		if (req.code == 0) {
			info(req.message)
			dispatch({
				type: types.REGISTER_SUCCESS,
				payload: userInfo
			})
		} else {
			dispatch(errorMessage(req.message))
			info(req.message)
		}
	}).catch(error => {
		dispatch(errorMessage(error))
	})
}
//暂存注册信息
export const registerChange = (key, value) => dispatch => {
	dispatch({
		type: types.REGISTER_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}