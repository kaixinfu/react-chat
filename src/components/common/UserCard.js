import  React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types'
import '../../App.css';
import { withRouter } from 'react-router-dom'

@withRouter
export default class Genuis extends Component {
	static PropTypes = {
		list: PropTypes.array.isRequired
	}
	constructor() {
		super()
	}
	handleClick = (v) => {
		console.log('v', v)
		this.props.history.push(`/chat/${v._id}`)
	}
	render() {
		const {list} = this.props
		return (
			<WingBlank size="lg">
				<WhiteSpace size="lg" />
				{
					list.map((item, key) => (
						item.avatar ? <Card onClick={() => this.handleClick(item)} key={item.avatar}>
							<Card.Header
								title={item.user}
								thumb={require(`../../static/img/${item.avatar}.jpg`)}
								thumbStyle={{width: 50, height: 50}}
								extra={<span>{item.title}</span>}
							/>
							<Card.Body>
								{item.type == 'leader' ? <div>公司:{item.company}</div> : null}
								{item.desc.split('\n').map((v, k) => <div key={k}>{v}</div>)}
							</Card.Body>
							{item.type == 'leader' ? <Card.Footer content="薪资:" extra={<div>{item.money}</div>} /> : null}
						</Card> : null
					))
				}
				<WhiteSpace size="lg" />
			</WingBlank>
		);
	}
}
