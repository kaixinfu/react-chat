import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import logo from './logo.svg';
import './App.css';
import * as userActions from './actions/userActions'
const Item = List.Item;

class App extends Component {
    constructor() {
        super()
        this.state = {
            list: ['苍井空', '饭岛爱', '麻生希']
        }
    }
	addItem() {
        this.setState({
			list: [...this.state.list, '毛衣妹' + Math.random()]
        })
    }
  render() {
    const store = this.props.store.getState()
      console.log(store)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <List renderHeader={() => '女忧列表'}>
              {
				  store.users.list.map((_, key) => <Item key={key} extra={`${_.age}岁`}>{_.name}</Item>)
              }
          </List>
          <Button onClick={() => this.props.store.dispatch(userActions.addUser({name: '毛衣妹妹' + Math.random(), age: '15'}))} type="primary">添加女优</Button>
      </div>
    );
  }
}

export default App;
