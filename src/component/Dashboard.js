import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Route, Redirect} from 'react-router-dom'
import * as loginActions from '../actions/loginActions'
import logo from '../logo.svg';
import '../App.css';
import Lists from './Lists'
import Detail from './Detail'
import Test from './Test'

@connect(
	state => (
		{info: state.login.info || {}}),
	dispatch => (
		{loginActions: bindActionCreators(loginActions, dispatch)})
)
export default class Dashboard extends Component {
	constructor() {
		super()
	}
	render() {
		const {
			info: {
				state
			},
			match: {
				url
			}
		} = this.props
		const _url = url.lastIndexOf('/') > 0 ? url : url + '/'
		if (state)
			return (
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to Detail!</h1>
					</header>
					<Button onClick={() => this.props.loginActions.logout()} type="primary">注销</Button>
					<ul>
						<li>
							<Link to={`${_url}`}>dashboard</Link>
						</li>
						<li>
							<Link to={`${_url}/list`}>dashboard/list</Link>
						</li>
						<li>
							<Link to={`${_url}/detail`}>dashboard/detail</Link>
						</li>
					</ul>
					<Route path={`${_url}/`} exact component={Test}></Route>
					<Route path={`${_url}/list`} exact component={Lists}></Route>
					<Route path={`${_url}/detail`} exact component={Detail}></Route>
				</div>
			)
		return <Redirect to="/login"></Redirect>
	}
}
