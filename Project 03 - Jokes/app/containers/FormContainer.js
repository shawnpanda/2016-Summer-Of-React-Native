import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import SignIn from '../components/form'
import { submitName } from '../actions/index'

const FormContainer = connect( null, {submitName})(SignIn)

export default FormContainer