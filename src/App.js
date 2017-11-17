import React, { Component } from 'react';
import { Button , List} from 'antd-mobile';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button onClick={() => this.addItem()} type="primary">添加女优</Button>
          <List renderHeader={() => '女忧列表'}>
              {
                  this.state.list.map((_, key) => <Item key={key} onClick={() => {}}>
                      <Item>{_}</Item>
                  </Item>)
              }
          </List>
      </div>
    );
  }
}

export default App;
