'use strict'

import { Record } from 'immutable'
import { LOGIN,
        REGISTER,
        FORGOT_PASSWORD,
        ON_AUTH_FORM_FIELD_CHANGE,
        
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,

        SIGNUP_REQUEST,
        SIGNUP_FAILURE,
        SIGNUP_SUCCESS } from '../lib/constants'
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
    passwordAgain: '123456',
    passwordAgainHasError: false,
  }))
})

export const authInitialState = Record({
  form: new Form
});

export function authReducer(state = new authInitialState, action) {   
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case FORGOT_PASSWORD:
      return formValidation(
        state.setIn(['form', 'state'], action.type)
      )
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return state.setIn(['form','isFetching'], true)
    case SIGNUP_FAILURE:
    case SIGNUP_SUCCESS:
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
      return state.setIn(['form','isFetching'], false)
    case ON_AUTH_FORM_FIELD_CHANGE:
      const { field, value } = action.payload;
      let nextState = state.setIn(['form', 'fields', field], value)

      var finalState = formValidation(
        fieldValidation(nextState, action)
        );

      return finalState;
    default:
      return state
  }
}