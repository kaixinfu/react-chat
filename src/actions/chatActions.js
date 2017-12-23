import axios from 'axios'
import * as types from '../constants/ActionTypes'
import info from './common'
import io from 'socket.io-client'
const socket = io('ws://localhost:9000')
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
//获取聊天信息列表
export const getMsgs = () => dispatch => {
	return fetch('/user/msgs', {
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
			type: types.MSG_LIST,
			payload: res.data
		})
	})
}
//发送聊天信息
export const sendMsg = data => dispatch  => {
    socket.emit('sendmsg', data)
}
//接收聊天信息
export const receiveMsg = () => dispatch => {
	socket.on('receivemsg', data => {
        dispatch({
			type: types.MSG_RECEIVE,
			payload: data
		})
    })
}