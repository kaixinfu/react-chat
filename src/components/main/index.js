import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Result, Icon, WhiteSpace } from 'antd-mobile';
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/registerActions'
import '../../App.css';

@connect(
	state => (
		{list: state || []}),
	dispatch => (
		{userActions: bindActionCreators(userActions, dispatch)})
)
export default class Main extends Component {
	constructor() {
		super()
	}
	render() {
		const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
		return (
			<Result
				img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
				title="支付成功"
				message={<div>998.00元 <del>1098元</del></div>}
			/>
		);
	}
}
