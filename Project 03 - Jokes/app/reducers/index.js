import { combineReducers } from 'redux'
import { SUBMIT_NAME } from '../actions/index'


function submitName(state = {
  FirstName: '',
  LastName: ''
}, action) {
  switch (action.type) {
    case SUBMIT_NAME:
      return Object.assign({}, state, {
        FirstName: action.FirstName,
        LastName: action.LastName
      })
    default:
      return state
  }
}

const jokesApp = combineReducers({
  person: submitName
})

export default jokesApp