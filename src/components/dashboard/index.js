import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { NavBar, Icon } from 'antd-mobile';
import Leader from '../leader'
import Genuis from '../genuis'
import Msg from '../msg'
import Main from '../main'
import NavLinkBar from '../navLinkBar'
import * as userActions from '../../actions/registerActions'
import '../../App.css';

@connect(
	state => (
		{user: state.user.info || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Dashboard extends Component {
	constructor() {
		super()
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
				path: '/boss',
				text: '应聘者',
				icon: 'boss',
				title: '应聘者列表',
				component: Leader,
				hide: user.type == 'genuis'
			},
			{
				path: '/genuis',
				text: '招聘者',
				icon: 'job',
				title: '公司列表',
				component: Genuis,
				hide: user.type == 'boss'
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
			<div className="App">
				<NavBar
					mode="dard"
					icon={<Icon type="left" />}
					onLeftClick={() => console.log('onLeftClick')}
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />,
					]}
				>{navList.find(v => v.path == pathname).title}</NavBar>
				<h1 className="App-title">Welcome to dashboard!</h1>
				<NavLinkBar data={navList} />
			</div>
		);
	}
}
