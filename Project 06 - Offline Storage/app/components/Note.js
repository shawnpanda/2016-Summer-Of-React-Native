import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';

class Note extends Component {
  render() {
    return <View>
      <Text>{this.props.note.date}:{this.props.note.note}</Text>
    </View>
  }
}

export default Note