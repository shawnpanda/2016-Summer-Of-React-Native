import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import SignIn from '../components/form'
import { submitName } from '../actions/index'

const mapStateToProps = (state) => {
  const { FirstName, LastName } = state.person
  return {
    FirstName,
    LastName
  }
}

const FormContainer = connect( mapStateToProps, { submitName })(SignIn)

export default FormContainer