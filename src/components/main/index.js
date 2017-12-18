import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Result, Icon, WhiteSpace, List, Button } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import browerCookies from 'browser-cookies'
import * as userActions from '../../actions/registerActions'
// import '../../App.css';
const Item = List.Item;
const Brief = Item.Brief;

@connect(
	state => (
		{user: state.login.info.user || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Main extends Component {
	constructor() {
		super()
	}
	onLoginout = () => {
		console.log('....')
		browerCookies.erase('user_id')
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
		) : null
	}
}
