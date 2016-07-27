import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import moment from 'moment'
import { Actions } from 'react-native-router-flux'


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { text: this.props.text}

    this.createNote = this.createNote.bind(this)
    this.changeNote = this.changeNote.bind(this)
  }

  createNote() {
    this.props.addNote(this.state.text, moment().format('L'))
    Actions.pop()
  }

  changeNote() {
    this.props.editNote(this.props.id, this.state.text)
    Actions.pop()
  }

  componentWillMount() {
    if (!this.props.text) {
      Actions.refresh({onRight: this.createNote,
                      rightTitle: 'Add'})
    } else {
      Actions.refresh({onRight: this.changeNote,
                      rightTitle: 'Finish'})
    }
  }

  render() {
    return <View style={styles.container}>
        <Text style={styles.date}>
          {this.props.date?this.props.date:moment().format('L')}
        </Text>
        <TextInput
          {...this.props}
          multiline = {true}
          onChange={(event) => {
           this.setState({
             text: event.nativeEvent.text,
             height: event.nativeEvent.contentSize.height,
           });
         }}
         style={[styles.default, {height: Math.max(35, this.state.height)}]}
          value={this.state.text}
        />
      </View>
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

Edit.PropTypes = {
  addNote: PropTypes.func.isRequired, 
  editNote: PropTypes.func.isRequired
}

export default Edit