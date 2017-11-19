import axios from 'axios'
import * as types from '../constants/ActionTypes'

//错误提示
function errorMessage(message) {
	return {
		message,
		type: types.ERROR_MASSAGE
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
//提交注册信息
export const postRegister = (name, password, passwordAgain, type) => dispatch => {
	//校验注册信息是否为空
	if (!!!name || !!!password || !!!passwordAgain || !!!type) return errorMessage('用户名密码必须输入')
	if (password !== passwordAgain ) return errorMessage('两次密码输入不一致')
	dispatch({
		type: types.REGISTER_REQUEST
	})
	return axios({
		method: 'POST',
		url: '/user/register',
		data: {
			name: name,
			password: password,
			passwordAgain: passwordAgain,
			type: type
		}
	}).then(res => {
		console.log('postRegister ==========> ', res)
		dispatch({
			type: types.LOGIN_SUCCESS,
			payload: res.data
		})
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