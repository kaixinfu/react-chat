import {combineReducers} from 'redux';

import login from './login'
import leader from './leader'
import genuis from './genuis'
import user from './user'
import chatUsers from './chatUsers'
import register from './register'

export default combineReducers({
	login,
	leader,
	genuis,
	user,
	chatUsers,
	register
})