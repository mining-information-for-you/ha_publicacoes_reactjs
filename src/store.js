import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'


const store = () => {
  const middleware = [
    thunk,
    logger
  ]
  const encharcers = []

  encharcers.push(applyMiddleware(...middleware))

  return createStore(
    reducers,
    compose(...encharcers)
  )

}

// const cfgStore = () => {
//   return createStore(
//     reducers
//   )
// }


export default store
