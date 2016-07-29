import { combineReducers } from 'redux'

const initialState= {
  isValid: false,
  isFetching: false
}

function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function profile(state = {user: 'no-user'}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  profile
})

export default rootReducer