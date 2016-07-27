import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Edit from '../components/Edit'
import { addNote, editNote } from '../actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text, date) => {
      dispatch(addNote(text, date))
    },
    editNote: (id, text) => {
      dispatch(editNote(id, text))
    }
  }
}


const EditContainer = connect(
  () => ({}),
  mapDispatchToProps)(Edit)

export default EditContainer