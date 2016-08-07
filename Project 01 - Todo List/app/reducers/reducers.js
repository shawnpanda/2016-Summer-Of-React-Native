import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const initialState = [
  {id: 1, text: 'todo item 1', completed: false},
  {id: 2, text: 'todo item 2', completed: true},
  {id: 3, text: 'todo item 3', completed: false},
  {id: 4, text: 'todo item 4', completed: false},
  {id: 5, text: 'todo item 5', completed: true},
]

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        text: action.text
      })
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TOGGLE_TODO:
    case 'EDIT_TODO':
      return state.map(t => 
        todo(t, action)
      )
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp