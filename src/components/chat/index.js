import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace, Button, List, InputItem } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import io from 'socket.io-client'
import { withRouter } from 'react-router-dom'
import * as chatActions from '../../actions/chatActions'
import UserCard from '../common/UserCard'
import '../../App.css';
const socket = io('ws://localhost:9000')

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
		this.props.chatActions.getMsgs()
        // socket.on('receivemsg', data => {
			// this.setState({
        //         msg: [...this.state.msg, data.text]
			// })
        // })
	}
    handleSubmite = () => {
        socket.emit('sendmsg', {text: this.state.text})
		this.setState({text: ''})
	}
	render() {
		return (
			<div>
				{
					this.state.msg.map((item, key) => <p key={key}>{item}</p>)
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
