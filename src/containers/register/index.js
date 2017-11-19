import React, { Component } from 'react';
import {connect} from 'react-redux'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio} from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/userActions'
import '../../App.css';
import Logo from '../../components/logo'
const RadioItem = Radio.RadioItem;

@connect(
	state => (
		{user: state.user || {}}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Register extends Component {
	constructor() {
		super()
		this.state = {
			_type: 'genuis',
		};
		this.onChange = this.onChange.bind(this);
	}
	onChange = (_type) => {
		console.log('checkbox');
		this.setState({
			_type,
		});
	};
	handle = (key, value) => {
		this.props.userActions.registerChange(key, value)
	}
	render() {
		const data = [
			{ value: 'boss', label: 'boss' },
			{ value: 'genuis', label: '牛人' },
		];
		const {
			name,
			password,
			passwordAgain,
			type
		} = this.props.user
		const { _type } = this.state;
		return (
			<div className="App">
				<Logo />
				<h1 className="App-title">注册页!</h1>
				<List>
					<InputItem
						// type='money'
						clear
						value={name}
						onChange={(e) => this.handle('name', e)}
						moneyKeyboardAlign="left"
					>用户</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={password}
						onChange={(e) => this.handle('password', e)}
						moneyKeyboardAlign="left"
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						clear
						value={passwordAgain}
						onChange={(e) => this.handle('passwordAgain', e)}
						moneyKeyboardAlign="left"
					>确认密码</InputItem>
				</List>
				<WhiteSpace />
				<List>
					{data.map(i => (
						<RadioItem key={i.value} checked={_type === i.value} onChange={() => this.onChange(i.value)}>
							{i.label}
						</RadioItem>
					))}
				</List>
				<WhiteSpace />
				<Button onClick={this.register} type="primary">注册</Button>
			</div>
		);
	}
}
