import { combineReducers } from 'redux'
import { authReducer } from './authReducers'

function profile(state = {user: 'no-user'}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  profile
})

export default rootReducer