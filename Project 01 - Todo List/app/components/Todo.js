import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


class Todo extends Component {
  constructor(props) {
    super(props)
  }

  renderButton() {
    if (this.props.completed) {
      return <Icon name="check-circle" size={20} color="#999" />;
    } else {
      return <Icon name="circle-o" size={20} color="#999" />;
    }
  }

  render() {
    const goToEditPage = () => {Actions.changeTodo({id: this.props.id, text: this.props.text})}
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.textContainer} onPress={goToEditPage}>
          <Text>{this.props.text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickButton}
          onPress={this.props.onClick}
        >
          {this.renderButton()}
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  clickButton: {
    alignItems: 'flex-end'
  }
})

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo