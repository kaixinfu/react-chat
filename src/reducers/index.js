import {combineReducers} from 'redux';

import login from './login'
import leader from './leader'
import genuis from './genuis'
import user from './user'
import chatUsers from './chatUsers'
import register from './register'
import chat from './chat'

export default combineReducers({
	login,//登录
	leader,
	genuis,
	user,
	chatUsers,
	register,
    chat,//聊天消息
})