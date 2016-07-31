'use strict'

import { Record } from 'immutable'
import { REGISTER } from '../lib/constants'

const Form = Record({
  state: REGISTER,
  disabled: false,
  isValid: false,
  isFetching: false,
  fields: new (Record({
    username: '',
    email: '',
    password: '',
    passwordAgain: ''
  }))
})

export const authInitialState = Record({
  form: new Form
});

export function authReducer(state = new authInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}