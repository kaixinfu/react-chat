import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Result, Icon, WhiteSpace, List, Button, Modal } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import browerCookies from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import * as userActions from '../../actions/userActions'
// import '../../App.css';
const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

@connect(
	state => (
		{
			user: state.login.user || [],
			pathTo: state.login.pathTo || ''
		}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Main extends Component {
	constructor() {
		super()
	}
	goBrowerCookies = () => {
		browerCookies.erase('user_id')
		// window.location.href = window.location.href //刷新页面
		this.props.userActions.logoutClean()
	}
	onLoginout = () => {
		alert('注销', '确认退出登录？', [
			{ text: '取消', onPress: () => console.log('cancel') },
			{ text: '确认', onPress: () => this.goBrowerCookies() },
		])
	}
	render() {
		const {user} = this.props
		const myImg = () => <img style={{width: 50, height: 50}} src={require(`../../static/img/${user.avatar}.jpg`)} className="spe am-icon am-icon-md" alt="" />;
		return !_.isEmpty(user) ? (
			<div>
				<Result
					img={myImg()}
					title={user.user}
					message={user.type == 'leader' ? <div>{user.company}</div> : null}
				/>
				<List renderHeader={() => user.type == 'leader' ? '招聘简介' : '个人简介'} className="my-list">
					<Item wrap={true} multipleLine>
						{user.title}
						{
							user.desc.split('\n').map((item, key) => (
								<Brief key={key}>{item}</Brief>
							))
						}
						{user.money ? <Brief>薪资范围：{user.money}</Brief> : null}
					</Item>
				</List>
				<WhiteSpace />
				<Button onClick={this.onLoginout} type="primary">退出登录</Button>
			</div>
		) : <Redirect to={this.props.pathTo} />
	}
}
