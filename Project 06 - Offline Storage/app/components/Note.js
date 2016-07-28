import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'

class Note extends Component {
  render() {
    const editNote = () => {Actions.edit({
                                        title:'Edit',
                                        text:this.props.note.note,
                                        id: this.props.note.id, 
                                        date: this.props.note.date})}
    return <TouchableHighlight 
              style={styles.note}
              onPress={editNote}>
        <View>
          <Text style={styles.date}>{this.props.note.date}</Text>
          <Text>{this.props.note.note}</Text>
        </View>
      </TouchableHighlight>
  }
}

var styles = StyleSheet.create({
  note: {
    width: 140,
    height: 150,
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    margin:3,
    padding:5,
    alignItems: 'center'
  },
  date: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Note