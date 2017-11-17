import {applyMiddleware, createStore} from 'redux';

import reducers from '../reducers'

export const initStore = createStore(reducers)