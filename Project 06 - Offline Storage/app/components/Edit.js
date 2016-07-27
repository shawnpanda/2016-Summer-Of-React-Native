import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class Edit extends Component {
  render() {
    return <View style={styles.container}>
        <Text style={styles.date}>{this.props.date}</Text>
        <Text>{this.props.text}</Text>
      </View>
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  },
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

export default Edit