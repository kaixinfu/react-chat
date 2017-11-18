import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../actions/userActions'
import logo from '../logo.svg';
import '../App.css';
const Item = List.Item;

@connect(
    state => (
        {list: state.users.list || []}),
    dispatch => (
        {userActions: bindActionCreators(userActions, dispatch)})
)
export default class Detail extends Component {
    constructor() {
        super()
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Detail!</h1>
        </header>
          <Button onClick={() => this.props.userActions.addUser({name: '毛衣妹妹' + Math.random(), age: '15'})} type="primary">立即添加女优</Button>
          <Button onClick={() => this.props.userActions.addUserAsync({name: '天海翼' + Math.random(), age: '16'})} type="primary">异步添加女优</Button>
          <List renderHeader={() => '女忧列表'}>
              {
				  this.props.list.map((_, key) => <Item key={key} extra={`${_.age}岁`}>{_.name}</Item>)
              }
          </List>
      </div>
    );
  }
}
