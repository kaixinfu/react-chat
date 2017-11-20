import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import * as loginActions from '../../actions/loginActions'
import '../../App.css';
import Logo from '../../components/logo'

@connect(
	state => ({
		user: state.login.info.user || [],
		pathTo: state.login.info.pathTo || ''
	}),
	dispatch => (
		{loginActions: bindActionCreators(loginActions, dispatch)})
)
export default class Login extends Component {
	constructor() {
		super()
		this.register = this.register.bind(this);
	}
	register() {
		this.props.history.push('/register')
	}
	handleChage = (key, value) => {
		this.props.loginActions.loginChange(key, value)
	}
	handleSubmit = () => {
		this.props.loginActions.postLogin(this.props.user)
	}
	render() {
		const {
			user,
			password
		} = this.props.user
		if (this.props.pathTo) {
			return <Redirect to={this.props.pathTo} />
		}
		return (
			<div className="App">
				<Logo />
				<h1 className="App-title">欢迎来到 开心招聘网!</h1>
				<WhiteSpace />
				<WingBlank>
					<List>
						<InputItem
							// type='money'
							clear
							value={user}
							onChange={(e) => this.handleChage('user', e)}
							moneyKeyboardAlign="left"
						>用户</InputItem>
						<InputItem
							type='password'
							clear
							value={password}
							onChange={(e) => this.handleChage('password', e)}
							moneyKeyboardAlign="left"
						>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button onClick={this.handleSubmit} type="primary">登录</Button>
					<WhiteSpace />
					<Button onClick={this.register} type="primary">注册</Button>
				</WingBlank>
			</div>
		);
	}
}
