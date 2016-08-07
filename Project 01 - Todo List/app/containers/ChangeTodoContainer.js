import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, editTodo } from '../actions/actions'
import ChangeTodo from '../components/ChangeTodo'

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (text) => {
      dispatch(addTodo(text))
    },
    changeTodo: (id, text) => {
      dispatch(editTodo(id,text))
    }
  }
}

const ChangeTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
  )(ChangeTodo)

export default ChangeTodoContainer