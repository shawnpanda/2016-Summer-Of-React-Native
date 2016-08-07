import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux';

class changeToDo extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  constructor(props) {
    super(props);
    if (this.props.id) {
      this.state = {text: this.props.text}
    } else {
      this.state = {text: ''}
    }    
  }

  componentWillMount() {
    if (this.props.id) {
      Actions.refresh({title: 'Edit'})
    } else {
      Actions.refresh({title: 'Add'})
    }
  }

  save() {
    if (this.props.id) { 
      this.props.changeTodo(this.props.id, this.state.text)
    } else {
      this.props.saveTodo(this.state.text)
    }
    Actions.pop()
  }

  render() {
    const buttonDisabled = this.state.text.trim().length === 0
    return (
      <View style={styles.addContainer}>
        <TextInput
          style={styles.editForm}
          placeholder={'Type a new task here'}
          onChangeText={(text) => {this.setState({text: text})}}
          value={this.state.text}
        />
        <TouchableHighlight 
          style={[styles.button , buttonDisabled && styles.buttonDisabled]} 
          disabled={buttonDisabled}
          onPress={this.save.bind(this)}>
          <Text style={styles.buttonText}>{this.props.id ? 'Edit' : 'Add'}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

changeToDo.propTypes = {
  saveTodo: PropTypes.func.isRequired
}

var styles = StyleSheet.create({
  addContainer: {
    paddingTop: 65
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
    paddingVertical: 5,
    marginTop: 20
  },
  buttonDisabled: {
    backgroundColor: 'grey'
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    flex: 1,
  },
  editForm: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    height: 40,
    marginTop: 20,
  }
})

export default connect(({routes}) => ({routes}))(changeToDo)