'use strict'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Map } from 'immutable'

import FormButton from '../components/FormButton'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import t from 'tcomb-form-native'
import * as profileActions from '../actions/profileActions';

let Form = t.form.Form

const actions = [
  profileActions
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
                   .toObject()
  return {
    actions:bindActionCreators(creators, dispatch),
    dispatch
  }
}

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        username: '',
        email: ''
      }
    }
  }

  onChange(value) {
    if (value.username != '') {
      this.props.actions.onProfileFormFieldChange('username', value.username)
    }
    if (value.email != '') {
      this.props.actions.onProfileFormFieldChange('email', value.email)
    }
    this.setState({value})
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: {
        username: props.profile.form.fields.username,
        email: props.profile.form.fields.email
      }
    })
  }

  componentDidMount() {
    this.setState({
      value: {
        username: this.props.profile.form.fields.username,
        email: this.props.profile.form.fields.email
      }
    })
  }

  render() {
    let self = this

    let ProfileForm = t.struct({
      username: t.String,
      email: t.String
    })

    let options = {
      fields: {
        username: {
          label: 'Username',
          maxLength: 12,
          editable: !this.props.profile.form.isFetching,
          hasError: this.props.profile.form.fields.usernameHasError
        },
        email: {
          label: 'Email',
          keyboardType: 'email-address',
          editable: !this.props.profile.form.isFetching,
          hasError: this.props.profile.form.fields.emailHasError
        }
      }
    }
    let profileButtonText = 'Update Profile'
    let onButtonPress = () => {
      this.props.actions.updateProfile(
        this.props.profile.form.fields.username,
        this.props.profile.form.fields.email      
      )
    }
    return (
      <View>
        <Form
          ref="form"
          type={ProfileForm}
          options={options}
          value={this.state.value}
          onChange={this.onChange.bind(self)}
        />
        <FormButton
          isDisabled={!this.props.profile.form.isValid || this.props.profile.form.isUpdating}
          onPress={onButtonPress.bind(self)}
          buttonText={profileButtonText}/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
