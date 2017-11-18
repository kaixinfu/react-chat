import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Route} from 'react-router-dom'
import * as userActions from '../actions/userActions'
import logo from '../logo.svg';
import '../App.css';
import Lists from './Lists'
import Detail from './Detail'
import Test from './Test'
const Item = List.Item;

@connect(
	state => (
		{list: state.users.list || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Dashboard extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div className="App">
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
				<Route path="/dashboard/" exact component={Test}></Route>
				<Route path="/dashboard/list" component={Lists}></Route>
				<Route path="/dashboard/detail" component={Detail}></Route>
			</div>
		);
	}
}
