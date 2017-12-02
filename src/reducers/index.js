import {combineReducers} from 'redux';

import login from './login'
import publick from './publick'
import users from './users'
import register from './register'

export default combineReducers({
	login,
	publick,
	users,
	register
})