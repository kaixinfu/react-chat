import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/userActions'
import {BrowserRouter, Route, Redirect, withRouter} from 'react-router-dom'
import '../../App.css';

@connect(
	state => (
		{info: state.user.info || {}}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
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
		this.props.userActions.fetchUser(this.props.history)
	}
	render() {
		return null
	}
}
