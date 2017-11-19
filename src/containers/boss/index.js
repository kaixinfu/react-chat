import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
export default class Boss extends Component {
    constructor() {
        super()
    }
  render() {
	  console.log('Boss ===> render')
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Boss!</h1>
      </div>
    );
  }
}
