import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import './index.css';
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import {store} from './store/createStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/login' component={Login} ></Route>
				<Route path='/dashboard' component={Dashboard} ></Route>
				<Redirect to='/dashboard' ></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
