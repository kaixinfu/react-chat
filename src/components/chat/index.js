import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace, Button, List, InputItem, NavBar } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import io from 'socket.io-client'
import { withRouter } from 'react-router-dom'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';
const socket = io('ws://localhost:9000')
const Item = List.Item

@connect(
	state => state || {},
	dispatch => (
		{chatActions: bindActionCreators(chatActions, dispatch)})
)
@withRouter
export default class Chat extends Component {
	constructor() {
		super()
		this.state = {
            text: '',
			msg: []
		}
	}
	componentDidMount() {
		// this.props.chatActions.getMsgs()
		// this.props.chatActions.receiveMsg()
	}
    handleSubmite = () => {
		this.props.chatActions.sendMsg({
            from: this.props.login.user._id,
            to: this.props.match.params.user,
            content: this.state.text
		})
		this.setState({text: ''})
	}
	render() {
		const { msgs } = this.props.chat
		const user = this.props.match.params.user
		return (
			<div id='chat-page'>
				<NavBar mode='dark'>{this.props.match.params.user}</NavBar>
				<List></List>
				{
					msgs.map((item, key) => {
						return item.from == user ?
							<List key={key}>
								<Item>
                                   {item.content}
								</Item>
							</List>
							:
							<List key={key}>
								<Item
									extra={'avatar'}
									className='chat-me'
									>
									{item.content}
								</Item>
							</List>
					})
				}
				<div className='stick-footer'>
					<List>
						<InputItem
							placeholder='请输入信息'
							value={this.state.text}
							onChange={(text) => this.setState({text: text})}
							extra={<span onClick={this.handleSubmite}>发送</span>}>
							消息
						</InputItem>
					</List>
				</div>
			</div>
		);
	}
}
