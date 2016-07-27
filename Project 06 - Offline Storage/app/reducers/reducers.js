import { combineReducers} from 'redux'
import { ADD_NOTE, EDIT_NOTE} from '../actions/actions'

const initialState = [
  {
    id : 4,
    "date": "07/27/2016",
    "note": "I am very happy"
  },
  {
    id : 3,
    "date": "07/25/2016",
    "note": "Happy Birthday!!!"
  },
  {
    id : 2,
    "date": "07/24/2016",
    "note": "Dan, Happy Birthday!!!"
  },
  {
    id : 1,
    "date": "07/23/2016",
    "note": "wow, Happy Birthday!!!"
  }
]


function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        date: action.date,
        note: action.text
      })
    case EDIT_NOTE:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        note:action.text
      })
    default:
      return state
  }
}

const notesApp = combineReducers({notes})

export default notesApp