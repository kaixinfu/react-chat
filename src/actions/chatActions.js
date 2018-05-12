import axios from 'axios'
import * as types from '../constants/ActionTypes'
import info from './common'
import io from 'socket.io-client'

const socket = io('ws://localhost:9000')

function msgRead(from, userId, num) {
    return {type: types.MSG_READ, payload: {from, userId, num}}
}

//获取列表信息
export const fetchUsers = type => dispatch => {
    dispatch({
        type: types.LOGIN_REQUEST
    })
    return fetch(`/user/list?type=${type}`, {
        method: 'GET',
        'credentials': 'include',
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
export const getMsgs = () => (dispatch, getState) => {
    return fetch('/user/msgs', {
        method: 'GET',
        'credentials': 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        const {_id} = getState().user.info
        dispatch({
            type: types.MSG_LIST,
            payload: {msgs: res.data, users: res.users, _id}
        })
    })
}
//发送聊天信息
export const sendMsg = data => dispatch => {
    socket.emit('sendmsg', data)
}
//接收聊天信息
export const receiveMsg = () => (dispatch, getState) => {
    socket.on('receivemsg', data => {
        const {_id} = getState().user.info
        dispatch({
            type: types.MSG_RECEIVE,
            payload: {data, _id}
        })
    })
}
//同步未读聊天信息
export const readMsg = from => (dispatch, getState) => {
    console.log('from....', from)
    return fetch('/user/readMsg', {
        method: 'POST',
        'credentials': 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({from})
    }).then(re => {
        return re.json()
    }).then(res => {
        const userId = getState().user._id;
        dispatch(msgRead({userId, from, num: res.num}))
    }).catch(e => {
        console.log('readMsg ========> e', e)
    })
}