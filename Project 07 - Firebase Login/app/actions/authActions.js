'use strict';

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD,
         ON_AUTH_FORM_FIELD_CHANGE,

         SIGNUP_REQUEST,
         SIGNUP_FAILURE,
         SIGNUP_SUCCESS } from '../lib/constants'

import { Actions } from 'react-native-router-flux'
import BackendFactory from '../lib/BackendFactory'


export function forgotPasswordState() {
  return {
    type: FORGOT_PASSWORD
  }
}

export function registerState() {
  return {
    type: REGISTER
  }
}

// Sign up Actions
export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export function signupFailure() {
  return {
    type: SIGNUP_FAILURE
  }
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    payload: { username: data.username, email: data.email}
  }
}


export function onAuthFormFieldChange(field, value) {
  return {
    type: ON_AUTH_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
} 

export function signup(email, password) {
  return dispatch => {
    dispatch(signupRequest())
    return BackendFactory().signup({
      email: email,
      password: password
    })
    .then((json) => {
      alert(json)
      console.log(json)
      dispatch(signupSuccess({
        username: json.email,
        email: json.email
      }))
      // Actions.login()
    })
    .catch((error) => {
      dispatch(signupFailure())
    })
  }
}