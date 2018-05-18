import React, {Component} from 'react';

export default function appForm(Comp) {
    return class Wrap extends Component {

        handleChage = (key, value) => {
            this.props.loginActions.loginChange(key, value)
        }

        render() {
            return <Comp handleChage={this.handleChage} {...this.props} />
        }
    }
}
