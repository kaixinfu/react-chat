import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../../actions/loginActions'
import { withRouter } from 'react-router-dom'
import '../../App.css';

@connect(
	state => (
		{info: state.login.info || {}}),
	dispatch => (
		{loginActions: bindActionCreators(loginActions, dispatch)})
)
@withRouter
export default class LoginRoute extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		const publick = ['/login', '/register']
		const pathname = this.props.location.pathname
		if (publick.indexOf(pathname) > -1) {
			return null
		}
		this.props.loginActions.fetchLogin(this.props.history, this.props)
	}
	render() {
		return null
	}
}
