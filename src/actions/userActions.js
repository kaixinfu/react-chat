import axios from 'axios'
import * as types from '../constants/ActionTypes'

// export const fetchUserInfo = () => dispatch => {
// 	dispatch({
// 		type: types.FETCH_USERINFO_REQUEST
// 	})
// 	return axios({
// 		method: 'GET',
// 		url: '/user/info',
// 	}).then(res => {
// 		console.log('res', res)
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