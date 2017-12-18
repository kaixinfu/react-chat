import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';

@connect(
	state => (
		{list: state.chatUsers.list || []}),
	dispatch => (
		{chatActions: bindActionCreators(chatActions, dispatch)})
)
export default class Leader extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		this.props.chatActions.fetchUsers('genuis')
	}
	render() {
		const {list} = this.props
		return (
			<div>
				<Button onClick={() => console.log('99999999999')}>default</Button><WhiteSpace />
				<UserCard list={list} />
			</div>
		);
	}
}
