import React, {Component} from 'react';
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
    constructor(props) {
        super(props);
        this.state = {
            catchError: false
        }
    }

    componentDidCatch(err, info) {
        console.log('err', err, info)
        this.setState({
            catchError: true
        })
    }

    render() {
        if (this.state.catchError) {
            return <h1>抱歉，系统出错了!</h1>
        }
        return (
            <div>
                <LoginRoute/>
                <Switch>
                    <Route path='/leaderinfo' component={Leader}></Route>
                    <Route path='/genuisinfo' component={Genuis}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/chat/:user' component={Chat}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        );
    }
}
