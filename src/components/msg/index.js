import React, {Component} from 'react';
import {connect} from 'react-redux'
import {List,Badge} from 'antd-mobile';
import {bindActionCreators} from 'redux'
import _ from 'lodash';
import * as userActions from '../../actions/registerActions'
import '../../App.css';

const Item = List.Item;
const Brief = Item.Brief;

@connect(
    state => state,
    dispatch => (
        {userActions: bindActionCreators(userActions, dispatch)})
)
export default class Msg extends Component {
    constructor(props) {
        super(props);
    }

    //根据用户ID将聊天信息分组
    render() {
        const msgsList = {};
        this.props.chat.msgs.forEach(user => {
            msgsList[user.chat_id] = !_.isEmpty(msgsList[user.chat_id]) ? msgsList[user.chat_id] : [];
            msgsList[user.chat_id].push(user);
        })
        const user_id = this.props.user.info._id
        return (
            <div className="App">
                <h1 className="App-title">Welcome to Msg!</h1>
                <List>
                    {Object.values(msgsList).map((item, key) => {
                        const unReadInfoNum = item.filter(item => !item.read && item.to == user_id).length;
                        const currentUserIfo = item[item.length - 1];
                        const targetId = currentUserIfo.form == user_id ? currentUserIfo.to : currentUserIfo.from;
                        const currentUser = this.props.chat.users[targetId];
                        return (<Item key={key} extra={<Badge text={unReadInfoNum}/>} thumb={require(`../../static/img/${currentUser.avatar}.jpg`)}>
                            {item[item.length - 1].content}
                            <Brief>{currentUser.name ? currentUser.name : '无'}</Brief>
                        </Item>)
                    })}
                </List>
            </div>
        );
    }
}
