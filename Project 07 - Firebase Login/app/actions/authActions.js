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
         SIGNUP_SUCCESS,

         RESET_PASSWORD_REQUEST,
         RESET_PASSWORD_SUCCESS,
         RESET_PASSWORD_FAILURE,

         LOGOUT_REQUEST,
         LOGOUT_SUCCESS,
         LOGOUT_FAILURE } from '../lib/constants'

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

export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    payload: error
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
    .then((user) => {
      console.log(user)
      dispatch(signupSuccess({
        username: user.email,
        email: user.email
      }))
      Actions.Profile()
    })
    .catch((error) => {
      dispatch(signupFailure(error))
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

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest())
    return BackendFactory().login({
      email: email,
      password: password
    }).then((user) => {
      console.log(user)
      dispatch(loginSuccess({
        username: user.email,
        email: user.email
      }))
      Actions.Profile()
    })
    .catch((error) => {
      dispatch(loginFailure(error))
    })
  }
}

/**
 * ## ResetPassword actions
 */
export function resetPasswordRequest() {
  return {
    type: RESET_PASSWORD_REQUEST
  };
}

export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS
  };
}

export function resetPasswordFailure(error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error
  };
}

export function resetPassword(email) {
  return dispatch => {
    dispatch(resetPasswordRequest())
    return BackendFactory().resetPassword({
      email: email
    })
    .then(() => {
      dispatch(resetPasswordSuccess())
    })
    .catch((error) => {
      dispatch(resetPasswordFailure(error))
    })
  }
}

// Logout Actions
export function logoutRequest(){
  return {
    type: LOGOUT_REQUEST
  }
}

export function logoutSuccess(){
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutFailure(error){
  return {
    type: LOGOUT_FAILURE,
    payload: error
  }
}
export function logout() {
  return dispatch => {
    dispatch(logoutRequest())
    return BackendFactory().logout()
    .then(() => {
      dispatch(logoutSuccess())
      Actions.Login()
    })
    .catch((error) => {
      dispatch(logoutFailure(error))
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