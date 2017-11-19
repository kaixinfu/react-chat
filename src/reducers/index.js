import {combineReducers} from 'redux';

import login from './login'
import users from './users'
import user from './user'

export default combineReducers({
	login,
	users,
	user
})