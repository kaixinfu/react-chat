import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../actions/userActions'
import '../App.css';

@connect(
    state => (
        {list: state.users.list || []}),
    dispatch => (
        {userActions: bindActionCreators(userActions, dispatch)})
)
export default class Test extends Component {
    constructor() {
        super()
    }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Test!</h1>
      </div>
    );
  }
}
