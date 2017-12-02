import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { NavBar, Icon , WingBlank, List, InputItem, WhiteSpace, Button, TextareaItem} from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import ActiveSelect from '../common/ActiveSelect'
import * as userActions from '../../actions/userActions'
import '../../App.css';

@connect(state => ({
	publick: state.publick,
	pathTo: state.publick.pathTo || ''
}), dispatch => ({
	userActions: bindActionCreators(userActions, dispatch)
}))
export default class Boss extends Component {
    constructor() {
        super()
    }
	handleChage = (key, value) => {
		this.props.userActions.publickChange(key, value)
	}
	select = (v) => {
        // console.log(v)
    }
	handleSubmit = () => {
        this.props.userActions.update(this.props.publick)
    }
  render() {
      const path = this.props.location.pathname
      console.log('path ===> ', path)
      const {
		  title,
		  company,
		  money,
		  desc
      } = this.props.publick
	  if (this.props.pathTo) {
		  return <Redirect to={this.props.pathTo} />
	  }
    return (
      <div className="App">
          <NavBar mode="dark">Boss</NavBar>
          <ActiveSelect select={this.select} />
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
