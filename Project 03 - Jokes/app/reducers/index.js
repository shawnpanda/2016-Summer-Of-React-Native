import { combineReducers } from 'redux'
import { SUBMIT_NAME } from '../actions/index'


function submitName(state={
  FirstName: '',
  LastName: ''
}, action) {
  switch (action.type) {
    case SUBMIT_NAME:
      return Object.assign({}, state, {
        FirstName: state.FirstName,
        LastName: state.LastName
      })
  }
}

const jokesApp = combineReducers({
  submitName
})

export default jokesApp