import { combineReducers} from 'redux'
import { ADD_NOTE, EDIT_NOTE} from '../actions/actions'

const initialState = [
  {
    id : 7,
    date: "07/30/2016",
    note: "hello, I am very happy ahahah"
  },
  {
    id : 6,
    date: "07/29/2016",
    note: "wow, I am very happy ahahah"
  },
  {
    id : 5,
    date: "07/28/2016",
    note: "I am very happy ahahah"
  },
  {
    id : 4,
    date: "07/27/2016",
    note: "I am very happy"
  },
  {
    id : 3,
    date: "07/25/2016",
    note: "Happy Birthday!!!"
  },
  {
    id : 2,
    date: "07/24/2016",
    note: "Dan, Happy Birthday!!!"
  },
  {
    id : 1,
    date: "07/23/2016",
    note: "wow, Happy Birthday!!!"
  }
]

function note(state, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        id: action.id,
        note: action.text,
        date: action.date
      }
    case EDIT_NOTE:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        note: action.text
      })
    default:
      return state
  }
}

function notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        note(undefined, action)]
    case EDIT_NOTE:
      return state.map(t =>
        note(t, action)
        )
    default:
      return state
  }
}

const notesApp = combineReducers({notes: notes})

export default notesApp