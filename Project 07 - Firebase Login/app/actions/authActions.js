'use strict';

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD,
         ON_AUTH_FORM_FIELD_CHANGE,

         LOGIN_REQUEST,
         LOGIN_FAILURE,
         LOGIN_SUCCESS,

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

export function loginState() {
  return {
    type: LOGIN
  };
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

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    payload: { username: user.username, email: user.email}
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
      console.log(json)
      dispatch(signupSuccess({
        username: json.email,
        email: json.email
      }))
      Actions.Profile()
    })
    .catch((error) => {
      dispatch(signupFailure())
    })
  }
}

// Log in actions
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: { email: user.email, username: user.displayName}
  }
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest)
    return BackendFactory().login({
      email: email,
      password: password
    }).then((user) => {
      console.log(user)
      dispatch(loginSuccess({
        username: json.email,
        email: json.email
      }))
      Actions.Profile()
    })
    .catch((error) => {
      dispatch(loginFailure())
    })
  }
}

// Field Validation function
export function onAuthFormFieldChange(field, value) {
  return {
    type: ON_AUTH_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
} 