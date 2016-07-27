import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'


class Home extends Component {

  renderNote(note) {
    return <View>
      <Text>{note.date}:{note.note}</Text>
    </View>

  }

  render() {
    var datetime = moment().format('L')
    return (
      <View style={styles.container}>
        <Text>abc</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingTop: 65
  }
})

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Home