'use strict';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux'
import LoginForm from '../components/LoginForm'
import FormButton from '../components/FormButton'

import React, { Component } from 'react';
import { Stylesheet, Text, TouchableHighlight, View } from 'react-native'

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants';

import * as authActions from '../actions/authActions'

import { Map } from 'immutable'

const actions = [
  authActions
]

function mapStateToProps(state) {
  return {};
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

class LoginRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: this.props.auth.form.fields.email,
        password: this.props.auth.form.fields.password,
        passwordAgain: this.props.auth.form.fields.passwordAgain
      }
    }
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextprops) {
    this.setState({
      value: {
        email: nextprops.auth.form.fields.email,
        password: nextprops.auth.form.fields.password,
        passwordAgain: nextprops.auth.form.fields.passwordAgain
      }
    });
  }

  onChange(value) {
    if (value.email != '') {
      this.props.actions.onAuthFormFieldChange('email',value.email);
    }
    if (value.password != '') {
      this.props.actions.onAuthFormFieldChange('password',value.password);
    }
    if (value.passwordAgain != '') {
      this.props.actions.onAuthFormFieldChange('passwordAgain',value.passwordAgain);
    }

    this.setState({value})
  }

  render() {
    var formType = this.props.formType;
    var onButtonPress = this.props.onButtonPress;
    var loginButtonText = this.props.loginButtonText;

    let self = this;

    return (
      <View>
        <View>
          <LoginForm
            formType={formType}
            form={this.props.auth.form}
            value={this.state.value}
            onChange={self.onChange.bind(self)}
          />
        </View>
        <FormButton
          isDisabled={!this.props.auth.form.isValid || this.props.auth.form.isFetching}
          onPress={onButtonPress}
          buttonText={loginButtonText}/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRender)