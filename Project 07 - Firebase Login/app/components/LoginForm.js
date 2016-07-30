'use strict'

import React, { PropTypes } from 'react';
import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants'

// Uses tcomb-form-native library
const t = require('tcomb-form-native');
let Form = t.form.Form;

var LoginForm = React.createClass({
  propTypes: {
    formType: PropTypes.string,
    form: PropTypes.object,
    value: PropTypes.object,
    onChange: PropTypes.func
  },

  render() {
    let formType = this.props.formType

    let options = {
      auto: 'placeholders',
      fields: {

      }
    }

    let username = {
      label: 'Username',
      maxLength: 12,
      editable: !this.props.form.isFetching
    }

    let email = {
      label: 'Email',
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching
    }

    let password = {
      label: 'Password',
      maxLength: 12,
      editable: !this.props.form.isFetching
    }

    let passwordAgain = {
      label: 'Please enter password again',
      maxLength: 12,
      editable: !this.props.form.isFetching
    }

    let loginForm;
    switch (formType) {
      case (REGISTER):
        loginForm = t.struct({
          username: t.String,
          email: t.String,
          password: t.String,
          passwordAgain: t.String
        })
        options.fields['username'] = username;
        options.fields['email'] = email;
        options.fields['password'] = password;
        options.fields['passwordAgain'] = passwordAgain;
        break;

      /**
       * ### Login
       * The login form has only 2 fields
       */
      case(LOGIN):
        loginForm = t.struct({
          username: t.String,
          password: t.String
        });
        options.fields['username'] = username;
        options.fields['password'] = password;
        break;
        
        /**
         * ### Reset password
         * The password reset form has only 1 field
         */
      case(FORGOT_PASSWORD):
        loginForm = t.struct({
          email: t.String
        });
        options.fields['email'] = email;
        break;
      } //switch

      return (
        <Form ref="form"
          type={loginForm}
          options={options}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      )
  }
});

export default LoginForm