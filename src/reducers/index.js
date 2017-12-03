import {combineReducers} from 'redux';

import login from './login'
import boss from './boss'
import genuis from './genuis'
import user from './user'
import register from './register'

export default combineReducers({
	login,
	boss,
	genuis,
	user,
	register
})