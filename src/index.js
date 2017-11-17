import React from 'react';
import ReactDOM from 'react-dom';
import {compose} from 'redux';
import './index.css';
import App from './App';
import {initStore} from './store/createStore'
import * as userActions from './actions/userActions'
import registerServiceWorker from './registerServiceWorker';

function render() {
	ReactDOM.render(<App store={initStore} action={userActions} />, document.getElementById('root'));
}
render()
initStore.subscribe(render)

registerServiceWorker();
