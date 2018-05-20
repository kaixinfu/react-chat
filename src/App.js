import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './containers/login'
import Register from './containers/register'
import Leader from './containers/leader'
import Genuis from './containers/genuis'
import Dashboard from './components/dashboard'
import LoginRoute from './components/logoRoute'
import Chat from './components/chat'
import './index.css';

export default class App extends Component {

  render() {
    return (
        <div>
            <LoginRoute />
            <Switch>
                <Route path='/leaderinfo' component={Leader} ></Route>
                <Route path='/genuisinfo' component={Genuis} ></Route>
                <Route path='/login' component={Login} ></Route>
                <Route path='/register' component={Register} ></Route>
                <Route path='/chat/:user' component={Chat} ></Route>
                <Route component={Dashboard}></Route>
            </Switch>
        </div>
    );
  }
}
