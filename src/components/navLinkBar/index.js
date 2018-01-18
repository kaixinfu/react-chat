import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import '../../App.css';
import chat from "../../reducers/chat";

@withRouter
@connect(
	state => state.chat
)
export default class NavLinkBar extends Component {
	static PropTypes = {
		data: PropTypes.array.isRequired
	}
	constructor() {
		super()
	}
	render() {
		const navList = this.props.data.filter(item => !item.hide)
		const {pathname} = this.props.location
		return (
			<TabBar>
				{
					navList.map(item => (
						<TabBar.Item
							badge={item.path == '/msg' ? this.props.unread : 0}
							title={item.text}
							key={item.text}
							icon={{uri: require(`../../static/img/tabBar/${item.icon}.png`)}}
							selectedIcon={{uri: require(`../../static/img/tabBar/${item.icon}-active.png`)}}
							selected={item.path === pathname}
							onPress={() => this.props.history.push(item.path)}
						>
						</TabBar.Item>
					))
				}
			</TabBar>
		);
	}
}
