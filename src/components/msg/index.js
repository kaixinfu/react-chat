import React, {Component} from 'react';
import {connect} from 'react-redux'
import {List, Badge} from 'antd-mobile';
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

    getLastMsg = (mags) => {
        return mags[mags.length - 1]
    }

    //根据用户ID将聊天信息分组
    render() {
        const msgsList = {};
        this.props.chat.msgs.forEach(user => {
            msgsList[user.chat_id] = !_.isEmpty(msgsList[user.chat_id]) ? msgsList[user.chat_id] : [];
            msgsList[user.chat_id].push(user);
        });
        const sortMsgsList = Object.values(msgsList).sort((a, b) => b[b.length - 1].create_time - a[a.length - 1].create_time)
        const user_id = this.props.user.info._id
        if (_.isEmpty(sortMsgsList)) {
            return null
        }
        const users = this.props.chat.users;
        return (
            <div className="App">
                <h1 className="App-title">Welcome to Msg!</h1>
                <List>
                    {sortMsgsList.map((item, key) => {
                        let lastMsg = this.getLastMsg(item);
                        let targetId = lastMsg.from == user_id ? lastMsg.to : lastMsg.from;
                        if (!users[targetId]) return null;
                        return (
                            <Item
                                key={lastMsg._id + key}
                                onClick={() => this.props.history.push(`/chat/${targetId}`)}
                                arrow='horizontal'
                                extra={<Badge text={item.filter(item => !item.readed && item.to == user_id).length}/>}
                                thumb={require(`../../static/img/${users[targetId].avatar}.jpg`)}>
                                {lastMsg.content}
                                <Brief>{users[targetId].name}</Brief>
                            </Item>)
                    })}
                </List>
            </div>
        );
    }
}
