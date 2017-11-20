import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../actions/registerActions'
import logo from '../logo.svg';
import '../App.css';
const Item = List.Item;

@connect(
	state => (
		{list: state.users.list || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Login extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Login!</h1>
				</header>
				<Button onClick={() => this.props.userActions.addUser({name: '毛衣妹妹' + Math.random(), age: '15'})} type="primary">Login</Button>
			</div>
		);
	}
}
