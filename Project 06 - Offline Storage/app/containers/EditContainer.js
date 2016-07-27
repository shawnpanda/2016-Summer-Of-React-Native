import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { addNote, editNote } from '../actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const EditContainer = connect(
  () => ({}),
  {addNote, editNote})(Edit)

export default EditContainer