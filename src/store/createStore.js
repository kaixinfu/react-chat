import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

import reducers from '../reducers'

export const initStore = createStore(reducers, applyMiddleware(thunk))