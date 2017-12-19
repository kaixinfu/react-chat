import React, { Component } from 'react';

export default function appForm(Comp) {
	return class Wrap extends Component{
		constructor(props) {
			super(props)
		}
		handleChage = (key, value) => {
			this.props.loginActions.loginChange(key, value)
		}
		render() {
			return <Comp handleChage={this.handleChage} {...this.props} />
		}
	}
}
