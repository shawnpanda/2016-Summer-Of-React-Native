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
        SIGNUP_SUCCESS,

        RESET_PASSWORD_REQUEST,
        RESET_PASSWORD_SUCCESS,
        RESET_PASSWORD_FAILURE,

        LOGOUT_REQUEST,
        LOGOUT_SUCCESS,
        LOGOUT_FAILURE } from '../lib/constants'
import fieldValidation from '../lib/fieldValidation'
import formValidation from '../lib/formValidation'


const Form = Record({
  state: REGISTER,
  error: '',
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
    case LOGIN:
    case REGISTER:
    case FORGOT_PASSWORD:
      return formValidation(
        state.setIn(['form', 'state'], action.type)
      )
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
    case RESET_PASSWORD_REQUEST:
    case LOGOUT_REQUEST:
      return state.setIn(['form','isFetching'], true)
                  .setIn(['form', 'error'], null)
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case RESET_PASSWORD_FAILURE:
    case LOGOUT_FAILURE:
    case RESET_PASSWORD_SUCCESS:
      return state.setIn(['form','isFetching'], false)
                  .setIn(['form', 'error'], action.payload)
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return state.setIn(['form','isFetching'], false)
    case LOGOUT_SUCCESS:
      return formValidation(
        state.setIn(['form','isFetching'], false)
          .setIn(['form','error'], null)
          .setIn(['form','fields','email'],'')
          .setIn(['form','fields','password'],'')
          .setIn(['form','fields','passwordAgain'],'')
      );
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