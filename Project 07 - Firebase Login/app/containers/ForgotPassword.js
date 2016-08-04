'use strict'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes} from 'react'
import LoginRender from '../components/LoginRender'

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants';

import * as authActions from '../actions/authActions';

import { Map } from 'immutable'

const actions = [
  authActions
]

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
                  .merge(...actions)
                  .filter(value => typeof value === 'function')
                  .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}

function buttonPressHandler(resetPassword, email) {
  resetPassword(email)
}

class ForgotPassword extends Component {
  render () {
    let loginButtonText = 'Reset Password';
    let onButtonPress = buttonPressHandler.bind(null,
                        this.props.actions.resetPassword,
                        this.props.auth.form.fields.email
                        )

    return (
      <LoginRender
        formType={ FORGOT_PASSWORD }
        loginButtonText={ loginButtonText }
        onButtonPress={ onButtonPress }
        leftMessageType = { REGISTER }
        rightMessageType = { LOGIN }
        auth={ this.props.auth }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)