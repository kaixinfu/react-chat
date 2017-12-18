import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { NavBar, Icon , WingBlank, List, InputItem, WhiteSpace, Button, TextareaItem} from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import ActiveSelect from '../common/ActiveSelect'
import * as userActions from '../../actions/userActions'
import * as leaderActions from '../../actions/leaderActions'
import '../../App.css';

@connect(state => ({
	leader: state.leader,
	pathTo: state.user.pathTo
}), dispatch => ({
	userActions: bindActionCreators(userActions, dispatch),
	leaderActions: bindActionCreators(leaderActions, dispatch)
}))
export default class Leader extends Component {
	static PropTypes = {
		userActions: PropTypes.object.isRequired,
		leaderActions: PropTypes.object.isRequired
	}
    constructor() {
        super()
    }
	handleChage = (key, value) => {
		this.props.leaderActions.leaderChange(key, value)
	}
	handleSubmit = () => {
        this.props.userActions.update(this.props.leader)
    }
  render() {
      const {
		  title,
		  company,
		  money,
		  desc
      } = this.props.leader
	  if (this.props.pathTo) {
		  return <Redirect to={this.props.pathTo} />
	  }
    return (
      <div className="App">
          <NavBar mode="dark">招聘者</NavBar>
          <ActiveSelect select={this.handleChage} />
          {/*<WingBlank>*/}
              <List>
                  <InputItem
                      // type='money'
                      clear
                      value={title}
                      onChange={(e) => this.handleChage('title', e)}
                      moneyKeyboardAlign="left"
                  >招聘职位</InputItem>
                  <InputItem
                      // type='money'
                      clear
                      value={company}
                      onChange={(e) => this.handleChage('company', e)}
                      moneyKeyboardAlign="left"
                  >公司名称</InputItem>
                  {/*<InputItem*/}
                      {/*// type='money'*/}
                      {/*clear*/}
                      {/*onChange={(e) => this.handleChage('year', e)}*/}
                      {/*moneyKeyboardAlign="left"*/}
                  {/*>工作年限</InputItem>*/}
                  <InputItem
                      // type='money'
                      clear
                      value={money}
                      onChange={(e) => this.handleChage('money', e)}
                      moneyKeyboardAlign="left"
                  >薪资范围</InputItem>
                  <TextareaItem
                      title="职位要求"
                      rows={3}
                      value={desc}
                      placeholder="auto focus in Alipay client"
                      data-seed="logId"
                      ref={el => this.autoFocusInst = el}
                      onChange={(e) => this.handleChage('desc', e)}
                      autoHeight
                  />
              </List>
          {/*</WingBlank>*/}
          <WhiteSpace />
          <Button onClick={this.handleSubmit} type="primary">保存</Button>
      </div>
    );
  }
}
