import { combineReducers} from 'redux'

const initialState = [
  {
    "date": "07/27/2016",
    "note": "I am very happy"
  },
  {
    "date": "07/25/2016",
    "note": "Happy Birthday!!!"
  }
]


function notes(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const notesApp = combineReducers({notes})

export default notesApp