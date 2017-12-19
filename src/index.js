import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import Login from './containers/login'
import Register from './containers/register'
import Leader from './containers/leader'
import Genuis from './containers/genuis'
import Dashboard from './components/dashboard'
import LoginRoute from './components/logoRoute'
import Chat from './components/chat'
import './config'
import {store} from './store/createStore'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
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
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
