import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';

class Note extends Component {
  render() {
    return <View style={styles.note}>
      <Text style={styles.date}>{this.props.note.date}</Text>
      <Text>{this.props.note.note}</Text>
    </View>
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
    padding:5
  },
  date: {
    textAlign: 'center'
  }
})

export default Note