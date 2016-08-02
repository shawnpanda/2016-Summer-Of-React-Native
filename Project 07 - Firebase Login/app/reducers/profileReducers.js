'use strict'

import { Record } from 'immutable'

import { REGISTER,
        ON_AUTH_FORM_FIELD_CHANGE,
        
        SIGNUP_SUCCESS } from '../lib/constants'

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
  profile: new Profile
});

export function profileReducer(state = new profileInitialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      const { username, email } = action.payload
      return state.setIn(['profile','username'], username)
                  .setIn(['profile','email'], email)
    default:
      return state
  }
}