import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Lists from './Lists'
import Detail from './Detail'
import Test from './Test'
import {store} from './store/createStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="./">首页</Link>
					</li>
					<li>
						<Link to="./list">列表</Link>
					</li>
					<li>
						<Link to="./detail">详情</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/' exact component={App} ></Route>
					<Route path='/list' component={Lists} ></Route>
					<Route path='/detail' component={Detail} ></Route>
					<Route path='/:location' component={Test} ></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
