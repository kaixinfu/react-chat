import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio, Toast} from 'antd-mobile';
import {bindActionCreators} from 'redux'
import {Redirect} from 'react-router-dom'
import * as registerActions from '../../actions/registerActions'
import '../../App.css';
import Logo from '../../components/logo'
const RadioItem = Radio.RadioItem;

@connect(
	state => (
		{
			register: state.register.info || {},
			pathTo: state.register.pathTo || ''
		}),
	dispatch => (
		{registerActions: bindActionCreators(registerActions, dispatch)})
)
export default class Register extends Component {
	static PropTypes = {
		registerActions: PropTypes.object.isRequired
	}
	constructor() {
		super()
		this.state = {
			data: [
				{ value: 'leader', label: 'leader' },
				{ value: 'genuis', label: '求职' },
			]
		};
	}
	handleChage = (key, value) => {
		this.props.registerActions.registerChange(key, value)
	}
	handleSubmit = () => {
		this.props.registerActions.postRegister(this.props.register)
	}
	render() {
		const {
			user,
			password,
			passwordAgain,
			type
		} = this.props.register
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
						onChange={(e) => this.handleChage('user', e)}
						moneyKeyboardAlign="left"
					>用户</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={password}
						onChange={(e) => this.handleChage('password', e)}
						moneyKeyboardAlign="left"
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={passwordAgain}
						onChange={(e) => this.handleChage('passwordAgain', e)}
						moneyKeyboardAlign="left"
					>确认密码</InputItem>
				</List>
				<WhiteSpace />
				<List>
					{this.state.data.map(i => (
						<RadioItem key={i.value} checked={type === i.value} onChange={() => this.handleChage('type', i.value)}>
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
