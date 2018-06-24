import { combineReducers } from 'redux'

import SearchReducer from './SearchReducer'
import { error, loading, success } from './SearchReducer'


export default combineReducers({

      result: SearchReducer,
      error,
      loading,
      success
})
