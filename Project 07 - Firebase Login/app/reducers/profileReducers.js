'use strict'

import { Record } from 'immutable'

import { REGISTER,
        
        PROFILE_UPDATE_REQUEST,
        PROFILE_UPDATE_FAILURE,
        PROFILE_UPDATE_SUCCESS,

        SIGNUP_SUCCESS,
        ON_PROFILE_FORM_FIELD_CHANGE } from '../lib/constants'
import fieldValidation from '../lib/fieldValidation'
import profileFormValidation from '../lib/profileFormValidation'


const Profile = Record({
  username: null,
  email: null,
  objectId: null,
  isValid: true,
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
    case PROFILE_UPDATE_REQUEST:
      return state.setIn(['form', 'isUpdating'], true)
    case PROFILE_UPDATE_FAILURE:
    case PROFILE_UPDATE_SUCCESS:
      return state.setIn(['form', 'isUpdating'], false)
    case ON_PROFILE_FORM_FIELD_CHANGE:
      
      let nextFormState =
      state.setIn(['form', 'fields', action.payload.field],
                  action.payload.value)

      return profileFormValidation(
        fieldValidation( nextFormState, action)
        , action);

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