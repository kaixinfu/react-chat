import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as chatActions from '../../actions/chatActions'
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
		console.log(list)
		return (
			<WingBlank size="lg">
				<WhiteSpace size="lg" />
				{
					list.map((item, key) => (
						item.avatar ? <Card key={item.avatar}>
							<Card.Header
								title={item.user}
								thumb={require(`../../static/img/${item.avatar}.jpg`)}
								thumbStyle={{width: 50, height: 50}}
								extra={<span>{item.title}</span>}
							/>
							<Card.Body>
								{item.desc.split('\n').map((v, k) => <div key={k}>{v}</div>)}
							</Card.Body>
						</Card> : null
					))
				}
				<WhiteSpace size="lg" />
			</WingBlank>
		);
	}
}
