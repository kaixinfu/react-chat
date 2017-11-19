import React, { Component } from 'react';
import {connect} from 'react-redux'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio, Toast} from 'antd-mobile';
import {bindActionCreators} from 'redux'
import {Redirect} from 'react-router-dom'
import * as userActions from '../../actions/userActions'
import '../../App.css';
import Logo from '../../components/logo'
const RadioItem = Radio.RadioItem;

@connect(
	state => (
		{
			user: state.user.info || {},
			pathTo: state.user.pathTo || ''
		}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Register extends Component {
	constructor() {
		super()
		this.state = {
			data: [
				{ value: 'boss', label: 'boss' },
				{ value: 'genuis', label: '牛人' },
			]
		};
	}
	handleClick = (key, value) => {
		this.props.userActions.registerChange(key, value)
	}
	handleSubmit = () => {
		this.props.userActions.postRegister(this.props.user)
	}
	render() {
		const {
			user,
			password,
			passwordAgain,
			type
		} = this.props.user
		if (this.props.pathTo) {
			return <Redirect to={this.props.pathTo} />
		}
		return (
			<div className="App">
				<Logo />
				<h1 className="App-title">注册页!</h1>
				<List>
					<InputItem
						// type='money'
						clear
						value={user}
						onChange={(e) => this.handleClick('user', e)}
						moneyKeyboardAlign="left"
					>用户</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={password}
						onChange={(e) => this.handleClick('password', e)}
						moneyKeyboardAlign="left"
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={passwordAgain}
						onChange={(e) => this.handleClick('passwordAgain', e)}
						moneyKeyboardAlign="left"
					>确认密码</InputItem>
				</List>
				<WhiteSpace />
				<List>
					{this.state.data.map(i => (
						<RadioItem key={i.value} checked={type === i.value} onChange={() => this.handleClick('type', i.value)}>
							{i.label}
						</RadioItem>
					))}
				</List>
				<WhiteSpace />
				<Button onClick={this.handleSubmit} type="primary">注册</Button>
			</div>
		);
	}
}
