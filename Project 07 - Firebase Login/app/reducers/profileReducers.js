'use strict'

require { Record } from 'immutable'

const Form = Record({
  profile: new(Record({
    username: null,
    email: null,
    objectId: null,
    emailVerified: null
  })),
  isValid: false,
  isUpdating: false,
  fields: new (Record({
    username: '',
    usernameHasError: false,
    email: '',
    emailHasError: false,
  }))
});


var profileInitialState = Record({
  form: new Form
});

export default function profileReducer(state = new profileInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}