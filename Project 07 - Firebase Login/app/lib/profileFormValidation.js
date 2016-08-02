'use strict';

/**
 * ## profileFormValidation
 * @param {Object} state - the Redux state object
 */
export default function profileFormValidation (state) {

    if (state.form.fields.email !== ''
        &&
        state.form.fields.username !== ''
        &&
        !state.form.fields.emailHasError
        &&
        !state.form.fields.usernameHasError) {
      return state.setIn(['form','isValid'],true);
    } else {
      return state.setIn(['form','isValid'],false);
    }
  /**
   * Default, return the state
   */
  return state;
}
