'use strict'

import { Record } from 'immutable'

import { REGISTER,
        ON_AUTH_FORM_FIELD_CHANGE,
        
        SIGNUP_SUCCESS,
        GET_PROFILE_FIELDS } from '../lib/constants'

const Profile = Record({
  username: null,
  email: null,
  objectId: null,
  isValid: false,
  isUpdating: false,
  fields: new (Record({
    username: '',
    usernameHasError: false,
    email: '',
    emailHasError: false,
  }))
});


export const profileInitialState = Record({
  form: new Profile
});

export function profileReducer(state = new profileInitialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      let { username, email } = action.payload
      return state.setIn(['form','username'], username)
                  .setIn(['form','email'], email)
                  .setIn(['form', 'fields', 'username'], username)
                  .setIn(['form', 'fields', 'email'], email)
    default:
      return state
  }
}