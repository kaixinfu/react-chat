import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
export default class Lists extends Component {
    constructor() {
        super()
    }
  render() {
	  console.log('Lists ===> render')
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Lists!</h1>
      </div>
    );
  }
}
