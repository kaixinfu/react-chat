import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initStore} from './store/createStore'
import registerServiceWorker from './registerServiceWorker';

function render() {
	ReactDOM.render(<App store={initStore} />, document.getElementById('root'));
}
render()
initStore.subscribe(render)

registerServiceWorker();
