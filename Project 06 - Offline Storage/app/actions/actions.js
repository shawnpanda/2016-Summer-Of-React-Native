export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'

let NextNoteId = 5
export function addNote(text, date) {
  return {
    type: ADD_NOTE,
    id: NextNoteId++,
    text,
    date
  }
}

export function editNote(id, text) {
  return {
    type: EDIT_NOTE,
    id,
    text
  }
}