import { combineReducers} from 'redux'

const initialState = [
  {
    "date": "07/27/2016",
    "note": "I am very happy"
  },
  {
    "date": "07/25/2016",
    "note": "Happy Birthday!!!"
  },
  {
    "date": "07/24/2016",
    "note": "Dan, Happy Birthday!!!"
  },
  {
    "date": "07/23/2016",
    "note": "wow, Happy Birthday!!!"
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