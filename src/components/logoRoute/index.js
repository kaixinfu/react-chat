import React, { Component } from 'react';
import axios from 'axios'
export default class LoginRoute extends Component {
	constructor() {
		super()
		console.log('.......super')
	}
	componentDidMount() {
		axios.get('/user/info').then(res =>{
			console.log('res =========> ', res)
				if (res && res.status ==200) {
					console.log('res', res)
				}
		}).catch(error => {
			console.log(error)
		})
	}
	render() {
		console.log('Lists ===> LoginRoute')
		return null
	}
}
