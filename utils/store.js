import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
)

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default initialState => createStoreWithMiddleware(rootReducers, initialState, enhancers)