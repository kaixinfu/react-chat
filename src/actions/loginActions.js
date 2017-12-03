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
// export const fetchUserInfo = () => dispatch => {
// 	dispatch({
// 		type: types.FETCH_USERINFO_REQUEST
// 	})
// 	return axios({
// 		method: 'GET',
// 		url: '/user/info',
// 	}).then(res => {
// 		dispatch({
// 			type: types.FETCH_USERINFO_SUCCESS,
// 			payload: res.data
// 		})
// 	}).catch(error => {
// 		dispatch({
// 			type: types.FETCH_USERINFO_FAILURE,
// 			payload: error
// 		})
// 	})
// }
//获取登录信息
export const fetchLogin = callback => dispatch => {
	dispatch({
		type: types.FETCH_USERINFO_REQUEST
	})
	return fetch('/user/info', {
		method: 'GET',
		'credentials' : 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'credentials' : 'include'
		}
	}).then((res) => {
		if (res && res.status == 200) {
			res.text().then(data => {
				const info = JSON.parse(data)
				// dispatch({
				// 	type: types.FETCH_USERINFO_SUCCESS,
				// 	payload: info.data
				// })
				dispatch({
					type: types.FETCH_USR_SUCCESS,
					payload: info.data
				})
				if (info.code == 0) {
					dispatch({
						type: types.LOGIN_FIRST,
						payload: JSON.parse(data).data
					})
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
//登录信息
export const loginChange = (key, value) => dispatch => {
	dispatch({
		type: types.LOGIN_CHANGE,
		payload: {
			key: key,
			value: value
		}
	})
}
//提交登录信息
export const postLogin = loginInfo => dispatch => {
	const {
		user,
		password,
	} = loginInfo
	const checkInfo = '用户名密码必须输入'
	//校验登录信息是否为空
	if (!user || !password) {
		dispatch(errorMessage(checkInfo))
		info(checkInfo)
		return
	}
	dispatch({
		type: types.LOGIN_REQUEST
	})
	return fetch('/user/login', {
		method: 'POST',
		'credentials' : 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginInfo)
	}).then(res => {
		return res.json()
	}).then(req => {
		if (req.code == 0) {
			info(req.message)
			dispatch({
				type: types.LOGIN_SUCCESS,
				payload: req.data
			})
		} else {
			dispatch(errorMessage(req.message))
			info(req.message)
		}
	}).catch(error => {
		dispatch(errorMessage(error))
	})
}