import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import * as userActions from '../../actions/userActions'
import '../../App.css';
import Logo from '../../components/logo'

@connect(
	state => (
		{list: state.users.list || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Login extends Component {
	constructor() {
		super()
		this.register = this.register.bind(this);
	}
	register() {
		this.props.history.push('/register')
	}
	render() {
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
							moneyKeyboardAlign="left"
						>用户</InputItem>
						<InputItem
							// type='money'
							clear
							moneyKeyboardAlign="left"
						>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button type="primary">登录</Button>
					<WhiteSpace />
					<Button onClick={this.register} type="primary">注册</Button>
				</WingBlank>
			</div>
		);
	}
}
