import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as leaderActions from '../../actions/leaderActions'
import '../../App.css';

@connect(
	state => (
		{list: state.genuis.list || []}),
	dispatch => (
		{leaderActions: bindActionCreators(leaderActions, dispatch)})
)
export default class Leader extends Component {
	constructor() {
		super()
	}
	componentDidMount() {
		this.props.leaderActions.fetchGenuis()
	}
	render() {
		const {list} = this.props
		return (
			<WingBlank size="lg">
				<WhiteSpace size="lg" />
				{
					list.map((item, key) => (
						item.avatar ? <Card key={key}>
							<Card.Header
								title={item.user}
								thumb={require(`../../static/img/${item.avatar}.jpg`)}
								thumbStyle={{width: 50, height: 50}}
								extra={<span>{item.title}</span>}
							/>
							<Card.Body>
								{item.desc.split('\n').map((v, k) => <div key={key}>{v}</div>)}
							</Card.Body>
						</Card> : null
					))
				}
				<WhiteSpace size="lg" />
			</WingBlank>
		);
	}
}
