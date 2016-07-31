'use strict'

import { Record } from 'immutable'
import { REGISTER,
        ON_AUTH_FORM_FIELD_CHANGE } from '../lib/constants'
import fieldValidation from '../lib/fieldValidation'
import formValidation from '../lib/formValidation'


const Form = Record({
  state: REGISTER,
  disabled: false,
  isValid: false,
  isFetching: false,
  fields: new (Record({
    email: '',
    emailHasError: false,
    password: '',
    passwordHasError: false,
    passwordAgain: '',
    passwordAgainHasError: false,
  }))
})

export const authInitialState = Record({
  form: new Form
});

export function authReducer(state = new authInitialState, action) {   
  switch (action.type) {
    case ON_AUTH_FORM_FIELD_CHANGE:
      const { field, value } = action.payload;
      let nextState = state.setIn(['form', 'fields', field], value)

      var finalState = formValidation(
        fieldValidation( nextState, action)
        , action);

      return finalState;
    default:
      return state
  }
}