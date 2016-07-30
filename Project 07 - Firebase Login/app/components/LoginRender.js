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
import * as globalActions from '../actions/globalActions'

import { Map } from 'immutable'

const actions = [
  authActions,
  globalActions  
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
      }
    }
  }

  onChange(value) {
    this.setState({value})
  }

  render() {
    var formType = this.props.formType;
    var onButtonPress = this.props.onButtonPress;
    var loginButtonText = this.props.loginButtonText;

    return (
      <View>
        <View>
          <LoginForm
            formType={formType}
            form={this.props.auth.form}
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <FormButton
          isDisabled={this.props.auth.form.isFetching}
          onPress={onButtonPress}
          buttonText={loginButtonText}/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRender)