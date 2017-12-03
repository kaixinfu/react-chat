import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { NavBar, Icon , WingBlank, List, InputItem, WhiteSpace, Button, TextareaItem} from 'antd-mobile';
import {Redirect} from 'react-router-dom'
import ActiveSelect from '../common/ActiveSelect'
import * as userActions from '../../actions/userActions'
import * as genuisActions from '../../actions/genuisActions'
import '../../App.css';

@connect(state => ({
	genuis: state.genuis,
	pathTo: state.user.pathTo
}), dispatch => ({
	userActions: bindActionCreators(userActions, dispatch),
	genuisActions: bindActionCreators(genuisActions, dispatch)
}))
export default class Genuis extends Component {
	static PropTypes = {
		userActions: PropTypes.object.isRequired,
		genuisActions: PropTypes.object.isRequired
	}
    constructor() {
        super()
    }
	handleChage = (key, value) => {
		this.props.genuisActions.genuisChange(key, value)
	}
	select = (v) => {
        // console.log(v)
    }
	handleSubmit = () => {
        this.props.userActions.update(this.props.genuis)
    }
  render() {
      const path = this.props.location.pathname
      console.log('path ===> ', path)
      const {
		  title,
		  desc
      } = this.props.genuis
	  if (this.props.pathTo) {
		  return <Redirect to={this.props.pathTo} />
	  }
    return (
      <div className="App">
          <NavBar mode="dark">应聘者</NavBar>
          <ActiveSelect select={this.select} />
          {/*<WingBlank>*/}
              <List>
                  <InputItem
                      // type='money'
                      clear
                      value={title}
                      onChange={(e) => this.handleChage('title', e)}
                      moneyKeyboardAlign="left"
                  >求职职位</InputItem>
                  <TextareaItem
                      title="个人简介"
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
