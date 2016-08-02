import { combineReducers } from 'redux'
import { authReducer } from './authReducers'
import { profileReducer } from './profileReducers'


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
})

export default rootReducer