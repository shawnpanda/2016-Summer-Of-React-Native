'use strict';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux'
import LoginForm from '../components/LoginForm'
import FormButton from '../components/FormButton'

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { REGISTER,
         LOGIN,
         FORGOT_PASSWORD } from '../lib/constants';

import * as authActions from '../actions/authActions'


import { Map } from 'immutable'

var styles= StyleSheet.create({
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
})

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

  getMessage(messageType, actions) {
    let forgotPassword =
    <TouchableHighlight
        onPress={() => {
            actions.forgotPasswordState();
            Actions.ForgotPassword();
          }} >
      <Text>Forgot Password?</Text>
    </TouchableHighlight>;

    let alreadyHaveAccount =
    <TouchableHighlight
        onPress={() => {
            actions.loginState();
            Actions.Login();
          }} >
      <Text>Already have an account?</Text>
    </TouchableHighlight>;
    
    let register =
    <TouchableHighlight 
        onPress={() => {
            actions.registerState();
            Actions.Register();
          }} >
      <Text>Register</Text>
    </TouchableHighlight>;
    
    switch(messageType) {
    case FORGOT_PASSWORD:
      return forgotPassword;
    case LOGIN:
      return alreadyHaveAccount;
    case REGISTER:  
      return register;
    }
  }

  render() {
    var formType = this.props.formType;
    var onButtonPress = this.props.onButtonPress;
    var loginButtonText = this.props.loginButtonText;
    var leftMessageType = this.props.leftMessageType;
    var rightMessageType = this.props.rightMessageType;

    let leftMessage = this.getMessage(leftMessageType, this.props.actions);
    let rightMessage = this.getMessage(rightMessageType, this.props.actions);

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
        <View style={styles.forgotContainer}>
          {leftMessage}
          {rightMessage}
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRender)