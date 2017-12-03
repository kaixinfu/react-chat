import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import '../../App.css';

@withRouter
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
