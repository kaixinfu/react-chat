import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/userActions'
import '../../App.css';

@connect(
	state => (
		{info: state.user.info || {}}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class LoginRoute extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		this.props.userActions.fetchUser()
	}
	render() {
		console.log('Lists ===> LoginRoute', this.props.info)
		return null
	}
}
