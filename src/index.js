import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css';
import Login from './containers/login'
import Register from './containers/register'
import Boss from './containers/boss'
import Genuis from './containers/genuis'
import Dashboard from './components/dashboard'
import LoginRoute from './components/logoRoute'
import './config'
import {store} from './store/createStore'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<LoginRoute />
				<Switch>
					<Route path='/bossinfo' component={Boss} ></Route>
					<Route path='/genuisinfo' component={Genuis} ></Route>
					<Route path='/login' component={Login} ></Route>
					<Route path='/register' component={Register} ></Route>
					<Route component={Dashboard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
