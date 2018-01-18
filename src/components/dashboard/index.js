import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Switch, Route} from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import Leader from '../leader'
import Genuis from '../genuis'
import Msg from '../msg'
import Main from '../main'
import NavLinkBar from '../navLinkBar'
import * as chatActions from '../../actions/chatActions'
// import '../../App.css';

@connect(
	state => (
		{user: state.login.user || []}),
	dispatch => (
		{chatActions: bindActionCreators(chatActions, dispatch)})
)
export default class Dashboard extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
        this.props.chatActions.getMsgs()
        this.props.chatActions.receiveMsg()
	}
	render() {
		const {
			user,
			location: {
				pathname
			}
		} = this.props
		const navList = [
			{
				path: '/leader',
				text: 'genuis',
				icon: 'leader',
				title: 'genuis列表',
				component: Leader,
				hide: user.type == 'genuis'
			},
			{
				path: '/genuis',
				text: 'leader',
				icon: 'genuis',
				title: 'leader列表',
				component: Genuis,
				hide: user.type == 'leader'
			},
			{
				path: '/msg',
				text: '消息',
				icon: 'msg',
				title: '消息列表',
				component: Msg,
			},
			{
				path: '/main',
				text: '我的',
				icon: 'main',
				title: '个人中心',
				component: Main,
			}
		]
		return (
			<div>
				<NavBar
					className='fixd-header'
					mode="dard"
				>{navList.find(v => v.path == pathname).title}</NavBar>
				<div style={{ marginTop: 40}}>
					<Switch>
						{navList.map((item, key) => <Route key={key} path={item.path} component={item.component}></Route>)}
					</Switch>
				</div>
				<NavLinkBar data={navList} />
			</div>
		);
	}
}
