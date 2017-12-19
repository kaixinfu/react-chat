import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';

@connect(
	state => (
		{list: state.chatUsers.list || []}),
	dispatch => (
		{chatActions: bindActionCreators(chatActions, dispatch)})
)
@withRouter
export default class Chat extends Component {
	constructor() {
		super()
	}
	render() {
		console.log(this.props)
		console.log(this.props.match.params.user)
		return (
			<div>
				Chat
			</div>
		);
	}
}
