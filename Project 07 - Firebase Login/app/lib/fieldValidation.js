'use strict'

// Basic validation for the form fields
export default function fieldValidation(state, action) {
  const {field, value} = action.payload;

  switch (field) {
    case ('username'):
      if (value.length < 6) {
        return state.setIn(['form', 'fields', 'usernameHasError'], true)
      }
      return state.setIn(['form', 'fields', 'usernameHasError'], false)
      break

    case('email'):
      if (value.indexOf('@') === -1) {
        return state.setIn(['form', 'fields', 'emailHasError'], true)
      }
      return state.setIn(['form', 'fields', 'emailHasError'], false)
      break;

    case ('password'):
      if (value.length < 6) {
        return state.setIn(['form', 'fields', 'passwordHasError'], true)
      }
      return state.setIn(['form', 'fields', 'passwordHasError'], false)
      break

    case 'passwordAgain':
      if (value !== state.form.fields.password)  {
        return state.setIn(['form', 'fields', 'passwordAgainHasError'], true)
      }
      return state.setIn(['form', 'fields', 'passwordAgainHasError'], false)
      break;

    default:
      return state
  }
}