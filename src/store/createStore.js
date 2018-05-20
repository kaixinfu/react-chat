import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk'

import reducers from '../reducers'

const reduxDevtools = window ? (window.devToolsExtension ? window.devToolsExtension : () => {}) : () => {}
// const reduxDevtools = () => {};
export const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools()))