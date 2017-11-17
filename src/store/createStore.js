import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk'

import reducers from '../reducers'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension : () => {}
export const initStore = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools()))