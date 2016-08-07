import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { View, Text, ListView } from 'react-native';



const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Movie />
    )
  }

  renderTodo(todo) {
    return (
      <Todo onClick={()=>this.props.onTodoClick(todo.id)} id={todo.id} completed={todo.completed} text={todo.text}/>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList