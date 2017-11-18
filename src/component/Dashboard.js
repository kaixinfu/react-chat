import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Route, Redirect} from 'react-router-dom'
import * as loginActions from '../actions/loginActions'
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
		console.log('Dashboard ===> render')
		
		if (this.props.info.state) {
			return (
				<div className="App">
					<Route path="/dashboard/" exact component={Test}></Route>
					<Route path="/dashboard/list" component={Lists}></Route>
					<Route path="/dashboard/detail" component={Detail}></Route>
					<Button onClick={() => this.props.loginActions.logout()} type="primary">注销</Button>
					<ul>
						<li>
							<Link to="/dashboard/">dashboard</Link>
						</li>
						<li>
							<Link to="/dashboard/list">dashboard/list</Link>
						</li>
						<li>
							<Link to="/dashboard/detail">dashboard/detail</Link>
						</li>
					</ul>
				</div>
			)
		}
		return <Redirect to="/login"></Redirect>
	}
}
