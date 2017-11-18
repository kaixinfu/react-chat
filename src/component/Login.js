import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Redirect } from 'react-router-dom'
import * as loginActions from '../actions/loginActions'
import logo from '../logo.svg';
import '../App.css';

@connect(
	state => (
		{info: state.login.info || {}}),
	dispatch => (
		{loginActions: bindActionCreators(loginActions, dispatch)})
)
export default class Login extends Component {
	constructor() {
		super()
	}
	render() {
		if (this.props.info.state) {
			return <Redirect to="/dashboard"></Redirect>
		}
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to login，请登录!</h1>
				</header>
				<Button onClick={() => this.props.loginActions.login()} type="primary">登录</Button>
			</div>
		);
	}
}
