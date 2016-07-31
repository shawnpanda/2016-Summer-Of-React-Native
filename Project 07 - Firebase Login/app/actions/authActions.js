'use strict';

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants'

import { Actions } from 'react-native-router-flux'
import BackendFactory from '../lib/BackendFactory'


export function registerState() {
  return {
    type: REGISTER
  }
}

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

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST
  };
} 

export function signup(email, password) {
  return dispatch => {
    return BackendFactory().signup({
      email: email,
      password: password
    })
    .then((json) => {
      Actions.login()
    })
  }
}