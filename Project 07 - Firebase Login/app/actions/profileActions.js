'use strict';

import {
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,

  ON_PROFILE_FORM_FIELD_CHANGE
} from '../lib/constants'

import { Actions } from 'react-native-router-flux'
import BackendFactory from '../lib/BackendFactory'

export function profileUpdateRequest() {
  return {
    type: PROFILE_UPDATE_REQUEST
  };
}
export function profileUpdateSuccess() {
  return {
    type: PROFILE_UPDATE_SUCCESS
  };
}
export function profileUpdateFailure(json) {
  return {
    type: PROFILE_UPDATE_FAILURE,
    payload: json
  };
}

export function updateProfile(username, email) {
  return dispatch => {
    dispatch(profileUpdateRequest())
    return BackendFactory().updateProfile(
      {
        username: username,
        email: email
      })
      .then(() => {
        dispatch(profileUpdateSuccess())
      })
      .catch((error) => {
        console.log('error is ' + error)
        dispatch(profileUpdateFailure(error))
      })
  }
}
/**
 * ## onProfileFormFieldChange
 * 
 */
export function onProfileFormFieldChange(field,value) {
  return {
    type: ON_PROFILE_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  };
}