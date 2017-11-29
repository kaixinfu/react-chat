import React, { Component } from 'react';
import { NavBar, Icon , WingBlank, List, InputItem, WhiteSpace, Button, TextareaItem} from 'antd-mobile';
import ActiveSelect from '../common/ActiveSelect'
import '../../App.css';
export default class Boss extends Component {
    constructor() {
        super()
    }
	handleChage = (key, value) => {
		// this.props.loginActions.loginChange(key, value)
	}
	select = (v) => {
        // console.log(v)
    }
  render() {
	  console.log('Boss ===> render')
    return (
      <div className="App">
          <NavBar mode="dark">Boss</NavBar>
          <ActiveSelect select={this.select} />
          {/*<WingBlank>*/}
              <List>
                  <InputItem
                      // type='money'
                      clear
                      onChange={(e) => this.handleChage('title', e)}
                      moneyKeyboardAlign="left"
                  >招聘职位</InputItem>
                  <InputItem
                      // type='money'
                      clear
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
                      onChange={(e) => this.handleChage('money', e)}
                      moneyKeyboardAlign="left"
                  >薪资范围</InputItem>
                  <TextareaItem
                      title="职位要求"
                      rows={3}
                      placeholder="auto focus in Alipay client"
                      data-seed="logId"
                      ref={el => this.autoFocusInst = el}
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
