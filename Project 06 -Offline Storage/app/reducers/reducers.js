import { combineReducers} from 'redux'


function notes(state=[], action) {
  switch (action.type) {
    default:
      return state
  }
}

const notesApp = combineReducers({notes})

export default notesApp