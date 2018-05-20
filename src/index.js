import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {store} from './store/createStore'
import APP from './App'
import './index.css';
import './config'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <APP/>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();
