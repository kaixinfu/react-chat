import {combineReducers} from 'redux';

import login from './login'
import users from './users'
import register from './register'

export default combineReducers({
	login,
	users,
	register
})