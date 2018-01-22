import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace, Button, List, InputItem, NavBar, Icon } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import io from 'socket.io-client'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';
import {getChatId} from '../../utils'
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
		if (_.isEmpty(this.props.chat.msgs)) {
            this.props.chatActions.getMsgs()
            this.props.chatActions.receiveMsg()
		}
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
		const chat_id = getChatId(this.props.match.params.user, this.props.user.info._id)
		const user = this.props.match.params.user
		const users = this.props.chat.users
		if (!!!users[user]) {
			return null
		}
		return (
			<div id='chat-page'>
				<NavBar
					mode='dark'
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
				>
					{users[user].name}
				</NavBar>
				{
					msgs.filter(v => v.chat_id == chat_id).map((item, key) => {
						const avatar = require(`../../static/img/${users[item.from].avatar}.jpg`)
						return item.from == user ?
							<List key={key}>
								<Item
									thumb={avatar}>
                                   {item.content}
								</Item>
							</List>
							:
							<List key={key}>
								<Item
									extra={<img src={avatar} alt="头像"/>}
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
