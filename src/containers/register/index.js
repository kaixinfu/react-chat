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
		{list: state.users.list || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Register extends Component {
	constructor() {
		super()
		this.state = {
			type: 'genuis',
		};
		this.onChange = this.onChange.bind(this);
	}
	onChange = (type) => {
		console.log('checkbox');
		this.setState({
			type,
		});
	};
	render() {
		const data = [
			{ value: 'boss', label: 'boss' },
			{ value: 'genuis', label: '牛人' },
		];
		const { type } = this.state;
		return (
			<div className="App">
				<Logo />
				<h1 className="App-title">注册页!</h1>
				<List>
					<InputItem
						type='money'
						clear
						moneyKeyboardAlign="left"
					>用户</InputItem>
					<WhiteSpace />
					<InputItem
						type='money'
						clear
						moneyKeyboardAlign="left"
					>密码</InputItem>
					<WhiteSpace />
					<InputItem
						type='money'
						clear
						moneyKeyboardAlign="left"
					>确认密码</InputItem>
				</List>
				<WhiteSpace />
				<List>
					{data.map(i => (
						<RadioItem key={i.value} checked={type === i.value} onChange={() => this.onChange(i.value)}>
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
